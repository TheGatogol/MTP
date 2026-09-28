@myConversationsAnalytics
Feature: Analytics - My Conversations

    @ANA_EVENT_MC001
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Assistance center page - Internal Link
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the analytics interceptor service is initiated
        When the user accesses to my conversations list
        Then the analytics events contains the following variables:
            | item                                | value                         | type             | event         |
            | analytics                           | analytics/glomo_base          | json schema      | Internal Link |
            | version DL                          | 20250414_5.0                  | string           | Internal Link |
            | page name                           | app:privada:personas:contacto | string           | Internal Link |
            | level 1                             | contacto                      | string           | Internal Link |
            | language                            | ES                            | string           | Internal Link |
            | page area                           | privada                       | string           | Internal Link |
            | page intent                         | informacion                   | string           | Internal Link |
            | channel                             | online                        | string           | Internal Link |
            | page instance ID                    | de                            | string           | Internal Link |
            | page info version                   | appVersion                    | regexp named     | Internal Link |
            | page segment                        | personas                      | string           | Internal Link |
            | sysEnv                              | app                           | string           | Internal Link |
            | business unit                       | BBVA Mexico                   | string           | Internal Link |
            | site app name                       | App BBVA Mexico               | string           | Internal Link |
            | project name                        | Glomo                         | string           | Internal Link |
            | link name                           | mis conversaciones            | string           | Internal Link |
            | device mobile                       | si                            | string           | Internal Link |
            | user userState                      | logado                        | string           | Internal Link |
            | profile ID                          | profileID                     | regexp named     | Internal Link |
            | user segment global                 | 003001                        | string           | Internal Link |
            | user gender                         | gender                        | regexp named     | Internal Link |
            | user age                            | age                           | regexp named     | Internal Link |
            | internal campaign                   |                               | empty array      | Internal Link |
            | optimization attributes             |                               | empty array      | Internal Link |
            | application                         |                               | empty str object | Internal Link |
            | products attributes                 |                               | empty array      | Internal Link |

    @ANA_EVENT_MC002
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client accesses to my conversations - informative modal
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the analytics interceptor service is initiated
        When the user accesses to my conversations for first time
        Then the analytics events contains the following variables:
            | item                    | value                                                        | type             | event     |
            | analytics               | analytics/glomo_base                                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                                 | string           | Page View |
            | page name               | app:privada:personas:contacto:mis conversaciones:informativa | string           | Page View |
            | level 1                 | contacto                                                     | string           | Page View |
            | level 2                 | mis conversaciones                                           | string           | Page View |
            | level 3                 | informativa                                                  | string           | Page View |
            | language                | ES                                                           | string           | Page View |
            | page area               | privada                                                      | string           | Page View |
            | page intent             | informacion                                                  | string           | Page View |
            | channel                 | online                                                       | string           | Page View |
            | page instance ID        | de                                                           | string           | Page View |
            | page info version       | appVersion                                                   | regexp named     | Page View |
            | page segment            | personas                                                     | string           | Page View |
            | sysEnv                  | app                                                          | string           | Page View |
            | business unit           | BBVA Mexico                                                  | string           | Page View |
            | site app name           | App BBVA Mexico                                              | string           | Page View |
            | project name            | Glomo                                                        | string           | Page View |
            | device mobile           | si                                                           | string           | Page View |
            | user userState          | logado                                                       | string           | Page View |
            | profile ID              | profileID                                                    | regexp named     | Page View |
            | user segment global     | 003001                                                       | string           | Page View |
            | user gender             | gender                                                       | regexp named     | Page View |
            | user age                | age                                                          | regexp named     | Page View |
            | internal campaign       |                                                              | empty array      | Page View |
            | optimization attributes |                                                              | empty array      | Page View |
            | application             |                                                              | empty str object | Page View |

    @ANA_EVENT_MC003
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client accesses the list of conversations
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the analytics interceptor service is initiated
        When the user accesses to my conversations list
        Then the analytics events contains the following variables:
            | item                     | value                                            | type             | event     |
            | analytics                | analytics/glomo_base                             | json schema      | Page View |
            | version DL               | 20250414_5.0                                     | string           | Page View |
            | page name                | app:privada:personas:contacto:mis conversaciones | string           | Page View |
            | level 1                  | contacto                                         | string           | Page View |
            | level 2                  | mis conversaciones                               | string           | Page View |
            | language                 | ES                                               | string           | Page View |
            | page area                | privada                                          | string           | Page View |
            | page intent              | informacion                                      | string           | Page View |
            | channel                  | online                                           | string           | Page View |
            | page instance ID         | de                                               | string           | Page View |
            | page info version        | appVersion                                       | regexp named     | Page View |
            | page segment             | personas                                         | string           | Page View |
            | sysEnv                   | app                                              | string           | Page View |
            | business unit            | BBVA Mexico                                      | string           | Page View |
            | site app name            | App BBVA Mexico                                  | string           | Page View |
            | project name             | Glomo                                            | string           | Page View |
            | device mobile            | si                                               | string           | Page View |
            | user userState           | logado                                           | string           | Page View |
            | profile ID               | profileID                                        | regexp named     | Page View |
            | user segment global      | 003001                                           | string           | Page View |
            | user gender              | gender                                           | regexp named     | Page View |
            | user age                 | age                                              | regexp named     | Page View |
            | custom fields            | numero de conversaciones:7                       | string           | Page View |
            | internal campaign        |                                                  | empty array      | Page View |
            | optimization attributes  |                                                  | empty array      | Page View |
            | application              |                                                  | empty str object | Page View |
            | products attributes      |                                                  | empty array      | Page View |

    @ANA_EVENT_MC004
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client views the modal of create conversation
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the user accesses to my conversations list
        And the analytics interceptor service is initiated
        When the user accesses to conversation theme page
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:privada:personas:contacto:mis conversaciones:nueva conversacion | string           | Page View |
            | level 1                 | contacto                                                            | string           | Page View |
            | level 2                 | mis conversaciones                                                  | string           | Page View |
            | level 3                 | nueva conversacion                                                  | string           | Page View |
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
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_EVENT_MC005
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client views the message of a conversation
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the user accesses to my conversations list
        And the analytics interceptor service is initiated
        When the user accesses to conversation with "active" status
        Then the analytics events contains the following variables:
            | item                    | value                                                                | type             | event     |
            | analytics               | analytics/glomo_base                                                 | json schema      | Page View |
            | version DL              | 20250414_5.0                                                         | string           | Page View |
            | page name               | app:privada:personas:contacto:mis conversaciones:conversacion activa | string           | Page View |
            | level 1                 | contacto                                                             | string           | Page View |
            | level 2                 | mis conversaciones                                                   | string           | Page View |
            | level 3                 | conversacion activa                                                  | string           | Page View |
            | language                | ES                                                                   | string           | Page View |
            | page area               | privada                                                              | string           | Page View |
            | page intent             | informacion                                                          | string           | Page View |
            | channel                 | online                                                               | string           | Page View |
            | page instance ID        | de                                                                   | string           | Page View |
            | page info version       | appVersion                                                           | regexp named     | Page View |
            | page segment            | personas                                                             | string           | Page View |
            | sysEnv                  | app                                                                  | string           | Page View |
            | business unit           | BBVA Mexico                                                          | string           | Page View |
            | site app name           | App BBVA Mexico                                                      | string           | Page View |
            | project name            | Glomo                                                                | string           | Page View |
            | device mobile           | si                                                                   | string           | Page View |
            | user userState          | logado                                                               | string           | Page View |
            | profile ID              | profileID                                                            | regexp named     | Page View |
            | user segment global     | 003001                                                               | string           | Page View |
            | user gender             | gender                                                               | regexp named     | Page View |
            | user age                | age                                                                  | regexp named     | Page View |
            | internal campaign       |                                                                      | empty array      | Page View |
            | optimization attributes |                                                                      | empty array      | Page View |
            | application             |                                                                      | empty str object | Page View |
            | products attributes     |                                                                      | empty array      | Page View |

    @ANA_EVENT_MC006
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client accesses the modal of search conversationsations
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the user accesses to my conversations list
        And the analytics interceptor service is initiated
        When the user accesses the conversation search modal
        Then the analytics events contains the following variables:
            | item                    | value                                            | type             | event         |
            | analytics               | analytics/glomo_base                             | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                     | string           | Internal Link |
            | page name               | app:privada:personas:contacto:mis conversaciones | string           | Internal Link |
            | level 1                 | contacto                                         | string           | Internal Link |
            | level 2                 | mis conversaciones                               | string           | Internal Link |
            | language                | ES                                               | string           | Internal Link |
            | page area               | privada                                          | string           | Internal Link |
            | page intent             | informacion                                      | string           | Internal Link |
            | channel                 | online                                           | string           | Internal Link |
            | page instance ID        | de                                               | string           | Internal Link |
            | page info version       | appVersion                                       | regexp named     | Internal Link |
            | page segment            | personas                                         | string           | Internal Link |
            | sysEnv                  | app                                              | string           | Internal Link |
            | business unit           | BBVA Mexico                                      | string           | Internal Link |
            | site app name           | App BBVA Mexico                                  | string           | Internal Link |
            | project name            | Glomo                                            | string           | Internal Link |
            | device mobile           | si                                               | string           | Internal Link |
            | user userState          | logado                                           | string           | Internal Link |
            | profile ID              | profileID                                        | regexp named     | Internal Link |
            | user segment global     | 003001                                           | string           | Internal Link |
            | user gender             | gender                                           | regexp named     | Internal Link |
            | user age                | age                                              | regexp named     | Internal Link |
            | link name               | buscador                                         | string           | Internal Link |
            | internal campaign       |                                                  | empty array      | Internal Link |
            | optimization attributes |                                                  | empty array      | Internal Link |
            | application             |                                                  | empty str object | Internal Link |
            | products attributes     |                                                  | empty array      | Internal Link |

    @ANA_EVENT_MC007
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client searches for a conversation
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the user accesses to my conversations list
        And the analytics interceptor service is initiated
        When the user searches a conversation ""
        Then the analytics events contains the following variables:
            | item                    | value                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                              | string           | Page View |
            | page name               | app:privada:personas:contacto:mis conversaciones:buscador | string           | Page View |
            | level 1                 | contacto                                                  | string           | Page View |
            | level 2                 | mis conversaciones                                        | string           | Page View |
            | level 3                 | buscador                                                  | string           | Page View |
            | language                | ES                                                        | string           | Page View |
            | page area               | privada                                                   | string           | Page View |
            | page intent             | informacion                                               | string           | Page View |
            | channel                 | online                                                    | string           | Page View |
            | page instance ID        | de                                                        | string           | Page View |
            | page info version       | appVersion                                                | regexp named     | Page View |
            | page segment            | personas                                                  | string           | Page View |
            | sysEnv                  | app                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                           | string           | Page View |
            | project name            | Glomo                                                     | string           | Page View |
            | device mobile           | si                                                        | string           | Page View |
            | user userState          | logado                                                    | string           | Page View |
            | profile ID              | profileID                                                 | regexp named     | Page View |
            | user segment global     | 003001                                                    | string           | Page View |
            | user gender             | gender                                                    | regexp named     | Page View |
            | user age                | age                                                       | regexp named     | Page View |
            | on site search result   | 1                                                         | string           | Page View |
            | internal campaign       |                                                           | empty array      | Page View |
            | optimization attributes |                                                           | empty array      | Page View |
            | application             |                                                           | empty str object | Page View |
            | products attributes     |                                                           | empty array      | Page View |

    @ANA_EVENT_MC008
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client accesses the attach file informational modal
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the user accesses to my conversations list
        And the user accesses to conversation theme page
        And the analytics interceptor service is initiated
        When the user adds an attachment and views an informative modal
        Then the analytics events contains the following variables:
            | item                    | value                                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                  | string           | Page View |
            | page name               | app:privada:personas:contacto:mis conversaciones:conversacion activa:adjuntar | string           | Page View |
            | level 1                 | contacto                                                                      | string           | Page View |
            | level 2                 | mis conversaciones                                                            | string           | Page View |
            | level 3                 | conversacion activa                                                           | string           | Page View |
            | level 4                 | adjuntar                                                                      | string           | Page View |
            | language                | ES                                                                            | string           | Page View |
            | page area               | privada                                                                       | string           | Page View |
            | page intent             | informacion                                                                   | string           | Page View |
            | channel                 | online                                                                        | string           | Page View |
            | page instance ID        | de                                                                            | string           | Page View |
            | page info version       | appVersion                                                                    | regexp named     | Page View |
            | page segment            | personas                                                                      | string           | Page View |
            | sysEnv                  | app                                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                                               | string           | Page View |
            | project name            | Glomo                                                                         | string           | Page View |
            | device mobile           | si                                                                            | string           | Page View |
            | user userState          | logado                                                                        | string           | Page View |
            | profile ID              | profileID                                                                     | regexp named     | Page View |
            | user segment global     | 003001                                                                        | string           | Page View |
            | user gender             | gender                                                                        | regexp named     | Page View |
            | user age                | age                                                                           | regexp named     | Page View |
            | internal campaign       |                                                                               | empty array      | Page View |
            | optimization attributes |                                                                               | empty array      | Page View |
            | application             |                                                                               | empty str object | Page View |
            | products attributes     |                                                                               | empty array      | Page View |

    @ANA_EVENT_MC009
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client views the modal error
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the analytics interceptor service is initiated
        When the user accesses to my conversations list
        Then the analytics events contains the following variables:
            | item                                          | value                                                                         | type             | event     |
            | analytics                                     | analytics/glomo_base                                                          | json schema      | Page View |
            | version DL                                    | 20250414_5.0                                                                  | string           | Page View |
            | page name                                     | app:privada:personas:contacto:mis conversaciones:error listar conversaciones  | string           | Page View |
            | level 1                                       | contacto                                                                      | string           | Page View |
            | level 2                                       | mis conversaciones                                                            | string           | Page View |
            | level 3                                       | error listar conversaciones                                                   | string           | Page View |
            | error page                                    | error listar conversaciones                                                   | string           | Page View |
            | language                                      | ES                                                                            | string           | Page View |
            | page area                                     | privada                                                                       | string           | Page View |
            | page intent                                   | informacion                                                                   | string           | Page View |
            | channel                                       | online                                                                        | string           | Page View |
            | page instance ID                              | de                                                                            | string           | Page View |
            | page info version                             | appVersion                                                                    | regexp named     | Page View |
            | page segment                                  | personas                                                                      | string           | Page View |
            | sysEnv                                        | app                                                                           | string           | Page View |
            | business unit                                 | BBVA Mexico                                                                   | string           | Page View |
            | site app name                                 | App BBVA Mexico                                                               | string           | Page View |
            | project name                                  | Glomo                                                                         | string           | Page View |
            | device mobile                                 | si                                                                            | string           | Page View |
            | user userState                                | logado                                                                        | string           | Page View |
            | profile ID                                    | profileID                                                                     | regexp named     | Page View |
            | user segment global                           | 003001                                                                        | string           | Page View |
            | user gender                                   | gender                                                                        | regexp named     | Page View |
            | user age                                      | age                                                                           | regexp named     | Page View |
            | internal campaign                             |                                                                               | empty array      | Page View |
            | optimization attributes                       |                                                                               | empty array      | Page View |
            | application                                   |                                                                               | empty str object | Page View |
            | products attributes                           |                                                                               | empty array      | Page View |

    @ANA_EVENT_MC010
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client creates a conversation
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the user accesses to my conversations list
        And the analytics interceptor service is initiated
        When the user makes a conversation with the banker
        Then the analytics events contains the following variables:
            | item                    | value                                                               | type             | event         |
            | analytics               | analytics/glomo_base                                                | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                        | string           | Internal Link |
            | page name               | app:privada:personas:contacto:mis conversaciones:nueva conversacion | string           | Internal Link |
            | level 1                 | contacto                                                            | string           | Internal Link |
            | level 2                 | mis conversaciones                                                  | string           | Internal Link |
            | level 3                 | nueva conversacion                                                  | string           | Internal Link |
            | language                | ES                                                                  | string           | Internal Link |
            | page area               | privada                                                             | string           | Internal Link |
            | page intent             | informacion                                                         | string           | Internal Link |
            | channel                 | online                                                              | string           | Internal Link |
            | page instance ID        | de                                                                  | string           | Internal Link |
            | page info version       | appVersion                                                          | regexp named     | Internal Link |
            | page segment            | personas                                                            | string           | Internal Link |
            | sysEnv                  | app                                                                 | string           | Internal Link |
            | business unit           | BBVA Mexico                                                         | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                     | string           | Internal Link |
            | project name            | Glomo                                                               | string           | Internal Link |
            | device mobile           | si                                                                  | string           | Internal Link |
            | user userState          | logado                                                              | string           | Internal Link |
            | profile ID              | profileID                                                           | regexp named     | Internal Link |
            | user segment global     | 003001                                                              | string           | Internal Link |
            | user gender             | gender                                                              | regexp named     | Internal Link |
            | user age                | age                                                                 | regexp named     | Internal Link |
            | link name               | crear conversacion                                                  | string           | Internal Link |
            | internal campaign       |                                                                     | empty array      | Internal Link |
            | optimization attributes |                                                                     | empty array      | Internal Link |
            | application             |                                                                     | empty str object | Internal Link |
            | products attributes     |                                                                     | empty array      | Internal Link |

    @ANA_EVENT_MC011
    @analytics
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: Patrimonial client accesses a resolved conversation
        Given a user with the following criteria
            | criteria                   |
            | patrimonial account futura |
        And the user accesses to assistance center
        And the user accesses to my conversations list
        And the analytics interceptor service is initiated
        When the user accesses to conversation with "resolved" status
        Then the analytics events contains the following variables:
            | item                    | value                                                                         | type             | event     |
            | analytics               | analytics/glomo_base                                                          | json schema      | Page View |
            | version DL              | 20250414_5.0                                                                  | string           | Page View |
            | page name               | app:privada:personas:contacto:mis conversaciones:conversacion activa:resuelta | string           | Page View |
            | level 1                 | contacto                                                                      | string           | Page View |
            | level 2                 | mis conversaciones                                                            | string           | Page View |
            | level 3                 | conversacion activa                                                           | string           | Page View |
            | level 4                 | resuelta                                                                      | string           | Page View |
            | language                | ES                                                                            | string           | Page View |
            | page area               | privada                                                                       | string           | Page View |
            | page intent             | informacion                                                                   | string           | Page View |
            | channel                 | online                                                                        | string           | Page View |
            | page instance ID        | de                                                                            | string           | Page View |
            | page info version       | appVersion                                                                    | regexp named     | Page View |
            | page segment            | personas                                                                      | string           | Page View |
            | sysEnv                  | app                                                                           | string           | Page View |
            | business unit           | BBVA Mexico                                                                   | string           | Page View |
            | site app name           | App BBVA Mexico                                                               | string           | Page View |
            | project name            | Glomo                                                                         | string           | Page View |
            | device mobile           | si                                                                            | string           | Page View |
            | user userState          | logado                                                                        | string           | Page View |
            | profile ID              | profileID                                                                     | regexp named     | Page View |
            | user segment global     | 003001                                                                        | string           | Page View |
            | user gender             | gender                                                                        | regexp named     | Page View |
            | user age                | age                                                                           | regexp named     | Page View |
            | internal campaign       |                                                                               | empty array      | Page View |
            | optimization attributes |                                                                               | empty array      | Page View |
            | application             |                                                                               | empty str object | Page View |
            | products attributes     |                                                                               | empty array      | Page View |

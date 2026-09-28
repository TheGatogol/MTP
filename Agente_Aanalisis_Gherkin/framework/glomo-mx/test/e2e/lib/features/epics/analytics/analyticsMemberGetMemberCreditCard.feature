@memberGetMemberCreditCardAnalytics
Feature: Analytics - Member Get Member Credit Card

    @ANA_EVENT_MGMTDC001
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - APP ON CLICK START
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        When the user accesses to member get member "offer button link"
        Then the analytics events contains the following variables
            | item                     |  value                                     | type         |  event             |
            | analytics                | analytics/glomo_base                       | json schema  | App On Click Start |
            | version DL               | 20250414_5.0                               | string       | App On Click Start |
            | page name                | app:privada:personas:invitar a un amigo    | string       | App On Click Start |
            | level 1                  | invitar a un amigo                         | string       | App On Click Start |
            | language                 | ES                                         | string       | App On Click Start |
            | page area                | privada                                    | string       | App On Click Start |
            | page intent              | informacion                                | string       | App On Click Start |
            | channel                  | online                                     | string       | App On Click Start |
            | page instance ID         | de                                         | string       | App On Click Start |
            | page info version        | appVersion                                 | regexp named | App On Click Start |
            | page segment             | personas                                   | string       | App On Click Start |
            | sysEnv                   | app                                        | string       | App On Click Start |
            | business unit            | BBVA Mexico                                | string       | App On Click Start |
            | site app name            | App BBVA Mexico                            | string       | App On Click Start |
            | project name             | Glomo                                      | string       | App On Click Start |
            | device mobile            | si                                         | string       | App On Click Start |
            | user userState           | logado                                     | string       | App On Click Start |
            | user segment global      | 003001                                     | string       | App On Click Start |
            | profile ID               | profileID                                  | regexp named | App On Click Start |
            | user gender              | gender                                     | regexp named | App On Click Start |
            | user age                 | age                                        | regexp named | App On Click Start |
            | global application       | member get member tdc                      | string       | App On Click Start |
            | application name         | invitar amigo tdc                          | string       | App On Click Start |
            | application type         | operativa                                  | string       | App On Click Start |
            | fulfillment model        | online                                     | string       | App On Click Start |
            | application step         | me interesa                                | string       | App On Click Start |
            | product primary category | tarjetas                                   | string       | App On Click Start |
            | internal campaign        |                                            | empty array  | App On Click Start |
            | optimization attributes  |                                            | empty array  | App On Click Start |

    @ANA_EVENT_MGMTDC002
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - APP ON CLICK START 2
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        And the analytics interceptor service is initiated
        When the user completes the referrals registration and continue inviting
        Then the analytics events contains the following variables
            | item                     |  value                                                     | type         |event              |
            | analytics                | analytics/glomo_base                                       | json schema  |App On Click Start |
            | version DL               | 20250414_5.0                                               | string       |App On Click Start |
            | page name                | app:privada:personas:invitar a un amigo tdc:pagina exitosa | string       |App On Click Start |
            | level 1                  | invitar a un amigo tdc                                     | string       |App On Click Start |
            | level 2                  | pagina exitosa                                             | string       |App On Click Start |
            | language                 | ES                                                         | string       |App On Click Start |
            | page area                | privada                                                    | string       |App On Click Start |
            | page intent              | informacion                                                | string       |App On Click Start |
            | channel                  | online                                                     | string       |App On Click Start |
            | page instance ID         | de                                                         | string       |App On Click Start |
            | page info version        | appVersion                                                 | regexp named |App On Click Start |
            | page segment             | personas                                                   | string       |App On Click Start |
            | sysEnv                   | app                                                        | string       |App On Click Start |
            | business unit            | BBVA Mexico                                                | string       |App On Click Start |
            | site app name            | App BBVA Mexico                                            | string       |App On Click Start |
            | project name             | Glomo                                                      | string       |App On Click Start |
            | device mobile            | si                                                         | string       |App On Click Start |
            | user userState           | logado                                                     | string       |App On Click Start |
            | user segment global      | 003001                                                     | string       |App On Click Start |
            | profile ID               | profileID                                                  | regexp named |App On Click Start |
            | user gender              | gender                                                     | regexp named |App On Click Start |
            | user age                 | age                                                        | regexp named |App On Click Start |
            | global application       | member get member tdc                                      | string       |App On Click Start |
            | application name         | invitar amigo tdc                                          | string       |App On Click Start |
            | application type         | operativa                                                  | string       |App On Click Start |
            | fulfillment model        | online                                                     | string       |App On Click Start |
            | application step         | registrar otro invitado                                    | string       |App On Click Start |
            | custom fields            | usuario agregado:1                                         | string       |App On Click Start |
            | product primary category | tarjetas                                                   | string       |App On Click Start |
            | internal campaign        |                                                            | empty array  |App On Click Start |
            | optimization attributes  |                                                            | empty array  |App On Click Start |

    @ANA_EVENT_MGMTDC003
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - APP PAGE VISIT
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        When the user accesses to member get member "offer button link"
        Then the analytics events contains the following variables
            | item                     |  value                                                             | type         |  event          |
            | analytics                | analytics/glomo_base                                               | json schema  | App Page Visit  |
            | version DL               | 20250414_5.0                                                       | string       | App Page Visit  |
            | page name                |  app:privada:personas:invitar a un amigo tdc:1 invitados tarjeta   | string       | App Page Visit  |
            | level 1                  | invitar a un amigo tdc                                             | string       | App Page Visit  |
            | level 2                  | 1 invitados tarjeta                                                | string       | App Page Visit  |
            | language                 | ES                                                                 | string       | App Page Visit  |
            | page area                | privada                                                            | string       | App Page Visit  |
            | page intent              | informacion                                                        | string       | App Page Visit  |
            | channel                  | online                                                             | string       | App Page Visit  |
            | page instance ID         | de                                                                 | string       | App Page Visit  |
            | page info version        | appVersion                                                         | regexp named | App Page Visit  |
            | page segment             | personas                                                           | string       | App Page Visit  |
            | sysEnv                   | app                                                                | string       | App Page Visit  |
            | business unit            | BBVA Mexico                                                        | string       | App Page Visit  |
            | site app name            | App BBVA Mexico                                                    | string       | App Page Visit  |
            | project name             | Glomo                                                              | string       | App Page Visit  |
            | device mobile            | si                                                                 | string       | App Page Visit  |
            | user userState           | logado                                                             | string       | App Page Visit  |
            | user segment global      | 003001                                                             | string       | App Page Visit  |
            | profile ID               | profileID                                                          | regexp named | App Page Visit  |
            | user gender              | gender                                                             | regexp named | App Page Visit  |
            | user age                 | age                                                                | regexp named | App Page Visit  |
            | global application       | member get member tdc                                              | string       | App Page Visit  |
            | application name         | invitar amigo tdc                                                  | string       | App Page Visit  |
            | application type         | operativa                                                          | string       | App Page Visit  |
            | fulfillment model        | online                                                             | string       | App Page Visit  |
            | application step         | 1 invitados tarjeta                                                | string       | App Page Visit  |
            | product primary category | tarjetas                                                           | string       | App Page Visit  |
            | internal campaign        |                                                                    | empty array  | App Page Visit  |
            | optimization attributes  |                                                                    | empty array  | App Page Visit  |

    @ANA_EVENT_MGMTDC004
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - APP STARTED
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        When the user accesses to member get member "tdc registration form"
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event       |
            | analytics                | analytics/glomo_base                                            | json schema  | App Started |
            | version DL               | 20250414_5.0                                                    | string       | App Started |
            | page name                | app:privada:personas:invitar a un amigo tdc:1 invitados tarjeta | string       | App Started |
            | level 1                  | invitar a un amigo tdc                                          | string       | App Started |
            | level 2                  | 1 invitados tarjeta                                             | string       | App Started |
            | language                 | ES                                                              | string       | App Started |
            | page area                | privada                                                         | string       | App Started |
            | page intent              | informacion                                                     | string       | App Started |
            | channel                  | online                                                          | string       | App Started |
            | page instance ID         | de                                                              | string       | App Started |
            | page info version        | appVersion                                                      | regexp named | App Started |
            | page segment             | personas                                                        | string       | App Started |
            | sysEnv                   | app                                                             | string       | App Started |
            | business unit            | BBVA Mexico                                                     | string       | App Started |
            | site app name            | App BBVA Mexico                                                 | string       | App Started |
            | project name             | Glomo                                                           | string       | App Started |
            | device mobile            | si                                                              | string       | App Started |
            | user userState           | logado                                                          | string       | App Started |
            | user segment global      | 003001                                                          | string       | App Started |
            | profile ID               | profileID                                                       | regexp named | App Started |
            | user gender              | gender                                                          | regexp named | App Started |
            | user age                 | age                                                             | regexp named | App Started |
            | global application       | member get member tdc                                           | string       | App Started |
            | application name         | invitar amigo tdc                                               | string       | App Started |
            | application type         | operativa                                                       | string       | App Started |
            | fulfillment model        | online                                                          | string       | App Started |
            | application step         | registrar invitado                                              | string       | App Started |
            | product primary category | tarjetas                                                        | string       | App Started |
            | internal campaign        |                                                                 | empty array  | App Started |
            | optimization attributes  |                                                                 | empty array  | App Started |

    @ANA_EVENT_MGMTDC005
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - APP STEP 2
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        When the user accesses to member get member "tdc registration form"
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event      |
            | analytics                | analytics/glomo_base                                            | json schema  | App Step 2 |
            | version DL               | 20250414_5.0                                                    | string       | App Step 2 |
            | page name                | app:privada:personas:invitar a un amigo tdc:2 datos invitado    | string       | App Step 2 |
            | level 1                  | invitar a un amigo tdc                                          | string       | App Step 2 |
            | level 2                  | 2 datos invitado                                                | string       | App Step 2 |
            | language                 | ES                                                              | string       | App Step 2 |
            | page area                | privada                                                         | string       | App Step 2 |
            | page intent              | informacion                                                     | string       | App Step 2 |
            | channel                  | online                                                          | string       | App Step 2 |
            | page instance ID         | de                                                              | string       | App Step 2 |
            | page info version        | appVersion                                                      | regexp named | App Step 2 |
            | page segment             | personas                                                        | string       | App Step 2 |
            | sysEnv                   | app                                                             | string       | App Step 2 |
            | business unit            | BBVA Mexico                                                     | string       | App Step 2 |
            | site app name            | App BBVA Mexico                                                 | string       | App Step 2 |
            | project name             | Glomo                                                           | string       | App Step 2 |
            | device mobile            | si                                                              | string       | App Step 2 |
            | user userState           | logado                                                          | string       | App Step 2 |
            | user segment global      | 003001                                                          | string       | App Step 2 |
            | profile ID               | profileID                                                       | regexp named | App Step 2 |
            | user gender              | gender                                                          | regexp named | App Step 2 |
            | user age                 | age                                                             | regexp named | App Step 2 |
            | global application       | member get member tdc                                           | string       | App Step 2 |
            | application name         | invitar amigo tdc                                               | string       | App Step 2 |
            | application type         | operativa                                                       | string       | App Step 2 |
            | fulfillment model        | online                                                          | string       | App Step 2 |
            | application step         | 2 datos invitado                                                | string       | App Step 2 |
            | custom fields            | usuario agregado:0                                              | string       | App Step 2 |
            | product primary category | tarjetas                                                        | string       | App Step 2 |
            | internal campaign        |                                                                 | empty array  | App Step 2 |
            | optimization attributes  |                                                                 | empty array  | App Step 2 |

    @ANA_EVENT_MGMTDC006
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - APP STEP 3
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        And the user accesses to member get member "tdc registration form"
        When the user "completes" the referrals personal information
        Then the analytics events contains the following variables
            | item                     | value                                                              | type         | event      |
            | analytics                | analytics/glomo_base                                               | json schema  | App Step 3 |
            | version DL               | 20250414_5.0                                                       | string       | App Step 3 |
            | page name                | app:privada:personas:invitar a un amigo tdc:3 direccion invitado   | string       | App Step 3 |
            | level 1                  | invitar a un amigo tdc                                             | string       | App Step 3 |
            | level 2                  | 3 direccion invitado                                               | string       | App Step 3 |
            | language                 | ES                                                                 | string       | App Step 3 |
            | page area                | privada                                                            | string       | App Step 3 |
            | page intent              | informacion                                                        | string       | App Step 3 |
            | channel                  | online                                                             | string       | App Step 3 |
            | page instance ID         | de                                                                 | string       | App Step 3 |
            | page info version        | appVersion                                                         | regexp named | App Step 3 |
            | page segment             | personas                                                           | string       | App Step 3 |
            | sysEnv                   | app                                                                | string       | App Step 3 |
            | business unit            | BBVA Mexico                                                        | string       | App Step 3 |
            | site app name            | App BBVA Mexico                                                    | string       | App Step 3 |
            | project name             | Glomo                                                              | string       | App Step 3 |
            | device mobile            | si                                                                 | string       | App Step 3 |
            | user userState           | logado                                                             | string       | App Step 3 |
            | user segment global      | 003001                                                             | string       | App Step 3 |
            | profile ID               | profileID                                                          | regexp named | App Step 3 |
            | user gender              | gender                                                             | regexp named | App Step 3 |
            | user age                 | age                                                                | regexp named | App Step 3 |
            | global application       | member get member tdc                                              | string       | App Step 3 |
            | application name         | invitar amigo tdc                                                  | string       | App Step 3 |
            | application type         | operativa                                                          | string       | App Step 3 |
            | fulfillment model        | online                                                             | string       | App Step 3 |
            | application step         | 3 direccion invitado                                               | string       | App Step 3 |
            | custom fields            | usuario agregado:0                                                 | string       | App Step 3 |
            | product primary category | tarjetas                                                           | string       | App Step 3 |
            | internal campaign        |                                                                    | empty array  | App Step 3 |
            | optimization attributes  |                                                                    | empty array  | App Step 3 |

    @ANA_EVENT_MGMTDC007
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - APP STEP 4
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        And the analytics interceptor service is initiated
        When the user "completes" the referrals address information
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event      |
            | analytics                | analytics/glomo_base                                            | json schema  | App Step 4 |
            | version DL               | 20250414_5.0                                                    | string       | App Step 4 |
            | page name                | app:privada:personas:invitar a un amigo tdc:4 confirmacion      | string       | App Step 4 |
            | level 1                  | invitar a un amigo tdc                                          | string       | App Step 4 |
            | level 2                  | 4 confirmacion                                                  | string       | App Step 4 |
            | language                 | ES                                                              | string       | App Step 4 |
            | page area                | privada                                                         | string       | App Step 4 |
            | page intent              | informacion                                                     | string       | App Step 4 |
            | channel                  | online                                                          | string       | App Step 4 |
            | page instance ID         | de                                                              | string       | App Step 4 |
            | page info version        | appVersion                                                      | regexp named | App Step 4 |
            | page segment             | personas                                                        | string       | App Step 4 |
            | sysEnv                   | app                                                             | string       | App Step 4 |
            | business unit            | BBVA Mexico                                                     | string       | App Step 4 |
            | site app name            | App BBVA Mexico                                                 | string       | App Step 4 |
            | project name             | Glomo                                                           | string       | App Step 4 |
            | device mobile            | si                                                              | string       | App Step 4 |
            | user userState           | logado                                                          | string       | App Step 4 |
            | user segment global      | 003001                                                          | string       | App Step 4 |
            | profile ID               | profileID                                                       | regexp named | App Step 4 |
            | user gender              | gender                                                          | regexp named | App Step 4 |
            | user age                 | age                                                             | regexp named | App Step 4 |
            | global application       | member get member tdc                                           | string       | App Step 4 |
            | application name         | invitar amigo tdc                                               | string       | App Step 4 |
            | application type         | operativa                                                       | string       | App Step 4 |
            | fulfillment model        | online                                                          | string       | App Step 4 |
            | application step         | 4 confirmacion                                                  | string       | App Step 4 |
            | custom fields            | usuario agregado:0                                              | string       | App Step 4 |
            | product primary category | tarjetas                                                        | string       | App Step 4 |
            | internal campaign        |                                                                 | empty array  | App Step 4 |
            | optimization attributes  |                                                                 | empty array  | App Step 4 |

    @ANA_EVENT_MGMTDC008
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - APP COMPLETED
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        And the analytics interceptor service is initiated
        When the user completes the referrals registration
        Then the analytics events contains the following variables
            | item                     | value                                                           | type         | event         |
            | analytics                | analytics/glomo_base                                            | json schema  | App Completed |
            | version DL               | 20250414_5.0                                                    | string       | App Completed |
            | page name                | app:privada:personas:invitar a un amigo tdc:pagina exitosa      | string       | App Completed |
            | level 1                  | invitar a un amigo tdc                                          | string       | App Completed |
            | level 2                  | pagina exitosa                                                  | string       | App Completed |
            | language                 | ES                                                              | string       | App Completed |
            | page area                | privada                                                         | string       | App Completed |
            | page intent              | informacion                                                     | string       | App Completed |
            | channel                  | online                                                          | string       | App Completed |
            | page instance ID         | de                                                              | string       | App Completed |
            | page info version        | appVersion                                                      | regexp named | App Completed |
            | page segment             | personas                                                        | string       | App Completed |
            | sysEnv                   | app                                                             | string       | App Completed |
            | business unit            | BBVA Mexico                                                     | string       | App Completed |
            | site app name            | App BBVA Mexico                                                 | string       | App Completed |
            | project name             | Glomo                                                           | string       | App Completed |
            | device mobile            | si                                                              | string       | App Completed |
            | user userState           | logado                                                          | string       | App Completed |
            | user segment global      | 003001                                                          | string       | App Completed |
            | profile ID               | profileID                                                       | regexp named | App Completed |
            | user gender              | gender                                                          | regexp named | App Completed |
            | user age                 | age                                                             | regexp named | App Completed |
            | global application       | member get member tdc                                           | string       | App Completed |
            | application name         | invitar amigo tdc                                               | string       | App Completed |
            | application type         | operativa                                                       | string       | App Completed |
            | fulfillment model        | online                                                          | string       | App Completed |
            | application step         | pagina exitosa                                                  | string       | App Completed |
            | application state        | finalizado                                                      | string       | App Completed |
            | custom fields            | usuario agregado:1                                              | string       | App Completed |
            | product primary category | tarjetas                                                        | string       | App Completed |
            | internal campaign        |                                                                 | empty array  | App Completed |
            | optimization attributes  |                                                                 | empty array  | App Completed |

    @ANA_EVENT_MGMTDC009
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - FOOTPRINT REWARD DETAIL HISTORY
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        And the analytics interceptor service is initiated
        When the user taps on the "reward detail history link"
        Then the analytics events contains the following variables
            | item                     | value                                                           | type             | event     | event number  |
            | analytics                | analytics/glomo_base                                            | json schema      | Page View | 2             |
            | version DL               | 20250414_5.0                                                    | string           | Page View | 2             |
            | page name                | app:privada:personas:invitar a un amigo:historial de premios    | string           | Page View | 2             |
            | level 1                  | invitar a un amigo                                              | string           | Page View | 2             |
            | level 2                  | historial de premios                                            | string           | Page View | 2             |
            | language                 | ES                                                              | string           | Page View | 2             |
            | page area                | privada                                                         | string           | Page View | 2             |
            | page intent              | informacion                                                     | string           | Page View | 2             |
            | channel                  | online                                                          | string           | Page View | 2             |
            | page instance ID         | de                                                              | string           | Page View | 2             |
            | page info version        | appVersion                                                      | regexp named     | Page View | 2             |
            | page segment             | personas                                                        | string           | Page View | 2             |
            | sysEnv                   | app                                                             | string           | Page View | 2             |
            | business unit            | BBVA Mexico                                                     | string           | Page View | 2             |
            | site app name            | App BBVA Mexico                                                 | string           | Page View | 2             |
            | project name             | Glomo                                                           | string           | Page View | 2             |
            | device mobile            | si                                                              | string           | Page View | 2             |
            | user userState           | logado                                                          | string           | Page View | 2             |
            | user segment global      | 003001                                                          | string           | Page View | 2             |
            | profile ID               | profileID                                                       | regexp named     | Page View | 2             |
            | user gender              | gender                                                          | regexp named     | Page View | 2             |
            | user age                 | age                                                             | regexp named     | Page View | 2             |
            | internal campaign        |                                                                 | empty array      | Page View | 2             |
            | optimization attributes  |                                                                 | empty array      | Page View | 2             |
            | application              |                                                                 | empty str object | Page View | 2             |
            | products attributes      |                                                                 | empty array      | Page View | 2             |

    @ANA_EVENT_MGMTDC010
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - FOOTPRINT REWARD DETAIL
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        And the analytics interceptor service is initiated
        When the user taps on the "reward item"
        Then the analytics events contains the following variables
            | item                     | value                                                           | type             | event     | event number  |
            | analytics                | analytics/glomo_base                                            | json schema      | Page View | 1             |
            | version DL               | 20250414_5.0                                                    | string           | Page View | 1             |
            | page name                | app:privada:personas:invitar a un amigo:detalle de premios      | string           | Page View | 1             |
            | level 1                  | invitar a un amigo                                              | string           | Page View | 1             |
            | level 2                  | detalle de premios                                              | string           | Page View | 1             |
            | language                 | ES                                                              | string           | Page View | 1             |
            | page area                | privada                                                         | string           | Page View | 1             |
            | page intent              | informacion                                                     | string           | Page View | 1             |
            | channel                  | online                                                          | string           | Page View | 1             |
            | page instance ID         | de                                                              | string           | Page View | 1             |
            | page info version        | appVersion                                                      | regexp named     | Page View | 1             |
            | page segment             | personas                                                        | string           | Page View | 1             |
            | sysEnv                   | app                                                             | string           | Page View | 1             |
            | business unit            | BBVA Mexico                                                     | string           | Page View | 1             |
            | site app name            | App BBVA Mexico                                                 | string           | Page View | 1             |
            | project name             | Glomo                                                           | string           | Page View | 1             |
            | device mobile            | si                                                              | string           | Page View | 1             |
            | user userState           | logado                                                          | string           | Page View | 1             |
            | user segment global      | 003001                                                          | string           | Page View | 1             |
            | profile ID               | profileID                                                       | regexp named     | Page View | 1             |
            | user gender              | gender                                                          | regexp named     | Page View | 1             |
            | user age                 | age                                                             | regexp named     | Page View | 1             |
            | internal campaign        |                                                                 | empty array      | Page View | 1             |
            | optimization attributes  |                                                                 | empty array      | Page View | 1             |
            | application              |                                                                 | empty str object | Page View | 1             |
            | products attributes      |                                                                 | empty array      | Page View | 1             |

    @ANA_EVENT_MGMTDC011
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - PAGE VIEW INVITA UN AMIGO
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        When the user accesses to invite your friend in the sidebar
        Then the device contains the following variables
            | item                     | value                                             | type             |
            | analytics                | analytics/glomo_base                              | json schema      |
            | version DL               | 20250414_5.0                                      | string           |
            | page name                | app:privada:personas:invitar a un amigo           | string           |
            | level 1                  | invitar a un amigo                                | string           |
            | language                 | ES                                                | string           |
            | page area                | privada                                           | string           |
            | page intent              | informacion                                       | string           |
            | channel                  | online                                            | string           |
            | page instance ID         | de                                                | string           |
            | page info version        | appVersion                                        | regexp named     |
            | page segment             | personas                                          | string           |
            | sysEnv                   | app                                               | string           |
            | business unit            | BBVA Mexico                                       | string           |
            | site app name            | App BBVA Mexico                                   | string           |
            | project name             | Glomo                                             | string           |
            | device mobile            | si                                                | string           |
            | user userState           | logado                                            | string           |
            | user segment global      | 003001                                            | string           |
            | profile ID               | profileID                                         | regexp named     |
            | user gender              | gender                                            | regexp named     |
            | user age                 | age                                               | regexp named     |
            | internal campaign        |                                                   | empty array      |
            | optimization attributes  |                                                   | empty array      |
            | application              |                                                   | empty str object |
            | products attributes      |                                                   | empty array      |

    @ANA_EVENT_MGMTDC012
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - FOOTPRINT BONIFICATION DETAIL
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the user taps on the "rewards option"
        And the analytics interceptor service is initiated
        When the user taps on the "bonification item"
        Then the analytics events contains the following variables
            | item                     | value                                                           | type             | event     | event number |
            | analytics                | analytics/glomo_base                                            | json schema      | Page View | 3            |
            | version DL               | 20250414_5.0                                                    | string           | Page View | 3            |
            | page name                | app:privada:personas:invitar a un amigo:detalle de bonificacion | string           | Page View | 3            |
            | level 1                  | invitar a un amigo                                              | string           | Page View | 3            |
            | level 2                  | detalle de bonificacion                                         | string           | Page View | 3            |
            | language                 | ES                                                              | string           | Page View | 3            |
            | page area                | privada                                                         | string           | Page View | 3            |
            | page intent              | informacion                                                     | string           | Page View | 3            |
            | channel                  | online                                                          | string           | Page View | 3            |
            | page instance ID         | de                                                              | string           | Page View | 3            |
            | page info version        | appVersion                                                      | regexp named     | Page View | 3            |
            | page segment             | personas                                                        | string           | Page View | 3            |
            | sysEnv                   | app                                                             | string           | Page View | 3            |
            | business unit            | BBVA Mexico                                                     | string           | Page View | 3            |
            | site app name            | App BBVA Mexico                                                 | string           | Page View | 3            |
            | project name             | Glomo                                                           | string           | Page View | 3            |
            | device mobile            | si                                                              | string           | Page View | 3            |
            | user userState           | logado                                                          | string           | Page View | 3            |
            | user segment global      | 003001                                                          | string           | Page View | 3            |
            | profile ID               | profileID                                                       | regexp named     | Page View | 3            |
            | user gender              | gender                                                          | regexp named     | Page View | 3            |
            | user age                 | age                                                             | regexp named     | Page View | 3            |
            | internal campaign        |                                                                 | empty array      | Page View | 3            |
            | optimization attributes  |                                                                 | empty array      | Page View | 3            |
            | application              |                                                                 | empty str object | Page View | 3            |
            | products attributes      |                                                                 | empty array      | Page View | 3            |

    @ANA_EVENT_MGMTDC013
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - ERROR PAGE - REGISTER ERROR
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        And the analytics interceptor service is initiated
        When the user completes the referrals registration with error
        Then the analytics events contains the following variables
            | item                     | value                                                           | type             | event     |
            | analytics                | analytics/glomo_base                                            | json schema      | Page View |
            | version DL               | 20250414_5.0                                                    | string           | Page View |
            | page name                | app:privada:personas:invitar a un amigo tdc:error de registro   | string           | Page View |
            | level 1                  | invitar a un amigo tdc                                          | string           | Page View |
            | level 2                  | error de registro                                               | string           | Page View |
            | language                 | ES                                                              | string           | Page View |
            | page area                | privada                                                         | string           | Page View |
            | page intent              | informacion                                                     | string           | Page View |
            | channel                  | online                                                          | string           | Page View |
            | page instance ID         | de                                                              | string           | Page View |
            | page info version        | appVersion                                                      | regexp named     | Page View |
            | page segment             | personas                                                        | string           | Page View |
            | sysEnv                   | app                                                             | string           | Page View |
            | business unit            | BBVA Mexico                                                     | string           | Page View |
            | site app name            | App BBVA Mexico                                                 | string           | Page View |
            | project name             | Glomo                                                           | string           | Page View |
            | device mobile            | si                                                              | string           | Page View |
            | user userState           | logado                                                          | string           | Page View |
            | user segment global      | 003001                                                          | string           | Page View |
            | profile ID               | profileID                                                       | regexp named     | Page View |
            | user gender              | gender                                                          | regexp named     | Page View |
            | user age                 | age                                                             | regexp named     | Page View |
            | error page               | error de registro                                               | string           | Page View |
            | internal campaign        |                                                                 | empty array      | Page View |
            | optimization attributes  |                                                                 | empty array      | Page View |
            | application              |                                                                 | empty str object | Page View |
            | products attributes      |                                                                 | empty array      | Page View |

    @ANA_EVENT_MGMTDC014
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - HUELLA MAPA
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        And the analytics interceptor service is initiated
        When the user accesses to address finder modal
        Then the analytics events contains the following variables
            | item                     | value                                                           | type             | event     |
            | analytics                | analytics/glomo_base                                            | json schema      | Page View |
            | version DL               | 20250414_5.0                                                    | string           | Page View |
            | page name                | app:privada:personas:invitar a un amigo tdc:ubicacion           | string           | Page View |
            | level 1                  | invitar a un amigo tdc                                          | string           | Page View |
            | level 2                  | ubicacion                                                       | string           | Page View |
            | language                 | ES                                                              | string           | Page View |
            | page area                | privada                                                         | string           | Page View |
            | page intent              | informacion                                                     | string           | Page View |
            | channel                  | online                                                          | string           | Page View |
            | page instance ID         | de                                                              | string           | Page View |
            | page info version        | appVersion                                                      | regexp named     | Page View |
            | page segment             | personas                                                        | string           | Page View |
            | sysEnv                   | app                                                             | string           | Page View |
            | business unit            | BBVA Mexico                                                     | string           | Page View |
            | site app name            | App BBVA Mexico                                                 | string           | Page View |
            | project name             | Glomo                                                           | string           | Page View |
            | device mobile            | si                                                              | string           | Page View |
            | user userState           | logado                                                          | string           | Page View |
            | user segment global      | 003001                                                          | string           | Page View |
            | profile ID               | profileID                                                       | regexp named     | Page View |
            | user gender              | gender                                                          | regexp named     | Page View |
            | user age                 | age                                                             | regexp named     | Page View |
            | internal campaign        |                                                                 | empty array      | Page View |
            | optimization attributes  |                                                                 | empty array      | Page View |
            | application              |                                                                 | empty str object | Page View |
            | products attributes      |                                                                 | empty array      | Page View |

    @ANA_EVENT_MGMTDC015
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - ERROR PAGE - REWARD DETAIL HISTORY ERROR
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the analytics interceptor service is initiated
        And the user taps on the "rewards option"
        When the user taps on the "reward detail history link with error"
        Then the analytics events contains the following variables
            | item                     | value                                                                    | type             | event     |event number|
            | version DL               | 20250414_5.0                                                             | string           | Page View |2           |
            | analytics                | analytics/glomo_base                                                     | json schema      | Page View |2           |
            | page name                | app:privada:personas:invitar a un amigo:error carga historial de premios | string           | Page View |2           |
            | level 1                  | invitar a un amigo                                                       | string           | Page View |2           |
            | level 2                  | error carga historial de premios                                         | string           | Page View |2           |
            | language                 | ES                                                                       | string           | Page View |2           |
            | page area                | privada                                                                  | string           | Page View |2           |
            | page intent              | informacion                                                              | string           | Page View |2           |
            | channel                  | online                                                                   | string           | Page View |2           |
            | page instance ID         | de                                                                       | string           | Page View |2           |
            | page info version        | appVersion                                                               | regexp named     | Page View |2           |
            | page segment             | personas                                                                 | string           | Page View |2           |
            | business unit            | BBVA Mexico                                                              | string           | Page View |2           |
            | sysEnv                   | app                                                                      | string           | Page View |2           |
            | site app name            | App BBVA Mexico                                                          | string           | Page View |2           |
            | project name             | Glomo                                                                    | string           | Page View |2           |
            | device mobile            | si                                                                       | string           | Page View |2           |
            | user userState           | logado                                                                   | string           | Page View |2           |
            | user segment global      | 003001                                                                   | string           | Page View |2           |
            | profile ID               | profileID                                                                | regexp named     | Page View |2           |
            | user gender              | gender                                                                   | regexp named     | Page View |2           |
            | user age                 | age                                                                      | regexp named     | Page View |2           |
            | error page               | error carga historial de premios                                         | string           | Page View |2           |
            | internal campaign        |                                                                          | empty array      | Page View |2           |
            | optimization attributes  |                                                                          | empty array      | Page View |2           |
            | application              |                                                                          | empty str object | Page View |2           |
            | products attributes      |                                                                          | empty array      | Page View |2           |

    @ANA_EVENT_MGMTDC016
    @analytics
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    Scenario: Member Get Member Credit Card - ERROR PAGE - POSTAL CODE NOT FOUND ERROR
        Given a user with the following criteria
            | criteria                 |
            | ambassador customer      |
        And the user accesses to invite your friend in the sidebar
        And the user accesses to member get member "tdc registration form"
        And the analytics interceptor service is initiated
        When the user tries to enter a postal code
        Then the analytics events contains the following variables
            | item                     | value                                                                              | type             | event     |
            | analytics                | analytics/glomo_base                                                               | json schema      | Page View |
            | version DL               | 20250414_5.0                                                                       | string           | Page View |
            | page name                | app:privada:personas:invitar a un amigo tdc:error codigo postal no encontrado      | string           | Page View |
            | level 1                  | invitar a un amigo tdc                                                             | string           | Page View |
            | level 2                  | error codigo postal no encontrado                                                  | string           | Page View |
            | language                 | ES                                                                                 | string           | Page View |
            | page area                | privada                                                                            | string           | Page View |
            | page intent              | informacion                                                                        | string           | Page View |
            | channel                  | online                                                                             | string           | Page View |
            | page instance ID         | de                                                                                 | string           | Page View |
            | page info version        | appVersion                                                                         | regexp named     | Page View |
            | page segment             | personas                                                                           | string           | Page View |
            | sysEnv                   | app                                                                                | string           | Page View |
            | business unit            | BBVA Mexico                                                                        | string           | Page View |
            | site app name            | App BBVA Mexico                                                                    | string           | Page View |
            | project name             | Glomo                                                                              | string           | Page View |
            | device mobile            | si                                                                                 | string           | Page View |
            | user userState           | logado                                                                             | string           | Page View |
            | user segment global      | 003001                                                                             | string           | Page View |
            | profile ID               | profileID                                                                          | regexp named     | Page View |
            | user gender              | gender                                                                             | regexp named     | Page View |
            | user age                 | age                                                                                | regexp named     | Page View |
            | error page               | error codigo postal no encontrado                                                  | string           | Page View |
            | internal campaign        |                                                                                    | empty array      | Page View |
            | optimization attributes  |                                                                                    | empty array      | Page View |
            | application              |                                                                                    | empty str object | Page View |
            | products attributes      |                                                                                    | empty array      | Page View |

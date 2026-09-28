@feedbackClientVoiceConnectAnalytics @analyticsZeroPartyData
Feature: Analytics - Zero Party Data

    @ANA_EVENT_ZPD001
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Zero Party Data - Entry Point - Click Through
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user accesses to dashboard
        And the analytics interceptor service is initiated
        When the user open the zero party data form
        Then the analytics events contains the following variables
            | item                               | value                                                                                                      | type         | event         |
            | analytics                          | analytics/glomo_base                                                                                       | json schema  | Click Through |
            | page name                          | app:privada:personas:posicion global                                                                       | string       | Click Through |
            | level 1                            | posicion global                                                                                            | string       | Click Through |
            | language                           | ES                                                                                                         | string       | Click Through |
            | page area                          | privada                                                                                                    | string       | Click Through |
            | page intent                        | informacion                                                                                                | string       | Click Through |
            | channel                            | online                                                                                                     | string       | Click Through |
            | page instance ID                   | de                                                                                                         | string       | Click Through |
            | version DL                         | 20250414_5.0                                                                                               | string       | Click Through |
            | page info version                  | appVersion                                                                                                 | regexp named | Click Through |
            | page segment                       | personas                                                                                                   | string       | Click Through |
            | sysEnv                             | app                                                                                                        | string       | Click Through |
            | project name                       | Glomo                                                                                                      | string       | Click Through |
            | business unit                      | BBVA Mexico                                                                                                | string       | Click Through |
            | site app name                      | App BBVA Mexico                                                                                            | string       | Click Through |
            | device mobile                      | si                                                                                                         | string       | Click Through |
            | user userState                     | logado                                                                                                     | string       | Click Through |
            | profile ID                         | profileID                                                                                                  | regexp named | Click Through |
            | user segment global                | 003001                                                                                                     | string       | Click Through |
            | user gender                        | gender                                                                                                     | regexp named | Click Through |
            | user age                           | age                                                                                                        | regexp named | Click Through |
            | internal campaign event name       | IntCmpClick                                                                                                | string       | Click Through |
            | internal campaign site action name | dashboard--inferior-1-1:card::-queremos conocer mas de ti te tomara menos de 1 minuto:zero-party-data::    | string       | Click Through |
            | optimization attributes            |                                                                                                            | empty array  | Click Through |

    @ANA_EVENT_ZPD002
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Zero Party Data - Analytics Init Form Modal - Page View
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        When the user open the zero party data form
        Then the device contains the following variables
            | item                     | value                                                                    | type             |
            | analytics                | analytics/glomo_base                                                     | json schema      |
            | version DL               | 20250414_5.0                                                             | string           |
            | page name                | app:privada:personas:lifecontext card:0 welcome:feedbackhelpmodalwelcome | string           |
            | level 1                  | lifecontext card                                                         | string           |
            | level 2                  | 0 welcome                                                                | string           |
            | level 3                  | feedbackhelpmodalwelcome                                                 | string           |
            | language                 | ES                                                                       | string           |
            | page area                | privada                                                                  | string           |
            | page intent              | informacion                                                              | string           |
            | channel                  | online                                                                   | string           |
            | page instance ID         | de                                                                       | string           |
            | page info version        | appVersion                                                               | regexp named     |
            | page segment             | personas                                                                 | string           |
            | sysEnv                   | app                                                                      | string           |
            | business unit            | BBVA Mexico                                                              | string           |
            | site app name            | App BBVA Mexico                                                          | string           |
            | project name             | Glomo                                                                    | string           |
            | device mobile            | si                                                                       | string           |
            | user userState           | logado                                                                   | string           |
            | user segment global      | 003001                                                                   | string           |
            | profile ID               | profileID                                                                | regexp named     |
            | user gender              | gender                                                                   | regexp named     |
            | user age                 | age                                                                      | regexp named     |
            | internal campaign        |                                                                          | empty array      |
            | optimization attributes  |                                                                          | empty array      |
            | application              |                                                                          | empty str object |
            | products attributes      |                                                                          | empty array      |

    @ANA_EVENT_ZPD003
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Zero Party Data - Analytics Notice Privacy Modal - Page View
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        When the user opens the notice privacy "multistep"
        Then the device contains the following variables
            | item                     | value                                                                    | type             |
            | analytics                | analytics/glomo_base                                                     | json schema      |
            | version DL               | 20250414_5.0                                                             | string           |
            | page name                | app:privada:personas:lifecontext card:0 welcome:feedbackhelpmodalprivacy | string           |
            | level 1                  | lifecontext card                                                         | string           |
            | level 2                  | 0 welcome                                                                | string           |
            | level 3                  | feedbackhelpmodalprivacy                                                 | string           |
            | language                 | ES                                                                       | string           |
            | page area                | privada                                                                  | string           |
            | page intent              | informacion                                                              | string           |
            | channel                  | online                                                                   | string           |
            | page instance ID         | de                                                                       | string           |
            | page info version        | appVersion                                                               | regexp named     |
            | page segment             | personas                                                                 | string           |
            | sysEnv                   | app                                                                      | string           |
            | business unit            | BBVA Mexico                                                              | string           |
            | site app name            | App BBVA Mexico                                                          | string           |
            | project name             | Glomo                                                                    | string           |
            | device mobile            | si                                                                       | string           |
            | user userState           | logado                                                                   | string           |
            | user segment global      | 003001                                                                   | string           |
            | profile ID               | profileID                                                                | regexp named     |
            | user gender              | gender                                                                   | regexp named     |
            | user age                 | age                                                                      | regexp named     |
            | internal campaign        |                                                                          | empty array      |
            | optimization attributes  |                                                                          | empty array      |
            | application              |                                                                          | empty str object |
            | products attributes      |                                                                          | empty array      |

    @ANA_EVENT_ZPD004
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Zero Party Data - Analytics First Step - Page View
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        When the user accesses questionnaire zero party data
        Then the device contains the following variables
            | item                     | value                                                 | type             |
            | analytics                | analytics/glomo_base                                  | json schema      |
            | version DL               | 20250414_5.0                                          | string           |
            | page name                | app:privada:personas:lifecontext card:step 0 sobre ti | string           |
            | level 1                  | lifecontext card                                      | string           |
            | level 2                  | step 0 sobre ti                                       | string           |
            | language                 | ES                                                    | string           |
            | page area                | privada                                               | string           |
            | page intent              | informacion                                           | string           |
            | channel                  | online                                                | string           |
            | page instance ID         | de                                                    | string           |
            | page info version        | appVersion                                            | regexp named     |
            | page segment             | personas                                              | string           |
            | sysEnv                   | app                                                   | string           |
            | business unit            | BBVA Mexico                                           | string           |
            | site app name            | App BBVA Mexico                                       | string           |
            | project name             | Glomo                                                 | string           |
            | device mobile            | si                                                    | string           |
            | user userState           | logado                                                | string           |
            | user segment global      | 003001                                                | string           |
            | profile ID               | profileID                                             | regexp named     |
            | user gender              | gender                                                | regexp named     |
            | user age                 | age                                                   | regexp named     |
            | internal campaign        |                                                       | empty array      |
            | optimization attributes  |                                                       | empty array      |
            | application              |                                                       | empty str object |
            | products attributes      |                                                       | empty array      |

    @ANA_EVENT_ZPD005
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Zero Party Data - Analytics Second Step - Page View
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        And the user accesses questionnaire zero party data
        When the user fill first step
        Then the device contains the following variables
            | item                     | value                                                           | type             |
            | analytics                | analytics/glomo_base                                            | json schema      |
            | version DL               | 20250414_5.0                                                    | string           |
            | page name                | app:privada:personas:lifecontext card:step 1 sobre tu dia a dia | string           |
            | level 1                  | lifecontext card                                                | string           |
            | level 2                  | step 1 sobre tu dia a dia                                       | string           |
            | language                 | ES                                                              | string           |
            | page area                | privada                                                         | string           |
            | page intent              | informacion                                                     | string           |
            | channel                  | online                                                          | string           |
            | page instance ID         | de                                                              | string           |
            | page info version        | appVersion                                                      | regexp named     |
            | page segment             | personas                                                        | string           |
            | sysEnv                   | app                                                             | string           |
            | business unit            | BBVA Mexico                                                     | string           |
            | site app name            | App BBVA Mexico                                                 | string           |
            | project name             | Glomo                                                           | string           |
            | device mobile            | si                                                              | string           |
            | user userState           | logado                                                          | string           |
            | user segment global      | 003001                                                          | string           |
            | profile ID               | profileID                                                       | regexp named     |
            | user gender              | gender                                                          | regexp named     |
            | user age                 | age                                                             | regexp named     |
            | internal campaign        |                                                                 | empty array      |
            | optimization attributes  |                                                                 | empty array      |
            | application              |                                                                 | empty str object |
            | products attributes      |                                                                 | empty array      |

    @ANA_EVENT_ZPD006
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Zero Party Data - Analytics Resumen Step - Page View
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        And the user accesses questionnaire zero party data
        And the user fill first step
        When the user fill second step
        Then the device contains the following variables
            | item                     | value                                                      | type             |
            | analytics                | analytics/glomo_base                                       | json schema      |
            | version DL               | 20250414_5.0                                               | string           |
            | page name                | app:privada:personas:lifecontext card:confirmar respuestas | string           |
            | level 1                  | lifecontext card                                           | string           |
            | level 2                  | confirmar respuestas                                       | string           |
            | language                 | ES                                                         | string           |
            | page area                | privada                                                    | string           |
            | page intent              | informacion                                                | string           |
            | channel                  | online                                                     | string           |
            | page instance ID         | de                                                         | string           |
            | page info version        | appVersion                                                 | regexp named     |
            | page segment             | personas                                                   | string           |
            | sysEnv                   | app                                                        | string           |
            | business unit            | BBVA Mexico                                                | string           |
            | site app name            | App BBVA Mexico                                            | string           |
            | project name             | Glomo                                                      | string           |
            | device mobile            | si                                                         | string           |
            | user userState           | logado                                                     | string           |
            | user segment global      | 003001                                                     | string           |
            | profile ID               | profileID                                                  | regexp named     |
            | user gender              | gender                                                     | regexp named     |
            | user age                 | age                                                        | regexp named     |
            | internal campaign        |                                                            | empty array      |
            | optimization attributes  |                                                            | empty array      |
            | application              |                                                            | empty str object |
            | products attributes      |                                                            | empty array      |

    @ANA_EVENT_ZPD007
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Zero Party Data - Analytics Success - Page View
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        When the user fills out the "multistep" form
        Then the device contains the following variables
            | item                     | value                                                | type             |
            | analytics                | analytics/glomo_base                                 | json schema      |
            | version DL               | 20250414_5.0                                         | string           |
            | page name                | app:privada:personas:lifecontext card:pagina exitosa | string           |
            | level 1                  | lifecontext card                                     | string           |
            | level 2                  | pagina exitosa                                       | string           |
            | language                 | ES                                                   | string           |
            | page area                | privada                                              | string           |
            | page intent              | informacion                                          | string           |
            | channel                  | online                                               | string           |
            | page instance ID         | de                                                   | string           |
            | page info version        | appVersion                                           | regexp named     |
            | page segment             | personas                                             | string           |
            | sysEnv                   | app                                                  | string           |
            | business unit            | BBVA Mexico                                          | string           |
            | site app name            | App BBVA Mexico                                      | string           |
            | project name             | Glomo                                                | string           |
            | device mobile            | si                                                   | string           |
            | user userState           | logado                                               | string           |
            | user segment global      | 003001                                               | string           |
            | profile ID               | profileID                                            | regexp named     |
            | user gender              | gender                                               | regexp named     |
            | user age                 | age                                                  | regexp named     |
            | internal campaign        |                                                      | empty array      |
            | optimization attributes  |                                                      | empty array      |
            | application              |                                                      | empty str object |
            | products attributes      |                                                      | empty array      |

    @ANA_EVENT_ZPD008
    @analytics
    @vbank @backend(test) @MX
    @ios @android @web
    @web-done
    Scenario: Zero Party Data - Analytics Form Answered - Page View
        Given a user with the following criteria
            | criteria        |
            | account         |
            | credit card     |
            | debit card      |
            | zero party data |
        And the user open the zero party data form
        And the user fills out the "multistep" form
        When the user accesses to dashboard from "multistep"
        And the user open the zero party data form
        Then the device contains the following variables
            | item                     | value                                                            | type             |
            | analytics                | analytics/glomo_base                                             | json schema      |
            | version DL               | 20250414_5.0                                                     | string           |
            | page name                | app:privada:personas:lifecontext card:ya respondiste previamente | string           |
            | level 1                  | lifecontext card                                                 | string           |
            | level 2                  | ya respondiste previamente                                       | string           |
            | language                 | ES                                                               | string           |
            | page area                | privada                                                          | string           |
            | page intent              | informacion                                                      | string           |
            | channel                  | online                                                           | string           |
            | page instance ID         | de                                                               | string           |
            | page info version        | appVersion                                                       | regexp named     |
            | page segment             | personas                                                         | string           |
            | sysEnv                   | app                                                              | string           |
            | business unit            | BBVA Mexico                                                      | string           |
            | site app name            | App BBVA Mexico                                                  | string           |
            | project name             | Glomo                                                            | string           |
            | device mobile            | si                                                               | string           |
            | user userState           | logado                                                           | string           |
            | user segment global      | 003001                                                           | string           |
            | profile ID               | profileID                                                        | regexp named     |
            | user gender              | gender                                                           | regexp named     |
            | user age                 | age                                                              | regexp named     |
            | internal campaign        |                                                                  | empty array      |
            | optimization attributes  |                                                                  | empty array      |
            | application              |                                                                  | empty str object |
            | products attributes      |                                                                  | empty array      |

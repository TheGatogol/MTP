@digitalButlerChatbotAnalytics
Feature: Analytics - Digital Butler

    @ANA_EVENT_DBC001
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: initialization conversation - Page View
        Given a user with the following criteria
            | criteria    |
            | one account |
        And the user accesses assistance section
        And the analytics interceptor service is initiated
        When the user access blue "with terms accepted"
        Then the analytics events contains the following variables
            | item                    | value                                      | type             | event     |
            | analytics               | analytics/glomo_base                       | json schema      | Page View |
            | version DL              | 20250414_5.0                               | string           | Page View |
            | page name               | app:privada:personas:digital butler:inicio | string           | Page View |
            | level 1                 | digital butler                             | string           | Page View |
            | level 2                 | inicio                                     | string           | Page View |
            | language                | ES                                         | string           | Page View |
            | page area               | privada                                    | string           | Page View |
            | page intent             | informacion                                | string           | Page View |
            | channel                 | online                                     | string           | Page View |
            | page instance ID        | de                                         | string           | Page View |
            | page info version       | appVersion                                 | regexp named     | Page View |
            | page segment            | personas                                   | string           | Page View |
            | sysEnv                  | app                                        | string           | Page View |
            | business unit           | BBVA Mexico                                | string           | Page View |
            | site app name           | App BBVA Mexico                            | string           | Page View |
            | project name            | Glomo                                      | string           | Page View |
            | on site search term     | 777ff103-5d2f-4d57-80f4-a74e3ec81361       | string           | Page View |
            | device mobile           | si                                         | string           | Page View |
            | user userState          | logado                                     | string           | Page View |
            | user segment global     | 003001                                     | string           | Page View |
            | profile ID              | profileID                                  | regexp named     | Page View |
            | user gender             | gender                                     | regexp named     | Page View |
            | user age                | age                                        | regexp named     | Page View |
            | internal campaign       |                                            | empty array      | Page View |
            | optimization attributes |                                            | empty array      | Page View |
            | application             |                                            | empty str object | Page View |
            | products attributes     |                                            | empty array      | Page View |

    @ANA_EVENT_DBC002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: return to conversation from navigation - Page View
        Given a user with the following criteria
            | criteria    |
            | one account |
        And the user access blue "with terms accepted"
        And the user write "cual es mi saldo?" in input text
        And the user selects "transfer" link
        And the analytics interceptor service is initiated
        When the user "accepts" that he wants to close the transfer screen
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event     |
            | analytics               | analytics/glomo_base                                                      | json schema      | Page View |
            | version DL              | 20250414_5.0                                                              | string           | Page View |
            | page name               | app:privada:personas:digital butler:balances:check account and check card | string           | Page View |
            | level 1                 | digital butler                                                            | string           | Page View |
            | level 2                 | balances                                                                  | string           | Page View |
            | level 3                 | check account and check card                                              | string           | Page View |
            | language                | ES                                                                        | string           | Page View |
            | page area               | privada                                                                   | string           | Page View |
            | page intent             | informacion                                                               | string           | Page View |
            | channel                 | online                                                                    | string           | Page View |
            | page instance ID        | de                                                                        | string           | Page View |
            | page info version       | appVersion                                                                | regexp named     | Page View |
            | page segment            | personas                                                                  | string           | Page View |
            | sysEnv                  | app                                                                       | string           | Page View |
            | business unit           | BBVA Mexico                                                               | string           | Page View |
            | site app name           | App BBVA Mexico                                                           | string           | Page View |
            | project name            | Glomo                                                                     | string           | Page View |
            | on site search term     | 1a2s3d4f-1q2w-1z2x-1a2s-1a2s3d4f5g6h                                      | string           | Page View |
            | device mobile           | si                                                                        | string           | Page View |
            | user userState          | logado                                                                    | string           | Page View |
            | user segment global     | 003001                                                                    | string           | Page View |
            | profile ID              | profileID                                                                 | regexp named     | Page View |
            | user gender             | gender                                                                    | regexp named     | Page View |
            | user age                | age                                                                       | regexp named     | Page View |
            | internal campaign       |                                                                           | empty array      | Page View |
            | optimization attributes |                                                                           | empty array      | Page View |
            | application             |                                                                           | empty str object | Page View |
            | products attributes     |                                                                           | empty array      | Page View |

    @ANA_EVENT_DBC003
    @analytics
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311 @backend(test)
    @web @ios @android
    Scenario Outline: click in rating hand <valoration> - Interaction Link
        Given a user with the following criteria
            | criteria          |
            | one account       |
            | user with balance |
        And the user access blue "with terms accepted"
        And the user write "cual es mi saldo?" in input text
        And the analytics interceptor service is initiated
        When the user rates Blue with a thumbs "<valoration>" in the conversation
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event            |
            | analytics               | analytics/glomo_base                                                      | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                              | string           | Interaction Link |
            | page name               | app:privada:personas:digital butler:balances:check account and check card | string           | Interaction Link |
            | level 1                 | digital butler                                                            | string           | Interaction Link |
            | level 2                 | balances                                                                  | string           | Interaction Link |
            | level 3                 | check account and check card                                              | string           | Interaction Link |
            | language                | ES                                                                        | string           | Interaction Link |
            | page area               | privada                                                                   | string           | Interaction Link |
            | page intent             | informacion                                                               | string           | Interaction Link |
            | channel                 | online                                                                    | string           | Interaction Link |
            | page instance ID        | de                                                                        | string           | Interaction Link |
            | page info version       | appVersion                                                                | regexp named     | Interaction Link |
            | page segment            | personas                                                                  | string           | Interaction Link |
            | sysEnv                  | app                                                                       | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                               | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                           | string           | Interaction Link |
            | project name            | Glomo                                                                     | string           | Interaction Link |
            | on site search term     | terms                                                                     | regexp named     | Interaction Link |
            | device mobile           | si                                                                        | string           | Interaction Link |
            | user userState          | logado                                                                    | string           | Interaction Link |
            | user segment global     | 003001                                                                    | string           | Interaction Link |
            | profile ID              | profileID                                                                 | regexp named     | Interaction Link |
            | user gender             | gender                                                                    | regexp named     | Interaction Link |
            | user age                | age                                                                       | regexp named     | Interaction Link |
            | custom fields           | intent:consulting.balance                                                 | string           | Interaction Link |
            | interaction level       | <interaction level>                                                       | string           | Interaction Link |
            | internal campaign       |                                                                           | empty array      | Interaction Link |
            | optimization attributes |                                                                           | empty array      | Interaction Link |
            | application             |                                                                           | empty str object | Interaction Link |
            | products attributes     |                                                                           | empty array      | Interaction Link |
        Examples:
            | valoration | interaction level    |
            | up         | consulta resuelta    |
            | down       | consulta no resuelta |

    @ANA_EVENT_DBC004
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: click in suggestion - Interaction Link
        Given a user with the following criteria
            | criteria    |
            | one account |
        And the user access blue "with terms accepted"
        And the user write "cual es mi saldo?" in input text
        And the analytics interceptor service is initiated
        When the user selects the "default" suggestion
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event            |
            | analytics               | analytics/glomo_base                                                      | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                              | string           | Interaction Link |
            | page name               | app:privada:personas:digital butler:balances:check account and check card | string           | Interaction Link |
            | level 1                 | digital butler                                                            | string           | Interaction Link |
            | level 2                 | balances                                                                  | string           | Interaction Link |
            | level 3                 | check account and check card                                              | string           | Interaction Link |
            | language                | ES                                                                        | string           | Interaction Link |
            | page area               | privada                                                                   | string           | Interaction Link |
            | page intent             | informacion                                                               | string           | Interaction Link |
            | channel                 | online                                                                    | string           | Interaction Link |
            | page instance ID        | de                                                                        | string           | Interaction Link |
            | page info version       | appVersion                                                                | regexp named     | Interaction Link |
            | page segment            | personas                                                                  | string           | Interaction Link |
            | sysEnv                  | app                                                                       | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                               | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                           | string           | Interaction Link |
            | project name            | Glomo                                                                     | string           | Interaction Link |
            | on site search term     | terms                                                                     | regexp named     | Interaction Link |
            | device mobile           | si                                                                        | string           | Interaction Link |
            | user userState          | logado                                                                    | string           | Interaction Link |
            | user segment global     | 003001                                                                    | string           | Interaction Link |
            | profile ID              | profileID                                                                 | regexp named     | Interaction Link |
            | user gender             | gender                                                                    | regexp named     | Interaction Link |
            | user age                | age                                                                       | regexp named     | Interaction Link |
            | custom fields           | intent:consulting.balance                                                 | string           | Interaction Link |
            | interaction level       | pipeString                                                                | regexp named     | Interaction Link |
            | internal campaign       |                                                                           | empty array      | Interaction Link |
            | optimization attributes |                                                                           | empty array      | Interaction Link |
            | application             |                                                                           | empty str object | Interaction Link |
            | products attributes     |                                                                           | empty array      | Interaction Link |

    @ANA_EVENT_DBC005
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: navigate to internal link - Internal Link
        Given a user with the following criteria
            | criteria          |
            | one account       |
            | user with balance |
        And the user access blue "with terms accepted"
        And the user write "cual es mi saldo?" in input text
        And the analytics interceptor service is initiated
        When the user selects "transfer" link
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event         |
            | analytics               | analytics/glomo_base                                                      | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                              | string           | Internal Link |
            | page name               | app:privada:personas:digital butler:balances:check account and check card | string           | Internal Link |
            | level 1                 | digital butler                                                            | string           | Internal Link |
            | level 2                 | balances                                                                  | string           | Internal Link |
            | level 3                 | check account and check card                                              | string           | Internal Link |
            | language                | ES                                                                        | string           | Internal Link |
            | page area               | privada                                                                   | string           | Internal Link |
            | page intent             | informacion                                                               | string           | Internal Link |
            | channel                 | online                                                                    | string           | Internal Link |
            | page instance ID        | de                                                                        | string           | Internal Link |
            | page info version       | appVersion                                                                | regexp named     | Internal Link |
            | page segment            | personas                                                                  | string           | Internal Link |
            | sysEnv                  | app                                                                       | string           | Internal Link |
            | business unit           | BBVA Mexico                                                               | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                           | string           | Internal Link |
            | project name            | Glomo                                                                     | string           | Internal Link |
            | on site search term     | terms                                                                     | regexp named     | Internal Link |
            | link name               | pipeString                                                                | regexp named     | Internal Link |
            | device mobile           | si                                                                        | string           | Internal Link |
            | user userState          | logado                                                                    | string           | Internal Link |
            | user segment global     | 003001                                                                    | string           | Internal Link |
            | profile ID              | profileID                                                                 | regexp named     | Internal Link |
            | user gender             | gender                                                                    | regexp named     | Internal Link |
            | user age                | age                                                                       | regexp named     | Internal Link |
            | custom fields           | intent:consulting.balance                                                 | string           | Internal Link |
            | internal campaign       |                                                                           | empty array      | Internal Link |
            | optimization attributes |                                                                           | empty array      | Internal Link |
            | application             |                                                                           | empty str object | Internal Link |
            | products attributes     |                                                                           | empty array      | Internal Link |

    @ANA_EVENT_DBC006
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: navigate to external link - External Link
        Given a user with the following criteria
            | criteria    |
            | one account |
        And the user access blue "with terms accepted"
        And the user write "Asesor" in input text
        And the analytics interceptor service is initiated
        When the user selects "call advisor" link
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event         |
            | analytics               | analytics/glomo_base                                                      | json schema      | External Link |
            | version DL              | 20250414_5.0                                                              | string           | External Link |
            | page name               | app:privada:personas:digital butler:balances:check account and check card | string           | External Link |
            | level 1                 | digital butler                                                            | string           | External Link |
            | level 2                 | balances                                                                  | string           | External Link |
            | level 3                 | check account and check card                                              | string           | External Link |
            | language                | ES                                                                        | string           | External Link |
            | page area               | privada                                                                   | string           | External Link |
            | page intent             | informacion                                                               | string           | External Link |
            | channel                 | online                                                                    | string           | External Link |
            | page instance ID        | de                                                                        | string           | External Link |
            | page info version       | appVersion                                                                | regexp named     | External Link |
            | page segment            | personas                                                                  | string           | External Link |
            | sysEnv                  | app                                                                       | string           | External Link |
            | business unit           | BBVA Mexico                                                               | string           | External Link |
            | site app name           | App BBVA Mexico                                                           | string           | External Link |
            | project name            | Glomo                                                                     | string           | External Link |
            | on site search term     | terms                                                                     | regexp named     | External Link |
            | link url                | pipeString                                                                | regexp named     | External Link |
            | device mobile           | si                                                                        | string           | External Link |
            | user userState          | logado                                                                    | string           | External Link |
            | user segment global     | 003001                                                                    | string           | External Link |
            | profile ID              | profileID                                                                 | regexp named     | External Link |
            | user gender             | gender                                                                    | regexp named     | External Link |
            | user age                | age                                                                       | regexp named     | External Link |
            | custom fields           | intent:consulting.balance                                                 | string           | External Link |
            | internal campaign       |                                                                           | empty array      | External Link |
            | optimization attributes |                                                                           | empty array      | External Link |
            | application             |                                                                           | empty str object | External Link |
            | products attributes     |                                                                           | empty array      | External Link |

    @ANA_EVENT_DBC007
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: error in conversation - Site Error
        Given a user with the following criteria
            | criteria    |
            | one account |
        And the user access blue "with terms accepted"
        And the user write "cual es mi saldo?" in input text
        And the user write "como ver NIP" in input text
        And the analytics interceptor service is initiated
        When the user retries "messages" conversation request
        Then the analytics events contains the following variables
            | item                    | value                                                                     | type             | event      |
            | analytics               | analytics/glomo_base                                                      | json schema      | Site Error |
            | version DL              | 20250414_5.0                                                              | string           | Site Error |
            | page name               | app:privada:personas:digital butler:balances:check account and check card | string           | Site Error |
            | level 1                 | digital butler                                                            | string           | Site Error |
            | level 2                 | balances                                                                  | string           | Site Error |
            | level 3                 | check account and check card                                              | string           | Site Error |
            | language                | ES                                                                        | string           | Site Error |
            | page area               | privada                                                                   | string           | Site Error |
            | page intent             | informacion                                                               | string           | Site Error |
            | channel                 | online                                                                    | string           | Site Error |
            | page instance ID        | de                                                                        | string           | Site Error |
            | page info version       | appVersion                                                                | regexp named     | Site Error |
            | page segment            | personas                                                                  | string           | Site Error |
            | sysEnv                  | app                                                                       | string           | Site Error |
            | business unit           | BBVA Mexico                                                               | string           | Site Error |
            | site app name           | App BBVA Mexico                                                           | string           | Site Error |
            | project name            | Glomo                                                                     | string           | Site Error |
            | on site search term     | 1a2s3d4f-1q2w-1z2x-1a2s-1a2s3d4f5g6h                                      | string           | Site Error |
            | device mobile           | si                                                                        | string           | Site Error |
            | user userState          | logado                                                                    | string           | Site Error |
            | user segment global     | 003001                                                                    | string           | Site Error |
            | profile ID              | profileID                                                                 | regexp named     | Site Error |
            | user gender             | gender                                                                    | regexp named     | Site Error |
            | user age                | age                                                                       | regexp named     | Site Error |
            | site error              | informacion no disponible                                                 | string           | Site Error |
            | internal campaign       |                                                                           | empty array      | Site Error |
            | optimization attributes |                                                                           | empty array      | Site Error |
            | application             |                                                                           | empty str object | Site Error |
            | products attributes     |                                                                           | empty array      | Site Error |

    @ANA_EVENT_DBC008
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: error create conversation - Site Error
        Given a user with the following criteria
            | criteria    |
            | one account |
        And the user accesses assistance section
        And the user access blue "with terms accepted"
        And the analytics interceptor service is initiated
        When the user retries "modal" conversation request
        Then the analytics events contains the following variables
            | item                    | value                                                               | type             | event     |
            | analytics               | analytics/glomo_base                                                | json schema      | Page View |
            | version DL              | 20250414_5.0                                                        | string           | Page View |
            | page name               | app:privada:personas:digital butler:error informacion no disponible | string           | Page View |
            | level 1                 | digital butler                                                      | string           | Page View |
            | level 2                 | error informacion no disponible                                     | string           | Page View |
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
            | error page              | error informacion no disponible                                     | string           | Page View |
            | device mobile           | si                                                                  | string           | Page View |
            | user userState          | logado                                                              | string           | Page View |
            | user segment global     | 003001                                                              | string           | Page View |
            | profile ID              | profileID                                                           | regexp named     | Page View |
            | user gender             | gender                                                              | regexp named     | Page View |
            | user age                | age                                                                 | regexp named     | Page View |
            | custom fields           |                                                                     | string           | Page View |
            | internal campaign       |                                                                     | empty array      | Page View |
            | optimization attributes |                                                                     | empty array      | Page View |
            | application             |                                                                     | empty str object | Page View |
            | products attributes     |                                                                     | empty array      | Page View |

    @ANA_EVENT_DBC009
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: terms and conditions modal accept - Page View
        Given a user with the following criteria
            | criteria    |
            | one account |
        And the user accesses assistance section
        And the user access blue "with terms accepted"
        And the analytics interceptor service is initiated
        When the user open modal terms and conditions Blue
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event     |
            | analytics               | analytics/glomo_base                                       | json schema      | Page View |
            | version DL              | 20250414_5.0                                               | string           | Page View |
            | page name               | app:privada:personas:digital butler:terminos y condiciones | string           | Page View |
            | level 1                 | digital butler                                             | string           | Page View |
            | level 2                 | terminos y condiciones                                     | string           | Page View |
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
            | on site search term     | 37068235-ddc2-4154-9a7b-fa601898f772                       | string           | Page View |
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

    @ANA_EVENT_DBC010
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: terms and conditions show otp - Page View
        Given a user with the following criteria
            | criteria              |
            | user with home futura |
        And the user accesses assistance section
        And the user access blue "first time"
        And the analytics interceptor service is initiated
        When the user accept terms and conditions in blue
        Then the analytics events contains the following variables
            | item                    | value                                   | type             | event     |
            | analytics               | analytics/glomo_base                    | json schema      | Page View |
            | version DL              | 20250414_5.0                            | string           | Page View |
            | page name               | app:privada:personas:digital butler:otp | string           | Page View |
            | level 1                 | digital butler                          | string           | Page View |
            | level 2                 | otp                                     | string           | Page View |
            | language                | ES                                      | string           | Page View |
            | page area               | privada                                 | string           | Page View |
            | page intent             | informacion                             | string           | Page View |
            | channel                 | online                                  | string           | Page View |
            | page instance ID        | de                                      | string           | Page View |
            | page info version       | appVersion                              | regexp named     | Page View |
            | page segment            | personas                                | string           | Page View |
            | sysEnv                  | app                                     | string           | Page View |
            | business unit           | BBVA Mexico                             | string           | Page View |
            | site app name           | App BBVA Mexico                         | string           | Page View |
            | project name            | Glomo                                   | string           | Page View |
            | on site search term     | 5ebbcf0f-a478-43fb-bfe3-cdc1f632ec02    | string           | Page View |
            | device mobile           | si                                      | string           | Page View |
            | user userState          | logado                                  | string           | Page View |
            | user segment global     | 003001                                  | string           | Page View |
            | profile ID              | profileID                               | regexp named     | Page View |
            | user gender             | gender                                  | regexp named     | Page View |
            | user age                | age                                     | regexp named     | Page View |
            | internal campaign       |                                         | empty array      | Page View |
            | optimization attributes |                                         | empty array      | Page View |
            | application             |                                         | empty str object | Page View |
            | products attributes     |                                         | empty array      | Page View |

    @ANA_EVENT_DBC011
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: click in chips - Interaction Link
        Given a user with the following criteria
            | criteria          |
            | account statement |
        And the user access blue "with terms accepted"
        And the user write "Quiero ver los detalles de mi cuenta" in input text
        And the analytics interceptor service is initiated
        When the user selects chip of continuity "account detail"
        Then the analytics events contains the following variables
            | item                    | value                                                                  | type             | event            |
            | analytics               | analytics/glomo_base                                                   | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                                           | string           | Interaction Link |
            | page name               | app:privada:personas:digital butler:account detail:account information | string           | Interaction Link |
            | level 1                 | digital butler                                                         | string           | Interaction Link |
            | level 2                 | account detail                                                         | string           | Interaction Link |
            | level 3                 | account information                                                    | string           | Interaction Link |
            | language                | ES                                                                     | string           | Interaction Link |
            | page area               | privada                                                                | string           | Interaction Link |
            | page intent             | informacion                                                            | string           | Interaction Link |
            | channel                 | online                                                                 | string           | Interaction Link |
            | page instance ID        | de                                                                     | string           | Interaction Link |
            | page info version       | appVersion                                                             | regexp named     | Interaction Link |
            | page segment            | personas                                                               | string           | Interaction Link |
            | sysEnv                  | app                                                                    | string           | Interaction Link |
            | business unit           | BBVA Mexico                                                            | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                                        | string           | Interaction Link |
            | project name            | Glomo                                                                  | string           | Interaction Link |
            | on site search term     | terms                                                                  | regexp named     | Interaction Link |
            | device mobile           | si                                                                     | string           | Interaction Link |
            | user userState          | logado                                                                 | string           | Interaction Link |
            | user segment global     | 003001                                                                 | string           | Interaction Link |
            | profile ID              | profileID                                                              | regexp named     | Interaction Link |
            | user gender             | gender                                                                 | regexp named     | Interaction Link |
            | user age                | age                                                                    | regexp named     | Interaction Link |
            | custom fields           | intent:consulting.account.detail                                       | string           | Interaction Link |
            | interaction level       | pipeString                                                             | regexp named     | Interaction Link |
            | internal campaign       |                                                                        | empty array      | Interaction Link |
            | optimization attributes |                                                                        | empty array      | Interaction Link |
            | application             |                                                                        | empty str object | Interaction Link |
            | products attributes     |                                                                        | empty array      | Interaction Link |

    @ANA_EVENT_DBC012
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: open modal success - Interaction Link
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user accesses assistance section
        And the user access blue "with terms accepted"
        And the user send "unrecognized movement" messages
        And the analytics interceptor service is initiated
        When the user open modal success of "receipt"
        Then the analytics events contains the following variables
            | item                    | value                                                   | type             | event            |
            | analytics               | analytics/glomo_base                                    | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                            | string           | Interaction Link |
            | page name               | app:privada:personas:digital butler:claim:movementclaim | string           | Interaction Link |
            | level 1                 | digital butler                                          | string           | Interaction Link |
            | level 2                 | claim                                                   | string           | Interaction Link |
            | level 3                 | movementclaim                                           | string           | Interaction Link |
            | language                | ES                                                      | string           | Interaction Link |
            | page area               | privada                                                 | string           | Interaction Link |
            | page intent             | informacion                                             | string           | Interaction Link |
            | channel                 | online                                                  | string           | Interaction Link |
            | page instance ID        | de                                                      | string           | Interaction Link |
            | page info version       | appVersion                                              | regexp named     | Interaction Link |
            | page segment            | personas                                                | string           | Interaction Link |
            | sysEnv                  | app                                                     | string           | Interaction Link |
            | business unit           | BBVA Mexico                                             | string           | Interaction Link |
            | site app name           | App BBVA Mexico                                         | string           | Interaction Link |
            | project name            | Glomo                                                   | string           | Interaction Link |
            | on site search term     | terms                                                   | regexp named     | Interaction Link |
            | interaction level       | ver comprobante de operación                            | string           | Interaction Link |
            | device mobile           | si                                                      | string           | Interaction Link |
            | user userState          | logado                                                  | string           | Interaction Link |
            | user segment global     | 003001                                                  | string           | Interaction Link |
            | profile ID              | profileID                                               | regexp named     | Interaction Link |
            | user gender             | gender                                                  | regexp named     | Interaction Link |
            | user age                | age                                                     | regexp named     | Interaction Link |
            | custom fields           | intent:operation.movement.claim                         | string           | Interaction Link |
            | internal campaign       |                                                         | empty array      | Interaction Link |
            | optimization attributes |                                                         | empty array      | Interaction Link |
            | application             |                                                         | empty str object | Interaction Link |
            | products attributes     |                                                         | empty array      | Interaction Link |

    @ANA_EVENT_DBC013
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: share receipt - External Link
        Given a user with the following criteria
            | criteria              |
            | user with home futura |
        And the user accesses assistance section
        And the user access blue "with terms accepted"
        And the user send "unrecognized movement" messages
        And the analytics interceptor service is initiated
        When the user share receipt from conversation
        Then the analytics events contains the following variables
            | item                    | value                                                   | type             | event         |
            | analytics               | analytics/glomo_base                                    | json schema      | External Link |
            | version DL              | 20250414_5.0                                            | string           | External Link |
            | page name               | app:privada:personas:digital butler:claim:movementclaim | string           | External Link |
            | level 1                 | digital butler                                          | string           | External Link |
            | level 2                 | claim                                                   | string           | External Link |
            | level 3                 | movementclaim                                           | string           | External Link |
            | language                | ES                                                      | string           | External Link |
            | page area               | privada                                                 | string           | External Link |
            | page intent             | informacion                                             | string           | External Link |
            | channel                 | online                                                  | string           | External Link |
            | page instance ID        | de                                                      | string           | External Link |
            | page info version       | appVersion                                              | regexp named     | External Link |
            | page segment            | personas                                                | string           | External Link |
            | sysEnv                  | app                                                     | string           | External Link |
            | business unit           | BBVA Mexico                                             | string           | External Link |
            | site app name           | App BBVA Mexico                                         | string           | External Link |
            | project name            | Glomo                                                   | string           | External Link |
            | on site search term     | terms                                                   | regexp named     | External Link |
            | link url                | compartir data                                          | string           | External Link |
            | device mobile           | si                                                      | string           | External Link |
            | user userState          | logado                                                  | string           | External Link |
            | user segment global     | 003001                                                  | string           | External Link |
            | profile ID              | profileID                                               | regexp named     | External Link |
            | user gender             | gender                                                  | regexp named     | External Link |
            | user age                | age                                                     | regexp named     | External Link |
            | custom fields           | intent:operation.movement.claim                         | string           | External Link |
            | internal campaign       |                                                         | empty array      | External Link |
            | optimization attributes |                                                         | empty array      | External Link |
            | application             |                                                         | empty str object | External Link |
            | products attributes     |                                                         | empty array      | External Link |

    @ANA_EVENT_DBC014
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: IVP - Internal Link
        Given a user with the following criteria
            | criteria                        |
            | user without digital debit card |
        And the user accesses assistance section
        And the user access blue "with terms accepted"
        And the analytics interceptor service is initiated
        When the user send "show my movements" messages
        Then the analytics events contains the following variables
            | item                    | value                                                             | type             | event         |
            | analytics               | analytics/glomo_base                                              | json schema      | Internal Link |
            | version DL              | 20250414_5.0                                                      | string           | Internal Link |
            | page name               | app:privada:personas:digital butler:disambiguation:disambiguation | string           | Internal Link |
            | level 1                 | digital butler                                                    | string           | Internal Link |
            | level 2                 | disambiguation                                                    | string           | Internal Link |
            | level 3                 | disambiguation                                                    | string           | Internal Link |
            | language                | ES                                                                | string           | Internal Link |
            | page area               | privada                                                           | string           | Internal Link |
            | page intent             | informacion                                                       | string           | Internal Link |
            | channel                 | online                                                            | string           | Internal Link |
            | page instance ID        | de                                                                | string           | Internal Link |
            | page info version       | appVersion                                                        | regexp named     | Internal Link |
            | page segment            | personas                                                          | string           | Internal Link |
            | sysEnv                  | app                                                               | string           | Internal Link |
            | business unit           | BBVA Mexico                                                       | string           | Internal Link |
            | site app name           | App BBVA Mexico                                                   | string           | Internal Link |
            | project name            | Glomo                                                             | string           | Internal Link |
            | on site search term     | terms                                                             | regexp named     | Internal Link |
            | link name               | imagen cuenta de ahorro                                           | string           | Internal Link |
            | device mobile           | si                                                                | string           | Internal Link |
            | user userState          | logado                                                            | string           | Internal Link |
            | user segment global     | 003001                                                            | string           | Internal Link |
            | profile ID              | profileID                                                         | regexp named     | Internal Link |
            | user gender             | gender                                                            | regexp named     | Internal Link |
            | user age                | age                                                               | regexp named     | Internal Link |
            | custom fields           | intent:alfred                                                     | string           | Internal Link |
            | internal campaign       |                                                                   | empty array      | Internal Link |
            | optimization attributes |                                                                   | empty array      | Internal Link |
            | application             |                                                                   | empty str object | Internal Link |
            | products attributes     |                                                                   | empty array      | Internal Link |

    @ANA_EVENT_DBC015
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: terms and conditions continue button - Interaction Link
        Given a user with the following criteria
            | criteria                |
            | user with some products |
        And the user accesses assistance section
        And the user access blue "first time"
        And the analytics interceptor service is initiated
        When the user continues terms and conditions in blue
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event            |
            | analytics               | analytics/glomo_base                                       | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                               | string           | Interaction Link |
            | page name               | app:privada:personas:digital butler:terminos y condiciones | string           | Interaction Link |
            | level 1                 | digital butler                                             | string           | Interaction Link |
            | level 2                 | terminos y condiciones                                     | string           | Interaction Link |
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
            | device mobile           | si                                                         | string           | Interaction Link |
            | user userState          | logado                                                     | string           | Interaction Link |
            | user segment global     | 003001                                                     | string           | Interaction Link |
            | profile ID              | profileID                                                  | regexp named     | Interaction Link |
            | user gender             | gender                                                     | regexp named     | Interaction Link |
            | user age                | age                                                        | regexp named     | Interaction Link |
            | interaction level       | continuar                                                  | string           | Interaction Link |
            | internal campaign       |                                                            | empty array      | Interaction Link |
            | optimization attributes |                                                            | empty array      | Interaction Link |
            | application             |                                                            | empty str object | Interaction Link |
            | products attributes     |                                                            | empty array      | Interaction Link |

    @ANA_EVENT_DBC016
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: terms and conditions close modal - Interaction Link
        Given a user with the following criteria
            | criteria                |
            | user with some products |
        And the user accesses assistance section
        And the user access blue "first time"
        And the analytics interceptor service is initiated
        When the user leaves blue in "terms and conditions" screen
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event            |
            | analytics               | analytics/glomo_base                                       | json schema      | Interaction Link |
            | version DL              | 20250414_5.0                                               | string           | Interaction Link |
            | page name               | app:privada:personas:digital butler:terminos y condiciones | string           | Interaction Link |
            | level 1                 | digital butler                                             | string           | Interaction Link |
            | level 2                 | terminos y condiciones                                     | string           | Interaction Link |
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
            | device mobile           | si                                                         | string           | Interaction Link |
            | user userState          | logado                                                     | string           | Interaction Link |
            | user segment global     | 003001                                                     | string           | Interaction Link |
            | profile ID              | profileID                                                  | regexp named     | Interaction Link |
            | user gender             | gender                                                     | regexp named     | Interaction Link |
            | user age                | age                                                        | regexp named     | Interaction Link |
            | interaction level       | cerrar                                                     | string           | Interaction Link |
            | internal campaign       |                                                            | empty array      | Interaction Link |
            | optimization attributes |                                                            | empty array      | Interaction Link |
            | application             |                                                            | empty str object | Interaction Link |
            | products attributes     |                                                            | empty array      | Interaction Link |

    @ANA_EVENT_DBC017
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: terms and conditions download pdf - Download Link
        Given a user with the following criteria
            | criteria                |
            | user with some products |
        And the user accesses assistance section
        And the user access blue "first time"
        And the analytics interceptor service is initiated
        When the user download terms and conditions pdf in blue
        Then the analytics events contains the following variables
            | item                    | value                                                      | type             | event         |
            | analytics               | analytics/glomo_base                                       | json schema      | Download Link |
            | version DL              | 20250414_5.0                                               | string           | Download Link |
            | page name               | app:privada:personas:digital butler:terminos y condiciones | string           | Download Link |
            | level 1                 | digital butler                                             | string           | Download Link |
            | level 2                 | terminos y condiciones                                     | string           | Download Link |
            | language                | ES                                                         | string           | Download Link |
            | page area               | privada                                                    | string           | Download Link |
            | page intent             | informacion                                                | string           | Download Link |
            | channel                 | online                                                     | string           | Download Link |
            | page instance ID        | de                                                         | string           | Download Link |
            | page info version       | appVersion                                                 | regexp named     | Download Link |
            | page segment            | personas                                                   | string           | Download Link |
            | sysEnv                  | app                                                        | string           | Download Link |
            | business unit           | BBVA Mexico                                                | string           | Download Link |
            | site app name           | App BBVA Mexico                                            | string           | Download Link |
            | project name            | Glomo                                                      | string           | Download Link |
            | link url                | terminos y condiciones                                     | string           | Download Link |
            | device mobile           | si                                                         | string           | Download Link |
            | user userState          | logado                                                     | string           | Download Link |
            | user segment global     | 003001                                                     | string           | Download Link |
            | profile ID              | profileID                                                  | regexp named     | Download Link |
            | user gender             | gender                                                     | regexp named     | Download Link |
            | user age                | age                                                        | regexp named     | Download Link |
            | internal campaign       |                                                            | empty array      | Download Link |
            | optimization attributes |                                                            | empty array      | Download Link |
            | application             |                                                            | empty str object | Download Link |
            | products attributes     |                                                            | empty array      | Download Link |

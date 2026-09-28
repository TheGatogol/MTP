@innAppChatAnalytics
Feature: Analytics - innAppChat

    @ANA_EVENT_IAC001
    @analytics
    @web @ios @android
    @MX @vbank @web-done @backend(test) @no-data-manager
    Scenario: The user enters the chat and sees the welcome screen
        Given the user access the Login Screen
        And the analytics interceptor service is initiated
        When the user accesses to the chat in app
        Then the analytics events contains the following variables
            | item                    | value                                        | type             | event     |
            | analytics               | analytics/glomo_base                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                 | string           | Page View |
            | page name               | app:publica:general:chat en linea:bienvenido | string           | Page View |
            | level 1                 | chat en linea                                | string           | Page View |
            | level 2                 | bienvenido                                   | string           | Page View |
            | language                | ES                                           | string           | Page View |
            | page area               | publica                                      | string           | Page View |
            | page intent             | informacion                                  | string           | Page View |
            | channel                 | online                                       | string           | Page View |
            | page instance ID        | de                                           | string           | Page View |
            | page info version       | appVersion                                   | regexp named     | Page View |
            | page segment            | general                                      | string           | Page View |
            | sysEnv                  | app                                          | string           | Page View |
            | business unit           | BBVA Mexico                                  | string           | Page View |
            | site app name           | App BBVA Mexico                              | string           | Page View |
            | project name            | Glomo                                        | string           | Page View |
            | device mobile           | si                                           | string           | Page View |
            | user userState          | no logado                                    | string           | Page View |

    @ANA_IAC002 @JIRA.GLOMOGL-27029 @manual
    @analytics
    @web @ios @android
    @MX @vbank @backend(test) @no-data-manager
    Scenario: The user enters the chat and an advisor enters the conversation
        Given the user access the Login Screen
        And the analytics interceptor service is initiated
        When the user accesses to the chat in app and continues
        Then the analytics events contains the following variables
            | item                    | value                                                 | type             | event     |
            | analytics               | analytics/glomo_base                                  | json schema      | Page View |
            | version DL              | 20250414_5.0                                          | string           | Page View |
            | page name               | app:publica:general:chat en linea:conversacion asesor | string           | Page View |
            | level 1                 | chat en linea                                         | string           | Page View |
            | level 2                 | conversacion asesor                                   | string           | Page View |
            | language                | ES                                                    | string           | Page View |
            | page area               | publica                                               | string           | Page View |
            | page intent             | informacion                                           | string           | Page View |
            | channel                 | online                                                | string           | Page View |
            | page instance ID        | de                                                    | string           | Page View |
            | page info version       | appVersion                                            | regexp named     | Page View |
            | page segment            | general                                               | string           | Page View |
            | sysEnv                  | app                                                   | string           | Page View |
            | business unit           | BBVA Mexico                                           | string           | Page View |
            | site app name           | App BBVA Mexico                                       | string           | Page View |
            | project name            | Glomo                                                 | string           | Page View |
            | device mobile           | si                                                    | string           | Page View |
            | user userState          | no logado                                             | string           | Page View |

    @ANA_IAC003 @JIRA.GLOMOGL-27029 @manual
    @analytics
    @web @ios @android
    @MX @vbank @backend(test) @no-data-manager
    Scenario: After a conversation the advisor ends the advisory
        Given the user access the Login Screen
        And the user accesses to the chat in app and continues
        And the analytics interceptor service is initiated
        When the user ends the chat
        Then the analytics events contains the following variables
            | item                    | value                                                          | type             | event     |
            | analytics               | analytics/glomo_base                                           | json schema      | Page View |
            | version DL              | 20250414_5.0                                                   | string           | Page View |
            | page name               | app:publica:general:chat en linea:conversacion asesor resuelta | string           | Page View |
            | level 1                 | chat en linea                                                  | string           | Page View |
            | level 2                 | conversacion asesor                                            | string           | Page View |
            | language                | ES                                                             | string           | Page View |
            | page area               | publica                                                        | string           | Page View |
            | page intent             | informacion                                                    | string           | Page View |
            | channel                 | online                                                         | string           | Page View |
            | page instance ID        | de                                                             | string           | Page View |
            | page info version       | appVersion                                                     | regexp named     | Page View |
            | page segment            | general                                                        | string           | Page View |
            | sysEnv                  | app                                                            | string           | Page View |
            | business unit           | BBVA Mexico                                                    | string           | Page View |
            | site app name           | App BBVA Mexico                                                | string           | Page View |
            | project name            | Glomo                                                          | string           | Page View |
            | device mobile           | si                                                             | string           | Page View |
            | user userState          | no logado                                                      | string           | Page View |

    @ANA_EVENT_IAC004
    @analytics
    @web @ios @android
    @MX @vbank @manual @JIRA.GLOMOGL-27029 @backend(test) @no-data-manager
    Scenario: The user enters and exits the chat to the welcome screen
        Given the user access the Login Screen
        And the user accesses to the chat in app and continues
        When the user interrupts the chat
        And the analytics interceptor service is initiated
        And the user goes back to previous page
        Then the analytics events contains the following variables
            | item                    | value                                        | type             | event     |
            | analytics               | analytics/glomo_base                         | json schema      | Page View |
            | version DL              | 20250414_5.0                                 | string           | Page View |
            | page name               | app:publica:general:chat en linea:bienvenido | string           | Page View |
            | level 1                 | chat en linea                                | string           | Page View |
            | level 2                 | bienvenido                                   | string           | Page View |
            | language                | ES                                           | string           | Page View |
            | page area               | publica                                      | string           | Page View |
            | page intent             | informacion                                  | string           | Page View |
            | channel                 | online                                       | string           | Page View |
            | page instance ID        | de                                           | string           | Page View |
            | page info version       | appVersion                                   | regexp named     | Page View |
            | page segment            | general                                      | string           | Page View |
            | sysEnv                  | app                                          | string           | Page View |
            | business unit           | BBVA Mexico                                  | string           | Page View |
            | site app name           | App BBVA Mexico                              | string           | Page View |
            | project name            | Glomo                                        | string           | Page View |
            | device mobile           | si                                           | string           | Page View |
            | user userState          | no logado                                    | string           | Page View |

    @ANA_IAC005
    @analytics
    @web @ios @android
    @MX @vbank @web-done @backend(test) @no-data-manager
    Scenario: The user enters the chat and an error occurs when starting it
        Given the user access the Login Screen
        When the user accesses to the chat in app and continues
        Then the device contains the following variables
            | item                    | value                                        | type             |
            | analytics               | analytics/glomo_base                         | json schema      |
            | version DL              | 20250414_5.0                                 | string           |
            | page name               | app:publica:general:chat en linea:error chat | string           |
            | level 1                 | chat en linea                                | string           |
            | level 2                 | error chat                                   | string           |
            | error page              | error chat                                   | string           |
            | language                | ES                                           | string           |
            | page area               | publica                                      | string           |
            | page intent             | informacion                                  | string           |
            | channel                 | online                                       | string           |
            | page instance ID        | de                                           | string           |
            | page info version       |  appVersion                                  | regexp named     |
            | page segment            | general                                      | string           |
            | sysEnv                  | app                                          | string           |
            | business unit           | BBVA Mexico                                  | string           |
            | site app name           | App BBVA Mexico                              | string           |
            | project name            | Glomo                                        | string           |
            | device mobile           | si                                           | string           |
            | user userState          | no logado                                    | string           |

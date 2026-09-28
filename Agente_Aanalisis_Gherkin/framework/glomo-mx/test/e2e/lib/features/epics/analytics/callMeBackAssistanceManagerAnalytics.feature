@callMeBackAssistanceManagerAnalytics
Feature: Analytics - Call Me Back Assistance Manager

    @ANA_CMBAM001
    @analytics
    @MX @vbank @web-done @backend(test)
    @manual @JIRA.GLOMOMX-180963
    @web @ios @android
    Scenario Outline: Internal Link - Access to I want to call a personal advisor from "<access_from>"
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 24     |
            | month | 1      |
            | year  | 2022   |
        And the user goes to the "consumer loan" offer operation
        When the user accesses to call me back with an assintance manager from "<access_from>"
        Then the device contains the following variables
            | item                | value                                                      | type         |
            | analytics           | analytics/glomo_base                                       | json schema  |
            | version DL          | 20250414_5.0                                               | string       |
            | page name           | app:privada:personas:prestamo personal one click:1 detalle | string       |
            | level 1             | prestamo personal one click                                | string       |
            | level 2             | 1 detalle                                                  | string       |
            | language            | ES                                                         | string       |
            | page area           | privada                                                    | string       |
            | page intent         | informacion                                                | string       |
            | channel             | online                                                     | string       |
            | page instance ID    | de                                                         | string       |
            | page info version   | appVersion                                                 | regexp named |
            | page segment        | personas                                                   | string       |
            | sysEnv              | app                                                        | string       |
            | business unit       | BBVA Mexico                                                | string       |
            | site app name       | App BBVA Mexico                                            | string       |
            | project name        | DIY E2E Sales                                              | string       |
            | link name           | <link_name>                                                | string       |
            | device mobile       | si                                                         | string       |
            | user userState      | logado                                                     | string       |
            | user segment global | 003001                                                     | string       |
            | user age            | age                                                        | regexp named |

        Examples:
            | access_from | link_name                          | hour |
            | link        | quiero llamar a un asesor personal | 10   |
            | header      | llamar a un asesor desde header    | 10   |

    @ANA_CMBAM002
    @analytics
    @MX @vbank @web-done @backend(test)
    @manual @JIRA.GLOMOMX-180963
    @web @ios @android
    Scenario Outline: Page View - Access to I want to call a personal advisor modal from "<access_from>"
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 24     |
            | month | 1      |
            | year  | 2022   |
        And the user goes to the "consumer loan" offer operation
        When the user accesses to I want to call a personal advisor from "<access_from>"
        Then the device contains the following variables
            | item                | value                                                                 | type         |
            | analytics           | analytics/glomo_base                                                  | json schema  |
            | version DL          | 20250414_5.0                                                          | string       |
            | page name           | app:privada:personas:llamada con asesor:asesor personal no disponible | string       |
            | level 1             | llamada con asesor                                                    | string       |
            | level 2             | asesor personal no disponible                                         | string       |
            | language            | ES                                                                    | string       |
            | page area           | privada                                                               | string       |
            | page intent         | informacion                                                           | string       |
            | channel             | online                                                                | string       |
            | page instance ID    | de                                                                    | string       |
            | page info version   | appVersion                                                            | regexp named |
            | page segment        | personas                                                              | string       |
            | sysEnv              | app                                                                   | string       |
            | business unit       | BBVA Mexico                                                           | string       |
            | site app name       | App BBVA Mexico                                                       | string       |
            | project name        | Glomo                                                                 | string       |
            | device mobile       | si                                                                    | string       |
            | user userState      | logado                                                                | string       |
            | user segment global | 003001                                                                | string       |
            | user age            | age                                                                   | regexp named |

        Examples:
            | access_from | hour |
            | link        | 18   |
            | header      | 18   |

    @ANA_CMBAM003
    @analytics
    @MX @vbank @web-done @backend(test)
    @manual @JIRA.GLOMOMX-180963
    @web @ios @android
    Scenario Outline: Page View - Schedule call - Access from "<access_from>"
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 24     |
            | month | 1      |
            | year  | 2022   |
        And the user goes to the "consumer loan" offer operation
        And the user accesses to I want to call a personal advisor from "<access_from>"
        When the user agrees to schedule a call
        Then the device contains the following variables
            | item                | value                                                   | type         |
            | analytics           | analytics/glomo_base                                    | json schema  |
            | version DL          | 20250414_5.0                                            | string       |
            | page name           | app:privada:personas:llamada con asesor:agendar llamada | string       |
            | level 1             | llamada con asesor                                      | string       |
            | level 2             | agendar llamada                                         | string       |
            | language            | ES                                                      | string       |
            | page area           | privada                                                 | string       |
            | page intent         | informacion                                             | string       |
            | channel             | online                                                  | string       |
            | page instance ID    | de                                                      | string       |
            | page info version   | appVersion                                              | regexp named |
            | page segment        | personas                                                | string       |
            | sysEnv              | app                                                     | string       |
            | business unit       | BBVA Mexico                                             | string       |
            | site app name       | App BBVA Mexico                                         | string       |
            | project name        | Glomo                                                   | string       |
            | device mobile       | si                                                      | string       |
            | user userState      | logado                                                  | string       |
            | user segment global | 003001                                                  | string       |
            | user age            | age                                                     | regexp named |

        Examples:
            | access_from | hour |
            | link        | 7    |
            | header      | 19   |

    @ANA_CMBAM004
    @analytics
    @MX @vbank @web-done @backend(test)
    @manual @JIRA.GLOMOMX-180963
    @web @ios @android
    Scenario Outline:: Page View - Scheduled call - Access from "<access_from>"
        Given a user with the following criteria
            | criteria           |
            | assistance manager |
        And the user starts the application at date:
            | hour  | <hour> |
            | day   | 24     |
            | month | 1      |
            | year  | 2022   |
        And the user goes to the "consumer loan" offer operation
        And the user accesses to I want to call a personal advisor from "<access_from>"
        And the user agrees to schedule a call
        When the user selects a schedule
        Then the device contains the following variables
            | item                | value                                                    | type         |
            | analytics           | analytics/glomo_base                                     | json schema  |
            | version DL          | 20250414_5.0                                             | string       |
            | page name           | app:privada:personas:llamada con asesor:llamada agendada | string       |
            | level 1             | llamada con asesor                                       | string       |
            | level 2             | llamada agendada                                         | string       |
            | language            | ES                                                       | string       |
            | page area           | privada                                                  | string       |
            | page intent         | informacion                                              | string       |
            | channel             | online                                                   | string       |
            | page instance ID    | de                                                       | string       |
            | page info version   | appVersion                                               | regexp named |
            | page segment        | personas                                                 | string       |
            | sysEnv              | app                                                      | string       |
            | business unit       | BBVA Mexico                                              | string       |
            | site app name       | App BBVA Mexico                                          | string       |
            | project name        | Glomo                                                    | string       |
            | device mobile       | si                                                       | string       |
            | user userState      | logado                                                   | string       |
            | user segment global | 003001                                                   | string       |
            | user age            | age                                                      | regexp named |

        Examples:
            | access_from | hour |
            | link        | 6    |
            | header      | 20   |

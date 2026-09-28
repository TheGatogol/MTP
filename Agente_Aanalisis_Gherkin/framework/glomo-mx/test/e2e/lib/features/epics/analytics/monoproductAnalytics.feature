@monoproductEnrollmentAnalytics
Feature: Analytics - Monoproduct Enrollment

    @ANA_EVENT_ME001
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    @manual @JIRA.GLOMOMX-237722
    Scenario: Page View - Information
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "register and identify without card" section
        Then the device contains the following variables
            | item                      | value                                                                             | type              |
            | analytics                 | analytics/glomo_base                                                              | json schema       |
            | version DL                | 20250414_5.0                                                                      | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:informacion    | string            |
            | level 1                   | registro token movil                                                              | string            |
            | level 2                   | identificate sin tarjeta                                                          | string            |
            | level 3                   | informacion                                                                       | string            |
            | language                  | ES                                                                                | string            |
            | page area                 | publica                                                                           | string            |
            | page intent               | informacion                                                                       | string            |
            | channel                   | online                                                                            | string            |
            | page instance ID          | de                                                                                | string            |
            | page info version         | appVersion                                                                        | regexp named      |
            | page segment              | personas                                                                          | string            |
            | sysEnv                    | app                                                                               | string            |
            | business unit             | BBVA Mexico                                                                       | string            |
            | site app name             | App BBVA Mexico                                                                   | string            |
            | project name              | Glomo                                                                             | string            |
            | device mobile             | si                                                                                | string            |
            | user userState            | no logado                                                                         | string            |
            | prospect ID               |                                                                                   | string            |
            | internal campaign         |                                                                                   | empty array       |
            | optimization attributes   |                                                                                   | empty array       |
            | application               |                                                                                   | empty str object  |
            | products attributes       |                                                                                   | empty array       |

    @ANA_EVENT_ME002
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    @manual @JIRA.GLOMOMX-237722
    Scenario: Page View - Data
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "Monoproduct Flow" section
        Then the device contains the following variables
            | item                      | value                                                                     | type              |
            | analytics                 | analytics/glomo_base                                                      | json schema       |
            | version DL                | 20250414_5.0                                                              | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:datos  | string            |
            | level 1                   | registro token movil                                                      | string            |
            | level 2                   | identificate sin tarjeta                                                  | string            |
            | level 3                   | datos                                                                     | string            |
            | language                  | ES                                                                        | string            |
            | page area                 | publica                                                                   | string            |
            | page intent               | informacion                                                               | string            |
            | channel                   | online                                                                    | string            |
            | page instance ID          | de                                                                        | string            |
            | page info version         | appVersion                                                                | regexp named      |
            | page segment              | personas                                                                  | string            |
            | sysEnv                    | app                                                                       | string            |
            | business unit             | BBVA Mexico                                                               | string            |
            | site app name             | App BBVA Mexico                                                           | string            |
            | project name              | Glomo                                                                     | string            |
            | device mobile             | si                                                                        | string            |
            | user userState            | no logado                                                                 | string            |
            | prospect ID               |                                                                           | string            |
            | internal campaign         |                                                                           | empty array       |
            | optimization attributes   |                                                                           | empty array       |
            | application               |                                                                           | empty str object  |
            | products attributes       |                                                                           | empty array       |

    @ANA_EVENT_ME003
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    @manual @JIRA.GLOMOMX-237722
    Scenario: Page View - Process
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct flow and confirm their personal data" section
        Then the device contains the following variables
            | item                      | value                                                                         | type              |
            | analytics                 | analytics/glomo_base                                                          | json schema       |
            | version DL                | 20250414_5.0                                                                  | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:proceso    | string            |
            | level 1                   | registro token movil                                                          | string            |
            | level 2                   | identificate sin tarjeta                                                      | string            |
            | level 3                   | proceso                                                                       | string            |
            | language                  | ES                                                                            | string            |
            | page area                 | publica                                                                       | string            |
            | page intent               | informacion                                                                   | string            |
            | channel                   | online                                                                        | string            |
            | page instance ID          | de                                                                            | string            |
            | page info version         | appVersion                                                                    | regexp named      |
            | page segment              | personas                                                                      | string            |
            | sysEnv                    | app                                                                           | string            |
            | business unit             | BBVA Mexico                                                                   | string            |
            | site app name             | App BBVA Mexico                                                               | string            |
            | project name              | Glomo                                                                         | string            |
            | device mobile             | si                                                                            | string            |
            | user userState            | no logado                                                                     | string            |
            | prospect ID               |                                                                               | string            |
            | internal campaign         |                                                                               | empty array       |
            | optimization attributes   |                                                                               | empty array       |
            | application               |                                                                               | empty str object  |
            | products attributes       |                                                                               | empty array       |

    @ANA_EVENT_ME004
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    @manual @JIRA.GLOMOMX-237722
    Scenario: Page View - Verify Identity
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct until to biometric screen" section
        Then the device contains the following variables
            | item                      | value                                                                                 | type              |
            | analytics                 | analytics/glomo_base                                                                  | json schema       |
            | version DL                | 20250414_5.0                                                                          | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:verifica identidad | string            |
            | level 1                   | registro token movil                                                                  | string            |
            | level 2                   | identificate sin tarjeta                                                              | string            |
            | level 3                   | verifica identidad                                                                    | string            |
            | language                  | ES                                                                                    | string            |
            | page area                 | publica                                                                               | string            |
            | page intent               | informacion                                                                           | string            |
            | channel                   | online                                                                                | string            |
            | page instance ID          | de                                                                                    | string            |
            | page info version         | appVersion                                                                            | regexp named      |
            | page segment              | personas                                                                              | string            |
            | sysEnv                    | app                                                                                   | string            |
            | business unit             | BBVA Mexico                                                                           | string            |
            | site app name             | App BBVA Mexico                                                                       | string            |
            | project name              | Glomo                                                                                 | string            |
            | device mobile             | si                                                                                    | string            |
            | user userState            | no logado                                                                             | string            |
            | prospect ID               |                                                                                       | string            |
            | internal campaign         |                                                                                       | empty array       |
            | optimization attributes   |                                                                                       | empty array       |
            | application               |                                                                                       | empty str object  |
            | products attributes       |                                                                                       | empty array       |

    @ANA_EVENT_ME005
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    @manual @JIRA.GLOMOMX-237722
    Scenario: Page View - INE indications
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct and accept the processing of their personal data" section
        Then the device contains the following variables
            | item                      | value                                                                                 | type              |
            | analytics                 | analytics/glomo_base                                                                  | json schema       |
            | version DL                | 20250414_5.0                                                                          | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:indicaciones ine   | string            |
            | level 1                   | registro token movil                                                                  | string            |
            | level 2                   | identificate sin tarjeta                                                              | string            |
            | level 3                   | indicaciones ine                                                                      | string            |
            | language                  | ES                                                                                    | string            |
            | page area                 | publica                                                                               | string            |
            | page intent               | informacion                                                                           | string            |
            | channel                   | online                                                                                | string            |
            | page instance ID          | de                                                                                    | string            |
            | page info version         | appVersion                                                                            | regexp named      |
            | page segment              | personas                                                                              | string            |
            | sysEnv                    | app                                                                                   | string            |
            | business unit             | BBVA Mexico                                                                           | string            |
            | site app name             | App BBVA Mexico                                                                       | string            |
            | project name              | Glomo                                                                                 | string            |
            | device mobile             | si                                                                                    | string            |
            | user userState            | no logado                                                                             | string            |
            | prospect ID               |                                                                                       | string            |
            | internal campaign         |                                                                                       | empty array       |
            | optimization attributes   |                                                                                       | empty array       |
            | application               |                                                                                       | empty str object  |
            | products attributes       |                                                                                       | empty array       |

    @ANA_EVENT_ME006
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Selfie indications
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct and scan identification" section
        Then the device contains the following variables
            | item                      | value                                                                                     | type              |
            | analytics                 | analytics/glomo_base                                                                      | json schema       |
            | version DL                | 20250414_5.0                                                                              | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:indicaciones selfie    | string            |
            | level 1                   | registro token movil                                                                      | string            |
            | level 2                   | identificate sin tarjeta                                                                  | string            |
            | level 3                   | indicaciones selfie                                                                       | string            |
            | language                  | ES                                                                                        | string            |
            | page area                 | publica                                                                                   | string            |
            | page intent               | informacion                                                                               | string            |
            | channel                   | online                                                                                    | string            |
            | page instance ID          | de                                                                                        | string            |
            | page info version         | appVersion                                                                                | regexp named      |
            | page segment              | personas                                                                                  | string            |
            | sysEnv                    | app                                                                                       | string            |
            | business unit             | BBVA Mexico                                                                               | string            |
            | site app name             | App BBVA Mexico                                                                           | string            |
            | project name              | Glomo                                                                                     | string            |
            | device mobile             | si                                                                                        | string            |
            | user userState            | no logado                                                                                 | string            |
            | prospect ID               |                                                                                           | string            |
            | internal campaign         |                                                                                           | empty array       |
            | optimization attributes   |                                                                                           | empty array       |
            | application               |                                                                                           | empty str object  |
            | products attributes       |                                                                                           | empty array       |

    @ANA_EVENT_ME007
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Success identity
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct and completes veridas" section
        Then the device contains the following variables
            | item                      | value                                                                                             | type              |
            | analytics                 | analytics/glomo_base                                                                              | json schema       |
            | version DL                | 20250414_5.0                                                                                      | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:verificacion identidad exitosa | string            |
            | level 1                   | registro token movil                                                                              | string            |
            | level 2                   | identificate sin tarjeta                                                                          | string            |
            | level 3                   | verificacion identidad exitosa                                                                    | string            |
            | language                  | ES                                                                                                | string            |
            | page area                 | publica                                                                                           | string            |
            | page intent               | informacion                                                                                       | string            |
            | channel                   | online                                                                                            | string            |
            | page instance ID          | de                                                                                                | string            |
            | page info version         | appVersion                                                                                        | regexp named      |
            | page segment              | personas                                                                                          | string            |
            | sysEnv                    | app                                                                                               | string            |
            | business unit             | BBVA Mexico                                                                                       | string            |
            | site app name             | App BBVA Mexico                                                                                   | string            |
            | project name              | Glomo                                                                                             | string            |
            | device mobile             | si                                                                                                | string            |
            | user userState            | no logado                                                                                         | string            |
            | prospect ID               |                                                                                                   | string            |
            | internal campaign         |                                                                                                   | empty array       |
            | optimization attributes   |                                                                                                   | empty array       |
            | application               |                                                                                                   | empty str object  |
            | products attributes       |                                                                                                   | empty array       |

    @ANA_EVENT_ME008
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - OTP
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "monoproduct and completes veridas" section
        When the user view OTP SMS screen
        Then the device contains the following variables
            | item                      | value                                                                     | type              |
            | analytics                 | analytics/glomo_base                                                      | json schema       |
            | version DL                | 20250414_5.0                                                              | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:otp    | string            |
            | level 1                   | registro token movil                                                      | string            |
            | level 2                   | identificate sin tarjeta                                                  | string            |
            | level 3                   | otp                                                                       | string            |
            | language                  | ES                                                                        | string            |
            | page area                 | publica                                                                   | string            |
            | page intent               | informacion                                                               | string            |
            | channel                   | online                                                                    | string            |
            | page instance ID          | de                                                                        | string            |
            | page info version         | appVersion                                                                | regexp named      |
            | page segment              | personas                                                                  | string            |
            | sysEnv                    | app                                                                       | string            |
            | business unit             | BBVA Mexico                                                               | string            |
            | site app name             | App BBVA Mexico                                                           | string            |
            | project name              | Glomo                                                                     | string            |
            | device mobile             | si                                                                        | string            |
            | user userState            | no logado                                                                 | string            |
            | prospect ID               |                                                                           | string            |
            | internal campaign         |                                                                           | empty array       |
            | optimization attributes   |                                                                           | empty array       |
            | application               |                                                                           | empty str object  |
            | products attributes       |                                                                           | empty array       |

    @ANA_EVENT_ME009
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Email
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And a user accesses the application
        When the user accesses to "monoproduct and enter to email screen" section
        Then the device contains the following variables
            | item                      | value                                                                                 | type              |
            | analytics                 | analytics/glomo_base                                                                  | json schema       |
            | version DL                | 20250414_5.0                                                                          | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:correo electronico | string            |
            | level 1                   | registro token movil                                                                  | string            |
            | level 2                   | identificate sin tarjeta                                                              | string            |
            | level 3                   | correo electronico                                                                    | string            |
            | language                  | ES                                                                                    | string            |
            | page area                 | publica                                                                               | string            |
            | page intent               | informacion                                                                           | string            |
            | channel                   | online                                                                                | string            |
            | page instance ID          | de                                                                                    | string            |
            | page info version         | appVersion                                                                            | regexp named      |
            | page segment              | personas                                                                              | string            |
            | sysEnv                    | app                                                                                   | string            |
            | business unit             | BBVA Mexico                                                                           | string            |
            | site app name             | App BBVA Mexico                                                                       | string            |
            | project name              | Glomo                                                                                 | string            |
            | device mobile             | si                                                                                    | string            |
            | user userState            | no logado                                                                             | string            |
            | prospect ID               |                                                                                       | string            |
            | internal campaign         |                                                                                       | empty array       |
            | optimization attributes   |                                                                                       | empty array       |
            | application               |                                                                                       | empty str object  |
            | products attributes       |                                                                                       | empty array       |

    @ANA_EVENT_ME010
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Access with your card
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow" section
        When the user completes Monoproduct Flow with user with card
        Then the device contains the following variables
            | item                      | value                                                                                     | type              |
            | analytics                 | analytics/glomo_base                                                                      | json schema       |
            | version DL                | 20250414_5.0                                                                              | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:accede con tu tarjeta  | string            |
            | level 1                   | registro token movil                                                                      | string            |
            | level 2                   | identificate sin tarjeta                                                                  | string            |
            | level 3                   | accede con tu tarjeta                                                                     | string            |
            | language                  | ES                                                                                        | string            |
            | page area                 | publica                                                                                   | string            |
            | page intent               | informacion                                                                               | string            |
            | channel                   | online                                                                                    | string            |
            | page instance ID          | de                                                                                        | string            |
            | page info version         | appVersion                                                                                | regexp named      |
            | page segment              | personas                                                                                  | string            |
            | sysEnv                    | app                                                                                       | string            |
            | business unit             | BBVA Mexico                                                                               | string            |
            | site app name             | App BBVA Mexico                                                                           | string            |
            | project name              | Glomo                                                                                     | string            |
            | device mobile             | si                                                                                        | string            |
            | user userState            | no logado                                                                                 | string            |
            | prospect ID               |                                                                                           | string            |
            | internal campaign         |                                                                                           | empty array       |
            | optimization attributes   |                                                                                           | empty array       |
            | application               |                                                                                           | empty str object  |
            | products attributes       |                                                                                           | empty array       |

    @ANA_EVENT_ME011
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Verify phone number
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow" section
        When the user completes Monoproduct Flow with a phone not registered
        Then the device contains the following variables
            | item                      | value                                                                                         | type              |
            | analytics                 | analytics/glomo_base                                                                          | json schema       |
            | version DL                | 20250414_5.0                                                                                  | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:verifica numero telefono   | string            |
            | level 1                   | registro token movil                                                                          | string            |
            | level 2                   | identificate sin tarjeta                                                                      | string            |
            | level 3                   | verifica numero telefono                                                                      | string            |
            | language                  | ES                                                                                            | string            |
            | page area                 | publica                                                                                       | string            |
            | page intent               | informacion                                                                                   | string            |
            | channel                   | online                                                                                        | string            |
            | page instance ID          | de                                                                                            | string            |
            | page info version         | appVersion                                                                                    | regexp named      |
            | page segment              | personas                                                                                      | string            |
            | sysEnv                    | app                                                                                           | string            |
            | business unit             | BBVA Mexico                                                                                   | string            |
            | site app name             | App BBVA Mexico                                                                               | string            |
            | project name              | Glomo                                                                                         | string            |
            | device mobile             | si                                                                                            | string            |
            | user userState            | no logado                                                                                     | string            |
            | prospect ID               |                                                                                               | string            |
            | internal campaign         |                                                                                               | empty array       |
            | optimization attributes   |                                                                                               | empty array       |
            | application               |                                                                                               | empty str object  |
            | products attributes       |                                                                                               | empty array       |

    @ANA_EVENT_ME012
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Verify credit number
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow" section
        When the user completes Monoproduct Flow with a phone not registered
        Then the device contains the following variables
            | item                      | value                                                                                         | type              |
            | analytics                 | analytics/glomo_base                                                                          | json schema       |
            | version DL                | 20250414_5.0                                                                                  | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:verifica numero credito    | string            |
            | level 1                   | registro token movil                                                                          | string            |
            | level 2                   | identificate sin tarjeta                                                                      | string            |
            | level 3                   | verifica numero credito                                                                       | string            |
            | language                  | ES                                                                                            | string            |
            | page area                 | publica                                                                                       | string            |
            | page intent               | informacion                                                                                   | string            |
            | channel                   | online                                                                                        | string            |
            | page instance ID          | de                                                                                            | string            |
            | page info version         | appVersion                                                                                    | regexp named      |
            | page segment              | personas                                                                                      | string            |
            | sysEnv                    | app                                                                                           | string            |
            | business unit             | BBVA Mexico                                                                                   | string            |
            | site app name             | App BBVA Mexico                                                                               | string            |
            | project name              | Glomo                                                                                         | string            |
            | device mobile             | si                                                                                            | string            |
            | user userState            | no logado                                                                                     | string            |
            | prospect ID               |                                                                                               | string            |
            | internal campaign         |                                                                                               | empty array       |
            | optimization attributes   |                                                                                               | empty array       |
            | application               |                                                                                               | empty str object  |
            | products attributes       |                                                                                               | empty array       |

    @ANA_EVENT_ME013
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Previously registered
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow" section
        When the user completes Monoproduct Flow with a user registered
        Then the device contains the following variables
            | item                      | value                                                                                     | type              |
            | analytics                 | analytics/glomo_base                                                                      | json schema       |
            | version DL                | 20250414_5.0                                                                              | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:registrado previamente | string            |
            | level 1                   | registro token movil                                                                      | string            |
            | level 2                   | identificate sin tarjeta                                                                  | string            |
            | level 3                   | registrado previamente                                                                    | string            |
            | language                  | ES                                                                                        | string            |
            | page area                 | publica                                                                                   | string            |
            | page intent               | informacion                                                                               | string            |
            | channel                   | online                                                                                    | string            |
            | page instance ID          | de                                                                                        | string            |
            | page info version         | appVersion                                                                                | regexp named      |
            | page segment              | personas                                                                                  | string            |
            | sysEnv                    | app                                                                                       | string            |
            | business unit             | BBVA Mexico                                                                               | string            |
            | site app name             | App BBVA Mexico                                                                           | string            |
            | project name              | Glomo                                                                                     | string            |
            | device mobile             | si                                                                                        | string            |
            | user userState            | no logado                                                                                 | string            |
            | prospect ID               |                                                                                           | string            |
            | internal campaign         |                                                                                           | empty array       |
            | optimization attributes   |                                                                                           | empty array       |
            | application               |                                                                                           | empty str object  |
            | products attributes       |                                                                                           | empty array       |

    @ANA_EVENT_ME014
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Active alerts
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow" section
        When the user completes Monoproduct Flow with a user registered with active alerts
        Then the device contains the following variables
            | item                      | value                                                                                 | type              |
            | analytics                 | analytics/glomo_base                                                                  | json schema       |
            | version DL                | 20250414_5.0                                                                          | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:alertas activas    | string            |
            | level 1                   | registro token movil                                                                  | string            |
            | level 2                   | identificate sin tarjeta                                                              | string            |
            | level 3                   | alertas activas                                                                       | string            |
            | language                  | ES                                                                                    | string            |
            | page area                 | publica                                                                               | string            |
            | page intent               | informacion                                                                           | string            |
            | channel                   | online                                                                                | string            |
            | page instance ID          | de                                                                                    | string            |
            | page info version         | appVersion                                                                            | regexp named      |
            | page segment              | personas                                                                              | string            |
            | sysEnv                    | app                                                                                   | string            |
            | business unit             | BBVA Mexico                                                                           | string            |
            | site app name             | App BBVA Mexico                                                                       | string            |
            | project name              | Glomo                                                                                 | string            |
            | device mobile             | si                                                                                    | string            |
            | user userState            | no logado                                                                             | string            |
            | prospect ID               |                                                                                       | string            |
            | internal campaign         |                                                                                       | empty array       |
            | optimization attributes   |                                                                                       | empty array       |
            | application               |                                                                                       | empty str object  |
            | products attributes       |                                                                                       | empty array       |

    @ANA_EVENT_ME015
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - No camera permissions
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow" section
        When does not grant camera permissions in veridas section
        Then the device contains the following variables
            | item                      | value                                                                                     | type              |
            | analytics                 | analytics/glomo_base                                                                      | json schema       |
            | version DL                | 20250414_5.0                                                                              | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:sin permisos camara    | string            |
            | level 1                   | registro token movil                                                                      | string            |
            | level 2                   | identificate sin tarjeta                                                                  | string            |
            | level 3                   | sin permisos camara                                                                       | string            |
            | error page                | sin permisos camara                                                                       | string            |
            | language                  | ES                                                                                        | string            |
            | page area                 | publica                                                                                   | string            |
            | page intent               | informacion                                                                               | string            |
            | channel                   | online                                                                                    | string            |
            | page instance ID          | de                                                                                        | string            |
            | page info version         | appVersion                                                                                | regexp named      |
            | page segment              | personas                                                                                  | string            |
            | sysEnv                    | app                                                                                       | string            |
            | business unit             | BBVA Mexico                                                                               | string            |
            | site app name             | App BBVA Mexico                                                                           | string            |
            | project name              | Glomo                                                                                     | string            |
            | device mobile             | si                                                                                        | string            |
            | user userState            | no logado                                                                                 | string            |
            | prospect ID               |                                                                                           | string            |
            | internal campaign         |                                                                                           | empty array       |
            | optimization attributes   |                                                                                           | empty array       |
            | application               |                                                                                           | empty str object  |
            | products attributes       |                                                                                           | empty array       |

    @ANA_EVENT_ME016
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Veridas comunication error
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow" section
        When the user lost conection with server in veridas section
        Then the device contains the following variables
            | item                      | value                                                                                             | type              |
            | analytics                 | analytics/glomo_base                                                                              | json schema       |
            | version DL                | 20250414_5.0                                                                                      | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:error de comunicacion veridas  | string            |
            | level 1                   | registro token movil                                                                              | string            |
            | level 2                   | identificate sin tarjeta                                                                          | string            |
            | level 3                   | error de comunicacion veridas                                                                     | string            |
            | error page                | error de comunicacion veridas                                                                     | string            |
            | language                  | ES                                                                                                | string            |
            | page area                 | publica                                                                                           | string            |
            | page intent               | informacion                                                                                       | string            |
            | channel                   | online                                                                                            | string            |
            | page instance ID          | de                                                                                                | string            |
            | page info version         | appVersion                                                                                        | regexp named      |
            | page segment              | personas                                                                                          | string            |
            | sysEnv                    | app                                                                                               | string            |
            | business unit             | BBVA Mexico                                                                                       | string            |
            | site app name             | App BBVA Mexico                                                                                   | string            |
            | project name              | Glomo                                                                                             | string            |
            | device mobile             | si                                                                                                | string            |
            | user userState            | no logado                                                                                         | string            |
            | prospect ID               |                                                                                                   | string            |
            | internal campaign         |                                                                                                   | empty array       |
            | optimization attributes   |                                                                                                   | empty array       |
            | application               |                                                                                                   | empty str object  |
            | products attributes       |                                                                                                   | empty array       |

    @ANA_EVENT_ME017
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Veridas validation error
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow" section
        When the user lost conection with server in veridas section
        Then the device contains the following variables
            | item                      | value                                                                                             | type              |
            | analytics                 | analytics/glomo_base                                                                              | json schema       |
            | version DL                | 20250414_5.0                                                                                      | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:error de validacion veridas    | string            |
            | level 1                   | registro token movil                                                                              | string            |
            | level 2                   | identificate sin tarjeta                                                                          | string            |
            | level 3                   | error de validacion veridas                                                                       | string            |
            | error page                | error de validacion veridas                                                                       | string            |
            | language                  | ES                                                                                                | string            |
            | page area                 | publica                                                                                           | string            |
            | page intent               | informacion                                                                                       | string            |
            | channel                   | online                                                                                            | string            |
            | page instance ID          | de                                                                                                | string            |
            | page info version         | appVersion                                                                                        | regexp named      |
            | page segment              | personas                                                                                          | string            |
            | sysEnv                    | app                                                                                               | string            |
            | business unit             | BBVA Mexico                                                                                       | string            |
            | site app name             | App BBVA Mexico                                                                                   | string            |
            | project name              | Glomo                                                                                             | string            |
            | device mobile             | si                                                                                                | string            |
            | user userState            | no logado                                                                                         | string            |
            | prospect ID               |                                                                                                   | string            |
            | internal campaign         |                                                                                                   | empty array       |
            | optimization attributes   |                                                                                                   | empty array       |
            | application               |                                                                                                   | empty str object  |
            | products attributes       |                                                                                                   | empty array       |

    @ANA_EVENT_ME018
    @analytics
    @MX @vbank @backend(test)
    @ios @android @web @manual @JIRA.DCST-481
    Scenario: Page View - Not realized operation
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to "Monoproduct Flow"
        When the user terminates process without finish
        Then the device contains the following variables
            | item                      | value                                                                                     | type              |
            | analytics                 | analytics/glomo_base                                                                      | json schema       |
            | version DL                | 20250414_5.0                                                                              | string            |
            | page name                 | app:publica:personas:registro token movil:identificate sin tarjeta:operacion no realizada | string            |
            | level 1                   | registro token movil                                                                      | string            |
            | level 2                   | identificate sin tarjeta                                                                  | string            |
            | level 3                   | operacion no realizada                                                                    | string            |
            | error page                | operacion no realizada                                                                    | string            |
            | language                  | ES                                                                                        | string            |
            | page area                 | publica                                                                                   | string            |
            | page intent               | informacion                                                                               | string            |
            | channel                   | online                                                                                    | string            |
            | page instance ID          | de                                                                                        | string            |
            | page info version         | appVersion                                                                                | regexp named      |
            | page segment              | personas                                                                                  | string            |
            | sysEnv                    | app                                                                                       | string            |
            | business unit             | BBVA Mexico                                                                               | string            |
            | site app name             | App BBVA Mexico                                                                           | string            |
            | project name              | Glomo                                                                                     | string            |
            | device mobile             | si                                                                                        | string            |
            | user userState            | no logado                                                                                 | string            |
            | prospect ID               |                                                                                           | string            |
            | internal campaign         |                                                                                           | empty array       |
            | optimization attributes   |                                                                                           | empty array       |
            | application               |                                                                                           | empty str object  |
            | products attributes       |                                                                                           | empty array       |

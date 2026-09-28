@inAppCRMAnalytics
Feature: Analytics -InApp CRM

    @ANA_EVENT_CRM001
    @analytics
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Page view - User access when In App advanced
        Given a user with the following criteria
            | criteria          |
            | inap advanced crm |
        When the user accesses to In App advanced
        Then the device contains the following variables:
            | item                       | value                                             | type             |
            | version DL                 | 20250414_5.0                                      | string           |
            | page name                  | app:privada:personas:in app:alta de beneficiarios | string           |
            | level 1                    | in app                                            | string           |
            | level 2                    | alta de beneficiarios                             | string           |
            | language                   | ES                                                | string           |
            | page area                  | privada                                           | string           |
            | page intent                | informacion                                       | string           |
            | channel                    | online                                            | string           |
            | page instance ID           | de                                                | string           |
            | page info version          | appVersion                                        | regexp named     |
            | page segment               | personas                                          | string           |
            | sysEnv                     | app                                               | string           |
            | business unit              | BBVA Mexico                                       | string           |
            | site app name              | App BBVA Mexico                                   | string           |
            | project name               | Glomo                                             | string           |
            | device mobile              | si                                                | string           |
            | user userState             | logado                                            | string           |
            | user segment global        | 003001                                            | string           |
            | internal campaign          |                                                   | empty array      |
            | optimization attributes    |                                                   | empty array      |
            | application                |                                                   | empty str object |
            | products attributes        |                                                   | empty array      |

    @ANA_EVENT_CRM002
    @analytics
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Page view - user sees privacy notice
        Given a user with the following criteria
            | criteria          |
            | inap advanced crm |
        And the user accesses to In App advanced
        And the analytics interceptor service is initiated
        When the user views the In App privacy notice
        Then the analytics events contains the following variables
            | item                     | value                                                                 | type             |  event     |
            | version DL               | 20250414_5.0                                                          | string           |  Page View |
            | page instance ID         | de                                                                    | string           |  Page View |
            | sysEnv                   | app                                                                   | string           |  Page View |
            | page segment             | personas                                                              | string           |  Page View |
            | page intent              | informacion                                                           | string           |  Page View |
            | business unit            | BBVA Mexico                                                           | string           |  Page View |
            | page area                | privada                                                               | string           |  Page View |
            | language                 | ES                                                                    | string           |  Page View |
            | channel                  | online                                                                | string           |  Page View |
            | site app name            | App BBVA Mexico                                                       | string           |  Page View |
            | project name             | Glomo                                                                 | string           |  Page View |
            | level 1                  | in app                                                                | string           |  Page View |
            | level 2                  | alta de beneficiarios                                                 | string           |  Page View |
            | level 3                  | aviso de privacidad                                                   | string           |  Page View |
            | page name                | app:privada:personas:in app:alta de beneficiarios:aviso de privacidad | string           |  Page View |
            | profile ID               | profileID                                                             | regexp named     |  Page View |
            | device mobile            | si                                                                    | string           |  Page View |
            | user userState           | logado                                                                | string           |  Page View |
            | user segment global      | 003001                                                                | string           |  Page View |
            | internal campaign        |                                                                       | empty array      |  Page View |
            | optimization attributes  |                                                                       | empty array      |  Page View |
            | application              |                                                                       | empty str object |  Page View |
            | products attributes      |                                                                       | empty array      |  Page View |

    @ANA_EVENT_CRM003
    @analytics
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Internal link - User displays informative message
        Given a user with the following criteria
            | criteria          |
            | inap advanced crm |
        And the user accesses to In App advanced
        And the analytics interceptor service is initiated
        When the user displays an informative message
        Then the analytics events contains the following variables
            | item                     | value                                               | type             | event         |
            | version DL               | 20250414_5.0                                        | string           | Internal Link |
            | page instance ID         | de                                                  | string           | Internal Link |
            | sysEnv                   | app                                                 | string           | Internal Link |
            | page segment             | personas                                            | string           | Internal Link |
            | page intent              | informacion                                         | string           | Internal Link |
            | business unit            | BBVA Mexico                                         | string           | Internal Link |
            | page area                | privada                                             | string           | Internal Link |
            | language                 | ES                                                  | string           | Internal Link |
            | channel                  | online                                              | string           | Internal Link |
            | site app name            | App BBVA Mexico                                     | string           | Internal Link |
            | project name             | Glomo                                               | string           | Internal Link |
            | level 1                  | in app                                              | string           | Internal Link |
            | level 2                  | alta de beneficiarios                               | string           | Internal Link |
            | link name                | saber mas                                           | string           | Internal Link |
            | page name                | app:privada:personas:in app:alta de beneficiarios   | string           | Internal Link |
            | profile ID               | profileID                                           | regexp named     | Internal Link |
            | device mobile            | si                                                  | string           | Internal Link |
            | user userState           | logado                                              | string           | Internal Link |
            | user segment global      | 003001                                              | string           | Internal Link |
            | internal campaign        |                                                     | empty array      | Internal Link |
            | optimization attributes  |                                                     | empty array      | Internal Link |
            | application              |                                                     | empty str object | Internal Link |
            | products attributes      |                                                     | empty array      | Internal Link |

    @ANA_EVENT_CRM004
    @analytics
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Internal link - User press continue
        Given a user with the following criteria
            | criteria              |
            | inap advanced crm two |
        And the user accesses to In App advanced
        And the analytics interceptor service is initiated
        When the user navigates to beneficiary flow
        Then the analytics events contains the following variables
            | item                     | value                                               | type             | event         |
            | version DL               | 20250414_5.0                                        | string           | Internal Link |
            | page instance ID         | de                                                  | string           | Internal Link |
            | sysEnv                   | app                                                 | string           | Internal Link |
            | page segment             | personas                                            | string           | Internal Link |
            | page intent              | informacion                                         | string           | Internal Link |
            | business unit            | BBVA Mexico                                         | string           | Internal Link |
            | page area                | privada                                             | string           | Internal Link |
            | language                 | ES                                                  | string           | Internal Link |
            | channel                  | online                                              | string           | Internal Link |
            | site app name            | App BBVA Mexico                                     | string           | Internal Link |
            | project name             | Glomo                                               | string           | Internal Link |
            | level 1                  | in app                                              | string           | Internal Link |
            | level 2                  | alta de beneficiarios                               | string           | Internal Link |
            | link name                | continuar                                           | string           | Internal Link |
            | page name                | app:privada:personas:in app:alta de beneficiarios   | string           | Internal Link |
            | profile ID               | profileID                                           | regexp named     | Internal Link |
            | device mobile            | si                                                  | string           | Internal Link |
            | user userState           | logado                                              | string           | Internal Link |
            | user segment global      | 003001                                              | string           | Internal Link |
            | internal campaign        |                                                     | empty array      | Internal Link |
            | optimization attributes  |                                                     | empty array      | Internal Link |
            | application              |                                                     | empty str object | Internal Link |
            | products attributes      |                                                     | empty array      | Internal Link |

    @ANA_EVENT_CRM005
    @analytics
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Internal link - User presses another time
        Given a user with the following criteria
            | criteria              |
            | inap advanced crm two |
        And the user accesses to In App advanced
        And the analytics interceptor service is initiated
        When the user navigates to the dashboard when selecting another time in inApp
        Then the analytics events contains the following variables
            | item                     | value                                               | type             | event         |
            | version DL               | 20250414_5.0                                        | string           | Internal Link |
            | page instance ID         | de                                                  | string           | Internal Link |
            | sysEnv                   | app                                                 | string           | Internal Link |
            | page segment             | personas                                            | string           | Internal Link |
            | page intent              | informacion                                         | string           | Internal Link |
            | business unit            | BBVA Mexico                                         | string           | Internal Link |
            | page area                | privada                                             | string           | Internal Link |
            | language                 | ES                                                  | string           | Internal Link |
            | channel                  | online                                              | string           | Internal Link |
            | site app name            | App BBVA Mexico                                     | string           | Internal Link |
            | project name             | Glomo                                               | string           | Internal Link |
            | level 1                  | in app                                              | string           | Internal Link |
            | level 2                  | alta de beneficiarios                               | string           | Internal Link |
            | link name                | en otro momento                                     | string           | Internal Link |
            | page name                | app:privada:personas:in app:alta de beneficiarios   | string           | Internal Link |
            | profile ID               | profileID                                           | regexp named     | Internal Link |
            | device mobile            | si                                                  | string           | Internal Link |
            | user userState           | logado                                              | string           | Internal Link |
            | user segment global      | 003001                                              | string           | Internal Link |
            | internal campaign        |                                                     | empty array      | Internal Link |
            | optimization attributes  |                                                     | empty array      | Internal Link |
            | application              |                                                     | empty str object | Internal Link |
            | products attributes      |                                                     | empty array      | Internal Link |

    @ANA_EVENT_CRM006
    @analytics
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Internal link - User accepts terms
        Given a user with the following criteria
            | criteria              |
            | inap advanced crm two |
        And the user accesses to In App advanced
        And the user displays an informative message
        And the analytics interceptor service is initiated
        When the user accepts terms and conditions of inApp
        Then the analytics events contains the following variables
            | item                     | value                                                     | type             | event         |
            | version DL               | 20250414_5.0                                              | string           | Internal Link |
            | page instance ID         | de                                                        | string           | Internal Link |
            | sysEnv                   | app                                                       | string           | Internal Link |
            | page segment             | personas                                                  | string           | Internal Link |
            | page intent              | informacion                                               | string           | Internal Link |
            | business unit            | BBVA Mexico                                               | string           | Internal Link |
            | page area                | privada                                                   | string           | Internal Link |
            | language                 | ES                                                        | string           | Internal Link |
            | channel                  | online                                                    | string           | Internal Link |
            | site app name            | App BBVA Mexico                                           | string           | Internal Link |
            | project name             | Glomo                                                     | string           | Internal Link |
            | level 1                  | in app                                                    | string           | Internal Link |
            | level 2                  | alta de beneficiarios                                     | string           | Internal Link |
            | level 3                  | detalle                                                   | string           | Internal Link |
            | link name                | continuar                                                 | string           | Internal Link |
            | page name                | app:privada:personas:in app:alta de beneficiarios:detalle | string           | Internal Link |
            | profile ID               | profileID                                                 | regexp named     | Internal Link |
            | device mobile            | si                                                        | string           | Internal Link |
            | user userState           | logado                                                    | string           | Internal Link |
            | user segment global      | 003001                                                    | string           | Internal Link |
            | internal campaign        |                                                           | empty array      | Internal Link |
            | optimization attributes  |                                                           | empty array      | Internal Link |
            | application              |                                                           | empty str object | Internal Link |
            | products attributes      |                                                           | empty array      | Internal Link |

    @ANA_EVENT_CRM007
    @analytics
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: Page view - User views advice screen
        Given a user with the following criteria
            | criteria              |
            | inap advanced crm two |
        And the user accesses to In App advanced
        And the analytics interceptor service is initiated
        When the user displays an informative message
        Then the analytics events contains the following variables:
            | item                     | value                                                     | type             | event     |
            | version DL               | 20250414_5.0                                              | string           | Page View |
            | page instance ID         | de                                                        | string           | Page View |
            | sysEnv                   | app                                                       | string           | Page View |
            | page segment             | personas                                                  | string           | Page View |
            | page intent              | informacion                                               | string           | Page View |
            | business unit            | BBVA Mexico                                               | string           | Page View |
            | page area                | privada                                                   | string           | Page View |
            | language                 | ES                                                        | string           | Page View |
            | channel                  | online                                                    | string           | Page View |
            | site app name            | App BBVA Mexico                                           | string           | Page View |
            | project name             | Glomo                                                     | string           | Page View |
            | level 1                  | in app                                                    | string           | Page View |
            | level 2                  | alta de beneficiarios                                     | string           | Page View |
            | level 3                  | detalle                                                   | string           | Page View |
            | page name                | app:privada:personas:in app:alta de beneficiarios:detalle | string           | Page View |
            | profile ID               | profileID                                                 | regexp named     | Page View |
            | device mobile            | si                                                        | string           | Page View |
            | user userState           | logado                                                    | string           | Page View |
            | user segment global      | 003001                                                    | string           | Page View |
            | internal campaign        |                                                           | empty array      | Page View |
            | optimization attributes  |                                                           | empty array      | Page View |
            | application              |                                                           | empty str object | Page View |
            | products attributes      |                                                           | empty array      | Page View |

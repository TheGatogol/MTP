@securityTipsAnalytics
Feature: Analytics - security tips

    @ANA_ST001
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: ST - App Page Visit
        Given a user with the following criteria
            | criteria      |
            | security tips |
        And the user access the "dashboard" screen
        When the user enters security tips into menu setting
        Then the device contains the following variables:
            | item                    | value                                      | type             |
            | analytics               | analytics/glomo_base                       | json schema      |
            | version DL              | 20250414_5.0                               | string           |
            | page name               | app:privada:personas:consejos de seguridad | string           |
            | level 1                 | consejos de seguridad                      | string           |
            | language                | ES                                         | string           |
            | page area               | privada                                    | string           |
            | page intent             | informacion                                | string           |
            | channel                 | online                                     | string           |
            | page instance ID        | de                                         | string           |
            | page info version       | appVersion                                 | regexp named     |
            | page segment            | personas                                   | string           |
            | sysEnv                  | app                                        | string           |
            | business unit           | BBVA Mexico                                | string           |
            | site app name           | App BBVA Mexico                            | string           |
            | project name            | Glomo                                      | string           |
            | device mobile           | si                                         | string           |
            | user userState          | logado                                     | string           |
            | user segment global     | 003001                                     | string           |
            | user gender             | gender                                     | regexp named     |
            | profile ID              | profileID                                  | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                     | regexp named     |
            | internal campaign       |                                            | empty array      |
            | optimization attributes |                                            | empty array      |
            | application             |                                            | empty str object |
            | products attributes     |                                            | empty array      |

    @ANA_ST002
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: ST - Security Glossary
        Given a user with the following criteria
            | criteria      |
            | security tips |
        And the user access the "dashboard" screen
        When the user enters to glossary the security tips
        Then the device contains the following variables:
            | item                    | value                                               | type             |
            | analytics               | analytics/glomo_base                                | json schema      |
            | version DL              | 20250414_5.0                                        | string           |
            | page name               | app:privada:personas:consejos de seguridad:glosario | string           |
            | level 1                 | consejos de seguridad                               | string           |
            | level 2                 | glosario                                            | string           |
            | language                | ES                                                  | string           |
            | page area               | privada                                             | string           |
            | page intent             | informacion                                         | string           |
            | channel                 | online                                              | string           |
            | page instance ID        | de                                                  | string           |
            | page info version       | appVersion                                          | regexp named     |
            | page segment            | personas                                            | string           |
            | sysEnv                  | app                                                 | string           |
            | business unit           | BBVA Mexico                                         | string           |
            | site app name           | App BBVA Mexico                                     | string           |
            | project name            | Glomo                                               | string           |
            | device mobile           | si                                                  | string           |
            | user userState          | logado                                              | string           |
            | user segment global     | 003001                                              | string           |
            | profile ID              | profileID                                           | regexp named     |
            | user gender             | gender                                              | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                              | regexp named     |
            | internal campaign       |                                                     | empty array      |
            | optimization attributes |                                                     | empty array      |
            | application             |                                                     | empty str object |
            | products attributes     |                                                     | empty array      |

    @ANA_ST003
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: ST - Glossary Search Tips
        Given a user with the following criteria
            | criteria      |
            | security tips |
        And the user access the "dashboard" screen
        And the user enters to glossary the security tips
        When the user does a search in the glossary
        Then the device contains the following variables:
            | item                      | value                                               | type             |
            | analytics                 | analytics/glomo_base                                | json schema      |
            | version DL                | 20250414_5.0                                        | string           |
            | page name                 | app:privada:personas:consejos de seguridad:buscador | string           |
            | level 1                   | consejos de seguridad                               | string           |
            | level 2                   | buscador                                            | string           |
            | language                  | ES                                                  | string           |
            | page area                 | privada                                             | string           |
            | page intent               | informacion                                         | string           |
            | channel                   | online                                              | string           |
            | page instance ID          | de                                                  | string           |
            | page info version         | appVersion                                          | regexp named     |
            | page segment              | personas                                            | string           |
            | sysEnv                    | app                                                 | string           |
            | business unit             | BBVA Mexico                                         | string           |
            | site app name             | App BBVA Mexico                                     | string           |
            | project name              | Glomo                                               | string           |
            | on site search result     | 1                                                   | string           |
            | on site search term       | Código de seguridad                                 | string           |
            | on site search enter term | digo                                                | string           |
            | device mobile             | si                                                  | string           |
            | user userState            | logado                                              | string           |
            | user segment global       | 003001                                              | string           |
            | profile ID                | profileID                                           | regexp named     |
            | user gender               | gender                                              | regexp named     |
            | user country              | lettersAndSpaceOrEmpty                              | regexp named     |
            | internal campaign         |                                                     | empty array      |
            | optimization attributes   |                                                     | empty array      |
            | application               |                                                     | empty str object |
            | products attributes       |                                                     | empty array      |

    @ANA_ST004
    @analytics
    @web
    @web-done
    @backend(test)
    @MX
    @vbank
    Scenario: ST - tip
        Given a user with the following criteria
            | criteria      |
            | security tips |
        And the user access the "dashboard" screen
        And the user enters security tips into menu setting
        When the user accesses the tips of security advice
        Then the device contains the following variables:
            | item                    | value                                                                                                       | type             |
            | version DL              | 20250414_5.0                                                                                                | string           |
            | page name               | app:privada:personas:consejos de seguridad:consejo:3 consejos para identificar un correo falso              | string           |
            | level 1                 | consejos de seguridad                                                                                       | string           |
            | level 2                 | consejo                                                                                                     | string           |
            | level 3                 | 3 consejos para identificar un correo falso                                                                 | string           |
            | language                | ES                                                                                                          | string           |
            | page area               | privada                                                                                                     | string           |
            | page intent             | informacion                                                                                                 | string           |
            | channel                 | online                                                                                                      | string           |
            | page instance ID        | de                                                                                                          | string           |
            | page info version       | appVersion                                                                                                  | regexp named     |
            | page segment            | personas                                                                                                    | string           |
            | sysEnv                  | app                                                                                                         | string           |
            | business unit           | BBVA Mexico                                                                                                 | string           |
            | site app name           | App BBVA Mexico                                                                                             | string           |
            | project name            | Glomo                                                                                                       | string           |
            | device mobile           | si                                                                                                          | string           |
            | user userState          | logado                                                                                                      | string           |
            | user segment global     | 003001                                                                                                      | string           |
            | profile ID              | profileID                                                                                                   | regexp named     |
            | user gender             | gender                                                                                                      | regexp named     |
            | user country            | lettersAndSpaceOrEmpty                                                                                      | regexp named     |
            | internal campaign       |                                                                                                             | empty array      |
            | optimization attributes |                                                                                                             | empty array      |
            | application             |                                                                                                             | empty str object |
            | products attributes     |                                                                                                             | empty array      |

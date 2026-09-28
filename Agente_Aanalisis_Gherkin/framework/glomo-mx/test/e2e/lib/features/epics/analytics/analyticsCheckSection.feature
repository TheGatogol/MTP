@checkSection
Feature: Analytics check Section

    @ANA_CS001 @analyticsCheckSection
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @vbank-modified
    Scenario Outline: Open checks section when in <currency> account and <checks_account> checks
        Given a user with the following criteria
            | criteria                                        |
            | <currency> account with checks <checks_account> |
        When the user accesses to checks operative in account with checks "<checks_account>" and currency "<currency>"
        Then the device contains the following variables
            | item                      | value                                                | type             |
            | analytics                 | analytics/glomo_base                                 | json schema      |
            | version DL                | 20250414_5.0                                         | string           |
            | page name                 | app:privada:personas:cheques:operaciones con cheques | string           |
            | level 1                   | cheques                                              | string           |
            | level 2                   | operaciones con cheques                              | string           |
            | language                  | ES                                                   | string           |
            | page area                 | privada                                              | string           |
            | page intent               | informacion                                          | string           |
            | channel                   | online                                               | string           |
            | page instance ID          | de                                                   | string           |
            | page info version         | appVersion                                           | regexp named     |
            | page segment              | personas                                             | string           |
            | sysEnv                    | app                                                  | string           |
            | business unit             | BBVA Mexico                                          | string           |
            | site app name             | App BBVA Mexico                                      | string           |
            | project name              | Glomo                                                | string           |
            | device mobile             | si                                                   | string           |
            | user userState            | logado                                               | string           |
            | user segment global       | 003001                                               | string           |
            | profile ID                | profileID                                            | regexp named     |
            | user age                  | age                                                       | regexp named     |
            | user gender               | gender                                               | regexp named     |
            | internal campaign         |                                                      | empty array      |
            | optimization attributes   |                                                      | empty array      |
            | application               |                                                      | empty str object |
            | products attributes        |                                                      | empty array      |

        Examples:
            | currency | checks_account |
            | pesos    | allowed        |

    @ANA_CS002
    @analytics
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Service Terms screen appears
        Given a user with the following criteria
            | criteria                          |
            | pesos account with checks allowed |
        And the user accesses to checks operatives with checks management active
        When the user accesses checks deposit option
        Then the device contains the following variables
            | item                      | value                                                | type             |
            | analytics                 | analytics/glomo_base                                 | json schema      |
            | version DL                | 20250414_5.0                                         | string           |
            | page name                 | app:privada:personas:depositar cheque:cobro digital  | string           |
            | level 1                   | depositar cheque                                     | string           |
            | level 2                   | cobro digital                                        | string           |
            | language                  | ES                                                   | string           |
            | page area                 | privada                                              | string           |
            | page intent               | informacion                                          | string           |
            | channel                   | online                                               | string           |
            | page instance ID          | de                                                   | string           |
            | page info version         | appVersion                                           | regexp named     |
            | page segment              | personas                                             | string           |
            | sysEnv                    | app                                                  | string           |
            | business unit             | BBVA Mexico                                          | string           |
            | site app name             | App BBVA Mexico                                      | string           |
            | project name              | Glomo                                                | string           |
            | device mobile             | si                                                   | string           |
            | user userState            | logado                                               | string           |
            | user segment global       | 003001                                               | string           |
            | profile ID                | profileID                                            | regexp named     |
            | user age                  | age                                                  | regexp named     |
            | user gender               | gender                                               | regexp named     |
            | internal campaign         |                                                      | empty array      |
            | optimization attributes   |                                                      | empty array      |
            | application               |                                                      | empty str object |
            | products attributes       |                                                      | empty array      |

@memberGetMemberInviteFriendAnalytics
Feature: Analytics - Member Get Member Invite Friend

    @ANA_EVENT_MGMIF001
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App on Click Start - Member Get Member Invite Friend Page
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the analytics interceptor service is initiated
        When the user accesses to invite friend screen
        Then the analytics events contains the following variables
            | item                | value                                   | type         | event     |
            | analytics           | analytics/glomo_base                    | json schema  | Page View |
            | version DL          | 20250414_5.0                            | string       | Page View |
            | page instance ID    | de                                      | string       | Page View |
            | sysEnv              | app                                     | string       | Page View |
            | page segment        | personas                                | string       | Page View |
            | page intent         | informacion                             | string       | Page View |
            | business unit       | BBVA Mexico                             | string       | Page View |
            | page area           | privada                                 | string       | Page View |
            | language            | ES                                      | string       | Page View |
            | channel             | online                                  | string       | Page View |
            | site app name       | App BBVA Mexico                         | string       | Page View |
            | project name        | Glomo                                   | string       | Page View |
            | level 1             | invitar a un amigo                      | string       | Page View |
            | page name           | app:privada:personas:invitar a un amigo | string       | Page View |
            | device mobile       | si                                      | string       | Page View |
            | device root         |                                         | string       | Page View |
            | user segment global | 003001                                  | string       | Page View |
            | user userState      | logado                                  | string       | Page View |
            | profile ID          | profileID                               | regexp named | Page View |
            | user gender         | gender                                  | regexp named | Page View |
            | user age            | age                                     | regexp named | Page View |
            | platform code       | adobe                                   | string       | Page View |

    @ANA_EVENT_MGMIF002
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App on Click Start - Member Get Member Invite Friend detail page
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        And the analytics interceptor service is initiated
        When the user goes to get invite friend
        Then the analytics events contains the following variables
            | item                | value                                                           | type         | event     |
            | analytics           | analytics/glomo_base                                            | json schema  | Page View |
            | version DL          | 20250414_5.0                                                    | string       | Page View |
            | page instance ID    | de                                                              | string       | Page View |
            | sysEnv              | app                                                             | string       | Page View |
            | page segment        | personas                                                        | string       | Page View |
            | page intent         | informacion                                                     | string       | Page View |
            | business unit       | BBVA Mexico                                                     | string       | Page View |
            | page area           | privada                                                         | string       | Page View |
            | language            | ES                                                              | string       | Page View |
            | channel             | online                                                          | string       | Page View |
            | site app name       | App BBVA Mexico                                                 | string       | Page View |
            | project name        | Glomo                                                           | string       | Page View |
            | level 1             | invitar a un amigo cuentas                                      | string       | Page View |
            | level 2             | libreton basico                                                 | string       | Page View |
            | page name           | app:privada:personas:invitar a un amigo cuentas:libreton basico | string       | Page View |
            | device mobile       | si                                                              | string       | Page View |
            | device root         | no root                                                         | string       | Page View |
            | user segment global | 003001                                                          | string       | Page View |
            | user userState      | logado                                                          | string       | Page View |
            | profile ID          | profileID                                                       | regexp named | Page View |
            | user gender         | gender                                                          | regexp named | Page View |
            | user age            | age                                                             | regexp named | Page View |
            | platform code       | adobe                                                           | string       | Page View |

    @ANA_EVENT_MGMIF003
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App on Click Start - Member Get Member Invite Friend get the debit rewards
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        And the user goes to the rewards from member get member
        And the analytics interceptor service is initiated
        When the user get its rewards from invite friends to sign up for a debit card
        Then the analytics events contains the following variables
            | item                | value                                                      | type         | event     |
            | analytics           | analytics/glomo_base                                       | json schema  | Page View |
            | version DL          | 20250414_5.0                                               | string       | Page View |
            | page instance ID    | de                                                         | string       | Page View |
            | sysEnv              | app                                                        | string       | Page View |
            | page segment        | personas                                                   | string       | Page View |
            | page intent         | informacion                                                | string       | Page View |
            | business unit       | BBVA Mexico                                                | string       | Page View |
            | page area           | privada                                                    | string       | Page View |
            | language            | ES                                                         | string       | Page View |
            | channel             | online                                                     | string       | Page View |
            | site app name       | App BBVA Mexico                                            | string       | Page View |
            | project name        | Glomo                                                      | string       | Page View |
            | level 1             | invitar a un amigo                                         | string       | Page View |
            | level 2             | detalle de premios                                         | string       | Page View |
            | page name           | app:privada:personas:invitar a un amigo:detalle de premios | string       | Page View |
            | device mobile       | si                                                         | string       | Page View |
            | device root         | no root                                                    | string       | Page View |
            | user segment global | 003001                                                     | string       | Page View |
            | user userState      | logado                                                     | string       | Page View |
            | profile ID          | profileID                                                  | regexp named | Page View |
            | user gender         | gender                                                     | regexp named | Page View |
            | user age            | age                                                        | regexp named | Page View |
            | platform code       | adobe                                                      | string       | Page View |

    @ANA_EVENT_MGMIF004
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App on Click Start - Member Get Member Invite Friend history rewards
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        And the user go to the rewards details
        And the analytics interceptor service is initiated
        When the user gets their bonuses history for inviting friends to sign up for a debit card
        Then the analytics events contains the following variables
            | item                | value                                                        | type         | event     |
            | analytics           | analytics/glomo_base                                         | json schema  | Page View |
            | version DL          | 20250414_5.0                                                 | string       | Page View |
            | page instance ID    | de                                                           | string       | Page View |
            | sysEnv              | app                                                          | string       | Page View |
            | page segment        | personas                                                     | string       | Page View |
            | page intent         | informacion                                                  | string       | Page View |
            | business unit       | BBVA Mexico                                                  | string       | Page View |
            | page area           | privada                                                      | string       | Page View |
            | language            | ES                                                           | string       | Page View |
            | channel             | online                                                       | string       | Page View |
            | site app name       | App BBVA Mexico                                              | string       | Page View |
            | project name        | Glomo                                                        | string       | Page View |
            | level 1             | invitar a un amigo                                           | string       | Page View |
            | level 2             | historial de premios                                         | string       | Page View |
            | page name           | app:privada:personas:invitar a un amigo:historial de premios | string       | Page View |
            | device mobile       | si                                                           | string       | Page View |
            | device root         | no root                                                      | string       | Page View |
            | user segment global | 003001                                                       | string       | Page View |
            | user userState      | logado                                                       | string       | Page View |
            | profile ID          | profileID                                                    | regexp named | Page View |
            | user gender         | gender                                                       | regexp named | Page View |
            | user age            | age                                                          | regexp named | Page View |
            | platform code       | adobe                                                        | string       | Page View |

    @ANA_EVENT_MGMIF005
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: App on Click Start - Member Get Member Invite Friend reward debit information
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        And the user go to the history list
        And the analytics interceptor service is initiated
        When the user get the reward debit information
        Then the analytics events contains the following variables
            | item                | value                                                           | type         | event     |
            | analytics           | analytics/glomo_base                                            | json schema  | Page View |
            | version DL          | 20250414_5.0                                                    | string       | Page View |
            | page instance ID    | de                                                              | string       | Page View |
            | sysEnv              | app                                                             | string       | Page View |
            | page segment        | personas                                                        | string       | Page View |
            | page intent         | informacion                                                     | string       | Page View |
            | business unit       | BBVA Mexico                                                     | string       | Page View |
            | page area           | privada                                                         | string       | Page View |
            | language            | ES                                                              | string       | Page View |
            | channel             | online                                                          | string       | Page View |
            | site app name       | App BBVA Mexico                                                 | string       | Page View |
            | project name        | Glomo                                                           | string       | Page View |
            | level 1             | invitar a un amigo                                              | string       | Page View |
            | level 2             | detalle de bonificacion                                         | string       | Page View |
            | page name           | app:privada:personas:invitar a un amigo:detalle de bonificacion | string       | Page View |
            | device mobile       | si                                                              | string       | Page View |
            | device root         | no root                                                         | string       | Page View |
            | user segment global | 003001                                                          | string       | Page View |
            | user userState      | logado                                                          | string       | Page View |
            | profile ID          | profileID                                                       | regexp named | Page View |
            | user gender         | gender                                                          | regexp named | Page View |
            | user age            | age                                                             | regexp named | Page View |
            | platform code       | adobe                                                           | string       | Page View |

    @ANA_EVENT_MGMIF006
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: External Link - Member Get Member Invite Friend share code qr
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        And the user goes to get invite friend
        And the analytics interceptor service is initiated
        When the user shares a QR code to invite a friend to sign up for a debit card
        Then the analytics events contains the following variables
            | item                | value                                                           | type         | event         |
            | analytics           | analytics/glomo_base                                            | json schema  | External Link |
            | version DL          | 20250414_5.0                                                    | string       | External Link |
            | page instance ID    | de                                                              | string       | External Link |
            | sysEnv              | app                                                             | string       | External Link |
            | page segment        | personas                                                        | string       | External Link |
            | page intent         | informacion                                                     | string       | External Link |
            | business unit       | BBVA Mexico                                                     | string       | External Link |
            | page area           | privada                                                         | string       | External Link |
            | language            | ES                                                              | string       | External Link |
            | channel             | online                                                          | string       | External Link |
            | site app name       | App BBVA Mexico                                                 | string       | External Link |
            | project name        | Glomo                                                           | string       | External Link |
            | level 1             | invitar a un amigo cuentas                                      | string       | External Link |
            | level 2             | libreton basico                                                 | string       | External Link |
            | page name           | app:privada:personas:invitar a un amigo cuentas:libreton basico | string       | External Link |
            | device mobile       | si                                                              | string       | External Link |
            | device root         | no root                                                         | string       | External Link |
            | user segment global | 003001                                                          | string       | External Link |
            | user userState      | logado                                                          | string       | External Link |
            | profile ID          | profileID                                                       | regexp named | External Link |
            | user gender         | gender                                                          | regexp named | External Link |
            | user age            | age                                                             | regexp named | External Link |
            | platform code       | adobe                                                           | string       | External Link |

    @ANA_EVENT_MGMIF007
    @analytics
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: External Link - Member Get Member Invite Friend terms and conditions
        Given a user with the following criteria
            | criteria                                   |
            | invite friend                              |
            | has offers and rewards for inviting friend |
        And the user accesses to the sidebard
        And the user accesses to invite friend screen
        And the user goes to get invite friend
        And the analytics interceptor service is initiated
        When the user gets terms and conditions from sign up for a debit card
        Then the analytics events contains the following variables
            | item                | value                                                           | type         | event         |
            | analytics           | analytics/glomo_base                                            | json schema  | External Link |
            | version DL          | 20250414_5.0                                                    | string       | External Link |
            | page instance ID    | de                                                              | string       | External Link |
            | sysEnv              | app                                                             | string       | External Link |
            | page segment        | personas                                                        | string       | External Link |
            | page intent         | informacion                                                     | string       | External Link |
            | business unit       | BBVA Mexico                                                     | string       | External Link |
            | page area           | privada                                                         | string       | External Link |
            | language            | ES                                                              | string       | External Link |
            | channel             | online                                                          | string       | External Link |
            | site app name       | App BBVA Mexico                                                 | string       | External Link |
            | project name        | Glomo                                                           | string       | External Link |
            | level 1             | invitar a un amigo cuentas                                      | string       | External Link |
            | level 2             | libreton basico                                                 | string       | External Link |
            | page name           | app:privada:personas:invitar a un amigo cuentas:libreton basico | string       | External Link |
            | device mobile       | si                                                              | string       | External Link |
            | device root         | no root                                                         | string       | External Link |
            | user segment global | 003001                                                          | string       | External Link |
            | user userState      | logado                                                          | string       | External Link |
            | profile ID          | profileID                                                       | regexp named | External Link |
            | user gender         | gender                                                          | regexp named | External Link |
            | user age            | age                                                             | regexp named | External Link |
            | platform code       | adobe                                                           | string       | External Link |

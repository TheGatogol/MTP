@clarificationTracking
Feature: Clarifications Clarifications Tracking

    @CT001
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Clarifications List in proccess case
        Given a user with the following criteria
            | criteria                               |
            | clarifications management list care    |
            | clarifications management tracking     |
        And the user accesses to dashboard
        When the user accesses to "clarifications" item located in the sidebar
        Then the user sees the following items in the screen
            | item                        |
            | in proccess button          |
            | finish button               |
            | clarifications case         |
            | clarifications amount       |
            | card                        |
            | creation date               |
            | estimate resolution date    |
            | tooltip info                |

    @CT002
    @web @android @ios
    @vbank @backend(test)
    @MX
    @smokeTest
    @web-done
    Scenario: Clarifications List Closed Case
        Given a user with the following criteria
            | criteria                               |
            | clarifications management list care    |
            | clarifications management tracking     |
        And the user accesses to dashboard
        And the user accesses to clarifications list
        When the user select clarification closed
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | in proccess button          |
            | finish button               |
            | clarifications case         |
            | clarifications amount       |
            | card                        |
            | creation date               |
            | resolution date             |
            | tooltip info                |

    @CT003
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Clarifications Tracking In Process Case
        Given a user with the following criteria
            | criteria                               |
            | clarifications management list care    |
            | clarifications management tracking     |
        And the user accesses to dashboard
        And the user accesses to clarifications list
        When the user select to one "en proceso" clarifications
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | folio                       |
            | store name                  |
            | claim amount                |
            | reazon claim                |
            | operation status            |

    @CT004
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Clarifications Tracking Closed Case
        Given a user with the following criteria
            | criteria                               |
            | clarifications management list care    |
            | clarifications management tracking     |
        And the user accesses to dashboard
        And the user accesses to clarifications list
        When the user select to one "terminadas" clarifications
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | folio                             |
            | store name                        |
            | claim amount                      |
            | reazon claim                      |
            | clarification resloution status   |
            | detail status info box            |

    @CT005
    @web @android @ios
    @vbank @backend(test)
    @MX
    @smokeTest
    @web-done
    @backend-smoke
    Scenario: Clarifications List In Progress Without Case
        Given a user with the following criteria
            | criteria                               |
            | without clarifications                 |
        And the user accesses to dashboard
        When the user accesses to clarifications list
        Then the user sees the following items in the screen
            | item                                  |
            | header                                |
            | in proccess button                    |
            | finish button                         |
            | image                                 |
            | clarification without content label   |

    @CT006
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    @backend-smoke
    Scenario: Clarifications List Closed Without Case
        Given a user with the following criteria
            | criteria                               |
            | without clarifications                 |
        And the user accesses to dashboard
        And the user accesses to clarifications list
        When the user select clarification closed
        Then the user sees the following items in the screen
            | item                                  |
            | header                                |
            | in proccess button                    |
            | finish button                         |
            | image                                 |
            | clarification without content label   |

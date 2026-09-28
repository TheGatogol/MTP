@experiences
Feature: Experiences Feature Flags

    @FF_EXP001
    @MX
    @ios @android
    @backend(test)
    @vbank @vbank-modified
    @web @web-done
    @smokeTest
    Scenario Outline: Experiences feature flags: <state>
        Given a user with the following criteria
            | criteria                        |
            | experience section in dashboard |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                 | value   |
            | experiences carousel | <state> |
        Examples:
            | state       |
            | active      |
            | not visible |

    @FF_EXP002
    @MX
    @ios @android
    @backend(test)
    @vbank @vbank-modified
    @web @web-done
    Scenario: Experiences error message
        Given a user with the following criteria
            | criteria                        |
            | experience section in dashboard |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                               |
            | experiences carousel error message |

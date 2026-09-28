@termsAndConditions
Feature: Terms And Conditions

    @TC001
    @MX
    @vbank @backend(test)
    @ios @android
    @native @manual
    @smokeTest @JIRA.GLOMOMX-163235
    Scenario: See terms and conditions of about with login
        Given a user with the following criteria
                | criteria        |
                | active feedback |
        And the user access the "dashboard" screen
        When user accesses terms and conditions of about
        Then the user sees the following items in the screen
                | item       |
                | header     |
                | Content    |

    @TC002
    @MX @vbank @backend(test)
    @ios @android @native @android-done
    Scenario: See terms and conditions of about without login
        Given a user not logged and not cached
        When user accesses terms and conditions of about
        Then the user sees the following items in the screen
                | item       |
                | header     |
                | Content    |

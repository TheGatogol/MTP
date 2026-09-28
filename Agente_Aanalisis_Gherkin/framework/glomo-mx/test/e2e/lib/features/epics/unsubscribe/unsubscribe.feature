@unsubscribe
Feature: Unsubscribe

    @UN001
    @web @ios @android @MX @manual @JIRA.GLOMOMX-254597
    @vbank @backend(test) @web-done
    @smokeTest @backend-smoke
    Scenario: Unsubscribe - The user acceses to unsubscribe page
        Given a user with the following criteria
            | criteria   |
            | unsubscribe|
            | profile    |
        And the user accesses to profile screen
        When the user accesses to unsubscribe
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | back               |
            | image icon         |
            | title              |
            | description        |
            | atm locator link   |
            | phone contact link |

    @UN002 @MX @manual @JIRA.GLOMOMX-254597
    @web @ios @android @backend-smoke
    @vbank @backend(test) @web-done
    Scenario: Unsubscribe - The user acceses click back button
        Given a user with the following criteria
            | criteria    |
            | unsubscribe |
            | profile     |
        And the user accesses to profile screen
        And the user accesses to unsubscribe
        When the user goes back to previous page
        Then the user accesses the "profile" screen

    @UN003
    @ios @android @native
    @MX @backend(test) @manual @JIRA.GLOMOGL-26754
    Scenario: Unsubscribe - Contact us
        Given a user with the following criteria
            | criteria     |
            | unsubscribe  |
        When the user accesses to profile screen
        And the user accesses to unsubscribe
        And the user uses "contact us" option
        Then the native keypad of the phone will open with the number to call

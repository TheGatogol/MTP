@assistance
Feature: Assistance

    @AS001 @!vbank
    @MX @no-data-manager @web-done
    @smokeTest
    @ios @android @web
    @backend-smoke
    Scenario: Screen Validation
        Given the user accesses the Login Screen
        When the user accesses to "Assistance" item located in the sidebar
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | back button |
            | mobile icon |
            | title       |
            | list        |
            | call button |
            | phone list  |

    @AS002 @vbank
    @MX @no-data-manager @manual @JIRA.GLOMOGL-26754
    @ios @android @web
    @alternate-scenarios-smoke
    Scenario: Call Validation
        Given the user accesses the Login Screen
        And the user accesses the assistance screen
        When the user calls to assistance
        Then the native pop up shows with the phone number

    @AS003 @vbank @backend(test)
    @MX @no-data-manager @web-done
    @ios @android @web
    @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Go Back from Assistance Section
        Given the user accesses the Login Screen
        And the user accesses the assistance screen
        When the user goes back to previous page
        Then the user accesses the "Login" screen

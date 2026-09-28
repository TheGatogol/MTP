@aboutInfo
Feature: About

    @ABI001
    @MX
    @ios @android @web
    @vbank @backend(test)
    @smokeTest @web-done
    Scenario: See about without login
        Given a user accesses the application
        When the user accesses to the sidebar
        And the user accesses to "About" item located in the sidebar
        And the user is in About screen and accesses to "About Info"
        Then the user sees the following items in the screen
            | item                   |
            | app version key        |
            | compile version key    |
            | operative system key   |
            | device model key       |
            | mobile services key    |
            | app version value      |
            | compile version value  |
            | operative system value |
            | device model value     |
            | mobile services value  |

    @ABI002
    @MX
    @ios @android @web
    @vbank @backend(test) @web-done
    Scenario: See about with login
        Given a user with the following criteria
            | criteria         |
            | about info login |
        When the user accesses to dashboard
        And the user accesses to the sidebar
        And the user accesses to "About" item located in the sidebar
        And the user is in About screen and accesses to "About Info"
        Then the user sees the following items in the screen
            | item                   |
            | app version key        |
            | compile version key    |
            | operative system key   |
            | device model key       |
            | mobile services key    |
            | app version value      |
            | compile version value  |
            | operative system value |
            | device model value     |
            | mobile services value  |

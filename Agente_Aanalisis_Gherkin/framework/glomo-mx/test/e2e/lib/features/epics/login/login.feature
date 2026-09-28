@login
Feature: Login

    @LOG001
    @ios @android @native
    @MX @backend(test)
    @vbank
    @android-done @ios-done
    @smokeTest
    Scenario: Login screen
        Given a user not logged and not cached
        When the user accesses the Login Screen
        Then the user sees the following items in the screen
            | item                     |
            | Document number input    |
            | Password input           |

    @LOG002
    @ios @android @native
    @MX @backend(test) @vbank
    @android-done @ios-done
    @smokeTest @backend-smoke
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: Access to dashboard
        Given a user with the following criteria
            | criteria |
            | enabled  |
        When the user access the "dashboard" screen
        Then the user sees the following items in the screen
            | item         |
            | products     |
            | cards        |
            | icon Home    |
            | icon Heart   |
            | icon Add     |
            | icon Mail    |
            | icon Contact |

    @LOG003
    @ios @android @native
    @backend(test) @MX @vbank
    @manual @JIRA.GLOMOMX-163235
    Scenario: Login immediately after change user resetting the app
        Given a user with the following criteria
            | criteria |
            | enabled  |
        And the user accesses to dashboard
        And the user resets the app
        When the user does login again
        Then the user is in the dashboard screen

@welcomeExperience
Feature: Welcome Experience

    @WE001
    @backend(test) @vbank @MX
    @ios @android @native
    @smokeTest
    @android-done @ios-done
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: User access app after fresh install
        Given a user with the following criteria
            | criteria           |
            | accounts and cards |
        When the user is in the Welcome Experience screen
        Then the user sees the following items in the screen
            | item                        |
            | animation                   |
            | name                        |
            | welcome experience carousel |
            | accept button               |

    @WE002
    @backend(test) @vbank @MX
    @ios @android @native
    @android-done @ios-done
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: User accesses the Dasboard from WelcomeExperience
        Given a user with the following criteria
            | criteria           |
            | accounts and cards |
        And the user is in the Welcome Experience screen
        When the user accesses to dashboard
        Then the user accesses the "dashboard" screen

    @WE003
    @backend(test) @vbank @MX
    @ios @android @native
    @android-done @ios-done
    @tmpExclude @JIRA.GLOMOMX-180582
    Scenario: User views the next lottie
        Given a user with the following criteria
            | criteria           |
            | accounts and cards |
        And the user is in the Welcome Experience screen
        When the user accesses to the next bullet
        Then the user is in the next slider

    @WE004
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-163235
    Scenario: User does not see welcome Experience at next login
        Given a user with the following criteria
            | criteria                |
            | welcome cached user     |
            | active                  |
        And the user logs in and logs out
        And the user is not logged but cached
        When the user does login again
        Then the user accesses the "dashboard" screen

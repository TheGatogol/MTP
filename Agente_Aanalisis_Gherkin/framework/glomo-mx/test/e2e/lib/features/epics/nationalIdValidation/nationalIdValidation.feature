@nationalIdValidation
Feature: National Id Validation

    @NIV001
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    @smokeTest @backend-smoke
    Scenario: The user sees the recommendations to scan ine
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        When the user accepts recommendations to scan ine
        Then the user sees the following items in the screen
            | item                                  |
            | header recommendations                |
            | id scan illustration                  |
            | recommendations title                 |
            | expiration recommendation             |
            | dark background recommendation        |
            | adjust identification recommendation  |
            | accept recommendations                |

    @NIV002
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario: Exit national id in onboarding screen
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        When the user leaves process in "onboarding" screen
        Then the user accesses the "profile" screen

    @NIV003
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Exit national id in consent step screen
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        When the user leaves process in "consent" screen
        Then the user accesses the "profile" screen

    @NIV004
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Cancel exit process in consent screen
        Given a user with the following criteria
            | criteria               |
            | national id validation |
        And the user accesses to profile screen
        And the user accesses to add "ine identification" screen
        When the user cancels leave operative
        Then the user sees the following items in the screen
            | item                                 |
            | header                               |
            | title capture step                   |
            | description capture step             |
            | ine icon                             |
            | ine title                            |
            | ine status label                     |

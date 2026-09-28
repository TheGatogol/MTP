@softokenEnrollment
Feature: Softoken

    @STK001
    @vbank @MX
    @backend(test)
    @smokeTest @web
    @android @android-done
    Scenario: The user accesses the mobile token success screen
        Given a user with the following criteria
            | criteria      |
            | token user s3 |
        And the user accesses the mobile token activation screen
        When the user activates their mobile token
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | success icon          |
            | success description   |
            | success cross button  |
            | success accept button |

    @STK002
    @vbank @MX
    @backend(test)
    @web
    @vbank-modified
    @android @android-done
    @alternate-scenarios-smoke
    Scenario: The user accesses the mobile token error screen
        Given a user with the following criteria
            | criteria      |
            | token user s3 |
        And the user accesses the mobile token activation screen
        When the user activates their mobile token with an error
        Then the user sees a modal with the following elements:
            | item                |
            | title               |
            | error icon          |
            | error description   |
            | error cross button  |
            | error accept button |

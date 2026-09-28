@homeDashboard
Feature: Home Dashboard

    @PROD001
    @ios @android @smokeTest
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate products in the products section
        Given a user with the following criteria
            | criteria                  |
            | futura main card account  |
        And the user accesses to dashboard
        When the user show products futura
        Then the user sees the following items in the screen
            | item                                |
            | blue flag disabled                  |
            | help button futura                  |
            | featured button                     |
            | my products button                  |
            | title product account               |
            | alias product account               |
            | account product account             |
            | amount product account              |
            | title product card                  |
            | alias product card                  |
            | account product card                |
            | amount product card                 |
            | title product loan                  |
            | alias product loan                  |
            | account product loan                |
            | amount product loan                 |
            | title product investment            |
            | alias product investment            |
            | account product investment          |
            | amount product investment           |

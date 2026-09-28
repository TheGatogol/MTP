@profileKycHighRisk
Feature: Profile KYC High Risk

    @IHCQ001
    @MX
    @web @vbank
    @web-done
    @ios @android
    @backend(test)
    @backend-smoke
    @smokeTest
    Scenario Outline: Add information about financial relationships with <user_status>
        Given a user with the following criteria
            | criteria                          |
            | profile kyc high risk             |
            | profile relationship financials   |
            | <user_status>                     |
        And the user accesses to profile screen
        When the user taps on "add kyc validation high risk" profile button
        Then the user accesses the "kyc validation high risk" screen
        Examples:
            | user_status             |
            | status incomplete       |
            | status pending          |

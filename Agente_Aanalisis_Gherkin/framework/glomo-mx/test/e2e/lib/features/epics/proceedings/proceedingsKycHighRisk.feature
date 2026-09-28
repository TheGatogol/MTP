@proceedingsKycHighRisk
Feature: Proceedings Kyc High Risk Validation

    @KHP001
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @smokeTest
    Scenario: KYC Validation - High Risk Proceedings
        Given a user with the following criteria
            | criteria                  |
            | proceedings kyc high risk |
        And the user accesses to profile screen
        And the user taps on "add kyc validation high risk" profile button
        And the user goes to the "use of account" step
        When the user selects other main source of income
        Then the user sees the following items in the screen
            | item                                 |
            | personal information title           |
            | personal information step container  |
            | personal information question one    |
            | personal information question two    |
            | personal information continue button |

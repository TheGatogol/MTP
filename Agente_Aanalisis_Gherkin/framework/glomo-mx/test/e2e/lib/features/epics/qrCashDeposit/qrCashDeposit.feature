@qrCashDeposit
Feature: QR Cash Deposit in ATM

    @DOG002
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @smokeTest
    Scenario: View the account data screen
        Given a user with the following criteria
            | criteria        |
            | account balance |
        And the user accesses to the operative account product detail
        When the user accesses to view account data
        Then the user sees the following items in the screen
            | item               |
            | share icon         |
            | general title      |
            | product name       |
            | account content    |
            | clabe content      |
            | qr deposit label   |
            | qr deposit content |
            | qr deposit icon    |
            | swift content      |
            | phone content      |
            | titular content    |

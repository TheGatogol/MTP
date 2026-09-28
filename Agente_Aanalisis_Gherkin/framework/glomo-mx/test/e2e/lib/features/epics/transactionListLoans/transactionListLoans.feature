@transactionListLoans
Feature: Transaction List Loans

    @TLL001
    @MX @backend(test)
    @web @ios @android @vbank @smokeTest @web-done
    Scenario: Transaction List Loans - Link "See All"
        Given a user with the following criteria
            | criteria               |
            | loan with transactions |
        And the user access an account with "loan" transactions
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | transaction description |
            | transaction import      |
            | operation date          |
            | transaction info        |

    @TLL002
    @MX @backend(test)
    @web @ios @android @vbank @alternate-scenarios-smoke @web-done
    Scenario: Transaction List Loans - Without Movements
        Given a user with the following criteria
            | criteria               |
            | loan with transactions |
        When the user access an account with "none" transactions
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | back button       |
            | balance label     |
            | account           |
            | amount            |
            | icon no movements |
            | text no movements |

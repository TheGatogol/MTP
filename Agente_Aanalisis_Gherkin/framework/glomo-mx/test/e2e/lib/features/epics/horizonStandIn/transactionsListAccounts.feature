@transactionsListAccounts
Feature: Transactions List Accounts

    @TLA002
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done @smokeTest
    Scenario: Horizon movement information
        Given a user with the following criteria
            | criteria                 |
            | common account movements |
        And the user accesses to the operative account product detail
        And the user accesses to all his account movements
        When the user opens the all movements informative modal
        Then the user sees the following items in the screen
            | item               |
            | info text          |
            | info accept button |
            | info message icon  |

    @TLA003
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Horizon no movements
        Given a user with the following criteria
            | criteria               |
            | common account horizon |
        When the user accesses to the operative account product detail
        Then the user sees the following items in the screen
            | item                   |
            | transfer operative     |
            | bill payment operative |
            | pay card operative     |
            | view more icon         |
            | text no movements      |

@depositSale
Feature: Deposit Sale

    @DS001
    @web
    @vbank
    @MX @backend(test)
    @android
    @web-done
    @smokeTest
    Scenario: Deposit Sale happy path
        Given a user with the following criteria
            | criteria     |
            | deposit sale |
        And the user accesses to dashboard
        And the user select deposit "0002IN8355"
        And the user select deposit detail
        And the user select deposit sale
        And the user select continue sale
        When the user accesses deposit sale review
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | contract        |
            | button exit     |
            | deposit account |

@pfm @dashboardHome
Feature: Expense Control and Savings Tools

    @HGA001
    @ios @android @web
    @MX
    @backend(test) @vbank
    @web-done
    @smokeTest
    Scenario: Validate financial health section
        Given a user with the following criteria
            | criteria      |
            | pfm home user |
        And the user accesses to dashboard
        When the user goes to financial health widget
        Then the user sees the following items in the screen
            | item                                |
            | financial health widget link        |
            | financial health widget expenses    |
            | financial health widget incomes     |
            | financial health widget investments |

    @HGA002
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario: Validate the financial health arrow button
        Given a user with the following criteria
            | criteria      |
            | pfm home user |
        When the user accesses dashboard detail PFM "widget"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | header back           |
            | expenses tab title    |
            | income tab title      |
            | investments tab title |
            | save tab title        |

    @HGA003
    @ios @android @web
    @MX
    @backend(test) @vbank @spherica
    @web-done
    Scenario Outline: Validate the financial health <access> button
        Given a user with the following criteria
            | criteria      |
            | pfm home user |
        And the user accesses to dashboard
        When the user accesses to PFM categorization from "<access>"
        Then the user accesses the "pfm categorization" screen

        Examples:
            | access             |
            | home link expenses |
            | home link incomes  |

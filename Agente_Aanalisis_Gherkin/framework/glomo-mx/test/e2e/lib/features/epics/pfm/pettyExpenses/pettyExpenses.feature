@pfm @pettyExpenses
Feature: PFM Petty Expenses

    @PPE001
    @MX
    @backend(test) @vbank
    @web @ios @android
    @web-done
    Scenario: PFM Petty Expenses - Validate petty expenses access card
        Given a user with the following criteria
            | criteria                   |
            | pfm spherica user expenses |
        When the user accesses dashboard detail PFM "footer"
        Then the user sees the following items in the screen
            | item                       |
            | petty expenses card        |
            | petty expenses title       |
            | petty expenses icon        |
            | petty expenses description |
            | petty expenses badge text  |

    @PPE002
    @MX
    @backend(test) @vbank
    @web @ios @android
    @web-done
    Scenario: PFM Petty Expenses - No Petty Expenses
        Given a user with the following criteria
            | criteria                   |
            | pfm spherica user expenses |
        And the user accesses dashboard detail PFM "footer"
        When the user accesses to petty expenses
        Then the user sees the following items in the screen
            | item                                         |
            | petty expenses description                   |
            | petty expenses amount description            |
            | petty expenses empty state microillustration |
            | petty expenses empty state text              |
    @PPE003
    @MX
    @backend(test) @vbank
    @web @ios @android
    @web-done
    Scenario: PFM Petty Expenses - Back to PFM Dashboard Detail
        Given a user with the following criteria
            | criteria                   |
            | pfm spherica user expenses |
        And the user accesses dashboard detail PFM "footer"
        And the user accesses to petty expenses
        When the user goes back to previous page
        Then the user accesses the "pfm dashboard detail" screen

    @PPE004
    @MX
    @backend(test) @vbank
    @web @ios @android
    @web-done
    @smokeTest
    Scenario: PFM Petty Expenses - With Petty Expenses
        Given a user with the following criteria
            | criteria                   |
            | pfm spherica user expenses |
        And the user accesses dashboard detail PFM "footer"
        When the user accesses to petty expenses
        Then the user sees the following items in the screen
            | item                              |
            | petty expenses description        |
            | petty expenses amount description |
            | petty expenses title movements    |
            | petty expenses date               |
            | petty expenses list movement      |

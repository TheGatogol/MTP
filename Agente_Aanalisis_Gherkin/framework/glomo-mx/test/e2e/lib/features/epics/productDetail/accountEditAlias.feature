@accountEditAlias
Feature: Edit Alias Account

    @BEA001
    @android @ios
    @MX
    @vbank
    @web @web-done
    @backend(test)
    @backend-smoke
    Scenario: Happy Path
        Given a user with the following criteria
            | criteria                |
            | edit alias with account |
        When the user accesses to the operative account product detail
        And the user accesses the edit alias account
        And the user updates the alias with the new alias "new alias"
        And the user return to product detail account
        Then the user sees correctly updated "new alias" alias account

    @BEA002
    @android @ios
    @web @web-done
    @vbank @MX
    @backend(test)
    @backend-smoke
    Scenario: Abort edit alias
        Given a user with the following criteria
            | criteria                |
            | edit alias with account |
        When the user accesses to the operative account product detail
        And the user accesses the edit alias account
        And the user goes back to previous page
        Then the user accesses the "Balloon Account Detail" screen

    @BEA003
    @android @ios
    @web @web-done
    @vbank @MX
    @backend(test)
    @backend-smoke
    Scenario: Back edit alias
        Given a user with the following criteria
            | criteria                |
            | edit alias account      |
        When the user accesses to the operative account product detail
        And the user accesses the edit alias account
        And The user modifies the alias to "account" and cancels the alias editing
        Then the user sees the following items in the screen
            | item             |
            | accept btn modal |
            | cancel btn modal |

    @BEA004
    @web @web-done
    @MX @vbank
    @backend(test)
    @android @ios
    @backend-smoke
    Scenario: Invalid entry
        Given a user with the following criteria
            | criteria                |
            | edit alias account      |
        When the user accesses to the operative account product detail
        And the user accesses the edit alias account
        And the user updates the alias with the new alias "user test"
        And the user "cleans" the new alias
        Then the user sees the following items in the screen
            | item                 |
            | save button disabled |

    @BEA005
    @web @web-done
    @MX @vbank
    @backend(test)
    @android @ios
    @smokeTest
    Scenario: Error modifying alias
        Given a user with the following criteria
            | criteria                |
            | edit alias account      |
        When the user accesses to the operative account product detail
        And the user accesses the edit alias account
        And The user modifies the alias to "account" and cancels the alias editing
        Then the user sees the following items in the screen
            | item             |
            | accept btn modal |
            | cancel btn modal |

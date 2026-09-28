@btrader @btraderEditAlias
Feature: Btrader Edit Alias
    @TEA001
    @smokeTest
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Edit a contract alias
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader "edit alias"
        When the user try updates the current alias with the new alias "Alias uno"
        Then the user sees the following items in the screen
            | item         |
            | input field  |
            | save alias   |

    @TEA002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Edit the alias of a previously updated contract and cancel
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader "edit alias"
        When the user try updates the current alias with the new alias "Alias dos"
        And the user cancel the edit alias and back to the previous page
        And the user cancels return
        Then the user sees the following items in the screen
            | item          |
            | input field   |
            | save alias    |

    @TEA003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Back edit alias and accept
        Given a user with the following criteria
            | criteria  |
            | btrader4  |
        And the user accesses to btrader "edit alias"
        When the user cancel the edit alias and back to the previous page
        And the user returns to product detail
        Then the user sees the following items in the screen
            | item               |
            | alias              |
            | contract number    |
            | performance        |
            | operatives btrader |
            | button buy         |
            | button orders      |
            | button transfer    |
            | button edit alias  |

    @TEA004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Edit a contract alias with a long name
        Given a user with the following criteria
            | criteria  |
            | btrader4  |
        And the user accesses to btrader "edit alias"
        When the user try updates the current alias with the new alias "Electroencefalografista"
        Then the user sees the following items in the screen
            | item         |
            | input field  |
            | save alias   |

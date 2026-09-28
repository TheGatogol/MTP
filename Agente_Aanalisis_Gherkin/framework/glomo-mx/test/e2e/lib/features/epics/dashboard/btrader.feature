@dashboardBtrader
Feature: Dashboard Btrader
    @TDA001
    @smokeTest
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Only one product in btrader module
        Given a user with the following criteria
            | criteria |
            | btrader  |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item           |
            | dashboard body |
            | btrader        |

    @TDA002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Only two products in btrader module
        Given a user with the following criteria
            | criteria |
            | btrader2 |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                 |
            | dashboard body       |
            | btrader              |
            | btrader container    |
            | btrader contract one |
            | btrader contract two |

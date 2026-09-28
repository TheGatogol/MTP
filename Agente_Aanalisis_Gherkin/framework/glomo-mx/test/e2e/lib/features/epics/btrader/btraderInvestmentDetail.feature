@btrader @btraderInvestmentDetail
Feature: Btrader Investment Detail
    @TID001
    @MX
    @backend(test)
    @smokeTest
    @vbank @web-done
    @web @android @ios
    Scenario: The user search a issuer stock and see the investment detail
        Given a user with the following criteria
            | criteria   |
            | btrader    |
        And the user accesses to btrader
        When user searches for "APPLE" stock "and selects it"
        Then the user sees the following items in the screen
            | item                                    |
            | investment detail header title          |
            | investment detail buy titles operative  |
            | investment detail sell titles operative |
            | investment detail market positions      |

    @TID002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user cannot buy titles from the issuer
        Given a user with the following criteria
            | criteria   |
            | btrader    |
        And the user accesses to btrader
        When the user opens the "investment" detail
        And the user opens the balance information to investment
        Then the user sees the following items in the screen
            | item                                                  |
            | investment detail header title                        |
            | investment detail buy titles operative                |
            | investment detail sell titles operative               |
            | investment detail market positions                    |
            | investment detail balance to investment tooltip       |
            | investment detail balance to investment modal title   |
            | investment detail balance to investment modal close   |
            | investment detail balance to investment modal text    |
            | investment detail balance to investment modal bullets |

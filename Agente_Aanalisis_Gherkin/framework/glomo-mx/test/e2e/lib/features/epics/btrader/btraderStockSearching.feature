@btrader @btraderStockSearching
Feature: Btrader Stock Searching
    @SSE001
    @smokeTest
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user search a issuer stock and see the investment detail
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When user searches for "APPLE" stock "and selects it"
        Then the user sees the following items in the screen
            | item              |
            | investment detail |

    @SSE002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user search a issuer stock and then exit to searching issuer stock
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When user searches for "APPLE" stock "and exit to searching"
        Then the user sees the following items in the screen
            | item                  |
            | header product detail |

    @SSE003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user search a issuer stock whitout result
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When user searches for "binbo" stock "whitout result"
        Then the user sees the following items in the screen
            | item                             |
            | stock search header title        |
            | stock search header close        |
            | stock search input               |
            | stock search text without result |
            | stock search text retry          |

    @SSE004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios @spherica
    Scenario: Validate error when searching for a issuer
        Given a user with the following criteria
            | criteria |
            | btrader |
        And the user accesses to btrader
        When user searches for "APPLE" stock "not available"
        Then the user sees the following items in the screen
            | item                      |
            | stock search header close |
            | stock search error        |

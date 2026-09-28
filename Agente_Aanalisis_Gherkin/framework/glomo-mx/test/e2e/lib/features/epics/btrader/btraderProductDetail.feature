@btrader @btraderProductDetail
Feature: Btrader Product Detail
    @TPD001
    @smokeTest
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario Outline: The value performance should be <value>
        Given a user with the following criteria
            | criteria |
            | btrader  |
        When the user accesses to btrader
        Then the user sees the following items in the screen
            | item               | value      |
            | alias              |            |
            | contract number    |            |
            | performance        | <value>    |
            | operatives btrader |            |
            | button buy         |            |
            | button orders      |            |
            | button transfer    |            |
            | button edit alias  |            |
        Examples:
            | value    |
            | positive |
            | negative |

    @TPD002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Access balance information
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" the balance information to invest
        Then the user sees the following items in the screen
            | item                         |
            | alias                        |
            | contract number              |
            | performance                  |
            | operatives btrader           |
            | button buy                   |
            | button orders                |
            | button transfer              |
            | button edit alias            |
            | link information invest      |
            | title information modal      |
            | exit information modal       |
            | title body information modal |
            | bullet one information modal |

    @TPD003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Exit balance information
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "exit" the balance information to invest
        Then the user sees the following items in the screen
            | item                    |
            | alias                   |
            | contract number         |
            | performance             |
            | link information invest |
            | operatives btrader      |
            | button buy              |
            | button orders           |
            | button transfer         |
            | button edit alias       |

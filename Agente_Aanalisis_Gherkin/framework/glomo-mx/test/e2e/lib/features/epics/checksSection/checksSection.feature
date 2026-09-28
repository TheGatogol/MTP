@checksSection @checks
Feature: Checks Section

    @CS001
    @smokeTest
    @backend-smoke
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario Outline: Open checks section when in <currency> account and <checks_account> checks
        Given a user with the following criteria
            | criteria                                        |
            | <currency> account with checks <checks_account> |
        When the user accesses to checks operative in account with checks "<checks_account>" and currency "<currency>"
        Then the user sees the following items in the screen
            | item                         | value     |
            | Title                        |           |
            | Back button                  |           |
            | Main Text Deposit            | <tx_dep>  |
            | Short Description Deposit    | <des_dep> |
            | Main Text Management         | <tx_man>  |
            | Short Description Management | <des_man> |

        Examples:
            | currency | checks_account | tx_dep      | des_dep     | tx_man      | des_man     |
            | pesos    | allowed        |             |             |             |             |
            | pesos    | not allowed    |             |             |             |             |
            | usd      | allowed        | not visible | not visible |             |             |

    @CS002
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Goes back in checks section
        Given a user with the following criteria
            | criteria                          |
            | pesos account with checks allowed |
        When the user accesses to checks operatives with checks management active
        And the user goes back to previous page
        Then the user accesses the "Product Detail Account" screen

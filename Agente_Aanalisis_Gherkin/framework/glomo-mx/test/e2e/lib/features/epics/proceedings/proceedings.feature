@proceedings
Feature: Proceedings

    @PHY001
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @backend-smoke
    Scenario: Information update from the payroll processing operation
        Given a user with the following criteria
            | criteria             |
            | n2 account           |
            | account with payroll |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        When the user taps on the "identity validation" option in proceedings
        Then the user accesses the "video selfie" screen

    @PHY002
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test) @smokeTest
    @backend-smoke
    Scenario: Exit the process when it starts in the operations option
        Given a user with the following criteria
            | criteria                  |
            | proceedings upgrade n2 n4 |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the user taps on the "confirm information validation" option in proceedings
        When the user "exits" from proceedings
        Then the user accesses the "product detail account" screen

    @PHY003
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Continue with the process
        Given a user with the following criteria
            | criteria               |
            | payroll portability n2 |
        And the user accesses to payroll "account" screen
        And the user accesses to proceedings from "payroll"
        And the user taps on the "confirm information validation" option in proceedings
        When the user "continue" from proceedings
        Then the user sees the following items in the screen
            | item                |
            | title modal         |
            | identity validation |
            | kyc validation      |
            | confirm information |

    @PHY004
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @backend-smoke
    Scenario: Update of information from the Expand Account operation
        Given a user with the following criteria
            | criteria                     |
            | proceedings upgrade n2 n4 s2 |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        When the user taps on the "confirm information client" option in proceedings
        Then the user sees the following items in the screen
            | item                  |
            | title modal           |
            | identity validation   |
            | kyc validation        |
            | confirm information   |
            | confirm level upgrade |

    @PHY005
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Update information from the operational Update now
        Given a user with the following criteria
            | criteria                        |
            | n2 account                      |
            | monthly transfers limit reached |
        And the user accesses to the first account product detail
        When the user accesses to proceedings from "warning banner"
        Then the user sees the following items in the screen
            | item                |
            | title modal         |
            | identity validation |
            | kyc validation      |
            | confirm information |

    @PHY006
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Update information from the Expand account operation with a Nominated N2 client
        Given a user with the following criteria
            | criteria             |
            | n2 account           |
            | account with payroll |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        When the user taps on the "identity validation" option in proceedings
        Then the user accesses the "video selfie" screen

    @PHY007
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @backend-smoke
    Scenario: Update information from the Expand account operation with an unnominated N2 Proactive client
        Given a user with the following criteria
            | criteria                  |
            | proceedings upgrade n2 n4 |
        And the user accesses to the first account product detail
        When the user accesses to proceedings from "upgrade account"
        Then the user sees the following items in the screen
            | item                |
            | title modal         |
            | identity validation |
            | kyc validation      |
            | confirm information |

    @PHY008
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario Outline: Updating information with <User> from the Expand Account operation
        Given a user with the following criteria
            | criteria   |
            | n2 account |
            | <User>     |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        When the user taps on the "identity validation" option in proceedings
        Then the user accesses the "video selfie" screen

        Examples:
            | User                    |
            | account with payroll    |
            | account without payroll |

    @PHY009
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Exit the process when starting from the settings option
        Given a user with the following criteria
            | criteria                                  |
            | account that should upgrade from n2 to n4 |
        And the user accesses to the first account product detail
        And the user accesses to proceedings from "upgrade account"
        And the user taps on the "confirm information validation" option in proceedings
        When the user "exits" from proceedings
        Then the user accesses the "product detail account" screen

    @PHY010
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario: Error when entering the process from the operations option
        Given a user with the following criteria
            | criteria               |
            | payroll portability n2 |
        And the user accesses to payroll "account" screen
        When the user accesses to proceedings from "payroll"
        Then the user sees the following items in the screen
            | item              |
            | title error       |
            | description error |

    @PHY011
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    Scenario:Information update from operations, update now with an N4 client alerted, not nominated
        Given a user with the following criteria
            | criteria                        |
            | n2 account                      |
            | monthly transfers limit reached |
        And the user accesses to the first account product detail
        When the user accesses to proceedings from "warning banner"
        Then the user sees the following items in the screen
            | item                |
            | title modal         |
            | identity validation |
            | kyc validation      |
            | confirm information |

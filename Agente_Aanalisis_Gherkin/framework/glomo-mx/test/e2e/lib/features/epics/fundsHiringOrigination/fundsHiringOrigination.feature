@fundHiringOrigination
Feature: Funds Hiring Origination

    @SAC001
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario Outline: Happy path one account <time> and <liquidity> liquidity
        Given a user with the following criteria
            | criteria                 |
            | funds hiring origination |
        And the user starts the application at date:
            | hour | <hours> |
        And the user accesses to fund hiring origination from opportunities
        When the user completes the fund hiring until "confirm" selecting fund "<fundName>"
        Then the user sees the following items in the screen
            | item                  |
            | button view documents |
            | button share receipt  |
            | header text           |
            | header button         |
            | title recipt          |
            | description recipt    |

        Examples:
            | time            | liquidity | hours | fundName |
            | on time         | daily     | 12    | BBVAGB2  |
            | outside of time | daily     | 23    | BBVAGB2  |
            | on pending time | variable  | 12    | BBVA     |

    @SAC002
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Happy path more than one account outside of business hours daily liquidity
        Given a user with the following criteria
            | criteria                                |
            | funds hiring origination multi accounts |
        And the user starts the application at date:
            | hour | 12 |
        And the user accesses to fund hiring origination from opportunities
        When the user completes the fund hiring until "confirm" selecting fund "BBVA"
        Then the user sees the following items in the screen
            | item                   |
            | button view documents  |
            | button share receipt   |
            | header text            |
            | header button          |
            | title recipt           |

    @SAC003
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @smokeTest
    Scenario: Long term filters and all
        Given a user with the following criteria
            | criteria                 |
            | funds hiring origination |
        And the user accesses to fund hiring origination from opportunities
        And the user completes the fund hiring until "offer" selecting fund "BBVA"
        And the user selects liquidity in "long" place
        When the user selects liquidity in "all" place
        Then the user sees the following items in the screen
            | item                    |
            | header list funds       |
            | button close list funds |
            | header step list funds  |
            | filter buttons          |
            | sort by                 |
            | list funds              |

    @SAC004
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Tooltip "performance" of detail fund
        Given a user with the following criteria
            | criteria                 |
            | funds hiring origination |
        And the user accesses to fund hiring origination from opportunities
        And the user completes the fund hiring until "detail" selecting fund "BBVA"
        And the user taps on the "performance" link
        When the user close tooltip funds hiring origination
        Then the user sees the following items in the screen
            | item                         |
            | header detail fund           |
            | button close detail fund     |
            | secondary header detail fund |
            | price fund detail            |
            | risk fund detail             |
            | availability fund detail     |
            | liquidity fund detail        |
            | serie fund detail            |
            | type fund detail             |
            | button footer detail         |
            | performance fund detail      |

    @SAC005
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: User change the fund
        Given a user with the following criteria
            | criteria                 |
            | funds hiring origination |
        And the user accesses to fund hiring origination from opportunities
        And the user completes the fund hiring until "terms" selecting fund "BBVAGOB"
        And the user modifies the fund hiring "fund" step
        When the user selects fund "BBVAGOB"
        Then the user sees the following items in the screen
            | item                                    |
            | header list funds                       |
            | close modal button                      |
            | modify button step fund                 |
            | modify button step amount               |
            | modify button step name                 |
            | modify button step terms and conditions |

    @SAC006
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: User change the account
        Given a user with the following criteria
            | criteria                                |
            | funds hiring origination multi accounts |
        And the user accesses to fund hiring origination from opportunities
        And the user completes the fund hiring until "terms" selecting fund "BBVAGOB"
        When the user modifies the fund hiring "account" step
        Then the user sees the following items in the screen
            | item                                    |
            | header list funds                       |
            | close modal button                      |
            | modify button step fund                 |
            | modify button step amount               |
            | modify button step name                 |
            | modify button step terms and conditions |
            | button confirm steps                    |

    @SAC007
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: User change the amount
        Given a user with the following criteria
            | criteria                 |
            | funds hiring origination |
        And the user accesses to fund hiring origination from opportunities
        And the user completes the fund hiring until "terms" selecting fund "BBVAGOB"
        When the user modifies the fund hiring "amount" step
        Then the user sees the following items in the screen
            | item                                    |
            | header list funds                       |
            | close modal button                      |
            | modify button step fund                 |
            | modify button step amount               |
            | modify button step name                 |
            | modify button step terms and conditions |
            | button confirm steps                    |

    @SAC008
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: User consults the terms and conditions again
        Given a user with the following criteria
            | criteria                 |
            | funds hiring origination |
        And the user accesses to fund hiring origination from opportunities
        When the user completes the fund hiring until "terms" selecting fund "BBVAGOB"
        Then the user sees the following items in the screen
            | item                                 |
            | header step terms and conditions     |
            | button continue terms and conditions |
            | check terms and conditions           |
            | summary name found                   |

    @SAC009
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: User doesnt have an N4 account
        Given a user with the following criteria
            | criteria                 |
            | funds hiring origination |
        And the user accesses to fund hiring origination from opportunities
        When the user completes the fund hiring until "onboarding" selecting fund "BBVAGOB"
        Then the user sees the following items in the screen
            | item               |
            | exit modal warning |
            | link button        |
            | content modal      |
            | header modal       |

    @SAC010
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario Outline: "<Case>"
        Given a user with the following criteria
            | criteria                 |
            | funds hiring origination |
        And the user accesses to fund hiring origination from opportunities
        And the user completes the fund hiring until "onboarding" selecting fund "BBVA"
        When the user taps on fund "BBVA" information link in the error message
        Then the user sees the following items in the screen
            | item                    |
            | header list funds       |
            | button close list funds |
            | header step list funds  |
            | sort by                 |
            | list funds              |

        Examples:
            | Case                                                        |
            | The user wants to go to the offer                           |
            | View funding information if you do not have N4 account      |
            | View funds information when there are errors in the account |

    @SAC011
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate help button
        Given a user with the following criteria
            | criteria                     |
            | funds hiring origination cmb |
        And the user accesses to fund hiring origination from opportunities
        When the user completes the fund hiring until "onboarding" selecting fund "BBVAGOB"
        Then the user sees the following items in the screen
            | item             |
            | btn call me back |

    @SAC012
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario Outline: Error entering an amount <count> than the <valor> amount
        Given a user with the following criteria
            | criteria                 |
            | funds hiring origination |
        And the user accesses to fund hiring origination from opportunities
        And the user completes the fund hiring until "select" selecting fund "BBVAGOB"
        When the user enters amount "<amount>"
        Then the user sees the following items in the screen:
            | item                     |
            | label amount step        |
            | input amount field       |
            | disabled continue amount |

        Examples:
            | count   | valor     | amount     |
            | less    | minimum   | 30         |
            | greater | available | 9999999999 |

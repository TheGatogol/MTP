@accountProductDetail @productDetail
Feature: Product Detail - Accounts

    @PDA001
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @performance @vbank-modified
    @backend-smoke
    Scenario Outline: Accounts Detail - With subProduct type <subProductType>, <currency> account and <checks_account> checks
        Given a user with the following criteria
            | criteria                                        |
            | <currency> account with checks <checks_account> |
        And the user accesses the Login Screen
        And the user starts the performance test
        When the user accesses to the account product detail with subProduct type "<subProductType>", checks "<checks_account>" and currency "<currency>"
        Then the user sees the following items in the screen
            | item             | value      |
            | header           |            |
            | back button      |            |
            | account          |            |
            | amount           |            |
            | currency         |            |
            | balance label    |            |
            | checks operative | <checks>   |

        Examples:
            | subProductType | currency | checks_account | checks      |
            | valid          | pesos    | allowed        | not visible |
            | valid          | pesos    | not allowed    | not visible |
            | valid          | usd      | allowed        | not visible |
            | valid          | usd      | not allowed    | not visible |
            | valid          | eur      | allowed        | not visible |
            | invalid        | pesos    | not allowed    | not visible |

    @PDA002
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @performance @vbank-modified
    @backend-smoke
    Scenario Outline: Accounts Detail -  <currency> account and <checks_account> checks and protection is <active_protection>
        Given a user with the following criteria
            | criteria                                        |
            | <currency> account with checks <checks_account> |
        And the user accesses the Login Screen
        When the user accesses to the account product detail with subProduct type "valid", checks "<checks_account>" and currency "<currency>"
        Then the user sees the following items in the screen
            | item             | value      |
            | header           |            |
            | back button      |            |
            | account          |            |
            | amount           |            |
            | currency         |            |
            | balance label    |            |
            | checks operative | <checks>   |

        Examples:
            | currency | checks_account | checks      | active_protection |
            | pesos    | allowed        | not visible | not active        |
            | pesos    | allowed        | not visible | active            |
            | pesos    | not allowed    | not visible | not active        |
            | usd      | allowed        | not visible | not active        |
            | usd      | not allowed    | not visible | not active        |
            | eur      | allowed        | not visible | not active        |

    @PDA003
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: Accounts Detail - View message of boost interbank transfers
        Given a user with the following criteria
            | criteria                  |
            | inactive financial health |
            | usd account own transfers |
            | account in pesos          |
        And the user accesses the Login Screen
        When the user accesses to the first account product detail
        Then the user sees the following items in the screen
            | item                |
            | message transfers   |
            | link transfers      |

    @PDA004
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: Accounts Detail - Addresing message of boost interbank transfers
        Given a user with the following criteria
            | criteria                  |
            | inactive financial health |
            | usd account own transfers |
            | account in pesos          |
        And the user accesses the Login Screen
        When the user accesses to the first account product detail
        And the user accesses on message interbank transfers
        Then the user sees the following items in the screen
            | item                                  |
            | header page                           |
            | movements sent button                 |
            | movements received button             |
            | make an international transfer button |

    @PDA005
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: Accounts Detail - View message of currency cv
        Given a user with the following criteria
            | criteria                     |
            | account good balance dollars |
        When the user accesses to the operative account product detail
        Then the user sees the following items in the screen
            | item                     |
            | message foreign currency |
            | link transfers           |

    @PDA006
    @smokeTest
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    @backend-smoke
    Scenario: Accounts Detail - Addresing message of currency cv
        Given a user with the following criteria
            | criteria                     |
            | account good balance dollars |
        When the user accesses to the operative account product detail
        And the user accesses on message cv currency
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | header Exit Button |
            | origin header      |
            | origin product     |

    @PDA007
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: status "In process" payroll change
        Given a user with the following criteria
            | criteria               |
            | account payroll change |
        When the user accesses to the operative account product detail
        And the user accesses to view account data
        Then the user sees the following items in the screen
            | item           |
            | header detail  |
            | product name   |
            | payroll change |

    @PDA008
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Payroll change account and return
        Given a user with the following criteria
            | criteria               |
            | account payroll change |
        And the user accesses to the operative account product detail
        When the user accesses to view account data
        And the user closes the modal account data
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | account           |
            | operations module |

    @PDA009
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Summary of an account with a balance except good collection
        Given a user with the following criteria
            | criteria                     |
            | account good balance dollars |
        When the user accesses to the operative account product detail
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | back button          |
            | good balance         |
            | message good balance |
            | see account          |

    @PDA010
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: help button "Balance except good collection"
        Given a user with the following criteria
            | criteria                     |
            | account good balance dollars |
        When the user accesses to the operative account product detail
        And the user uses the good balance help button
        Then the user sees the following items in the screen:
            | item                |
            | header modal        |
            | content modal       |
            | accept button modal |

    @PDA011
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Understood button
        Given a user with the following criteria
            | criteria                     |
            | account good balance dollars |
        When the user accesses to the operative account product detail
        And the user uses the good balance help button
        Then the user accepts the modal confirmation

    @PDA012
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: foreign account Summary
        Given a user with the following criteria
            | criteria               |
            | account detail dollars |
        When the user accesses to the operative account product detail
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | back button            |
            | view account data link |

    @PDA013
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Return foreign account
        Given a user with the following criteria
            | criteria                     |
            | account good balance dollars |
        When the user accesses to the operative account product detail
        Then the user goes back to previous page

    @PDA014
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @smokeTest
    @backend-smoke
    Scenario: Detail of a foreign account
        Given a user with the following criteria
            | criteria                     |
            | account good balance dollars |
        When the user accesses to the operative account product detail
        And the user accesses view the data for the second account
        Then the user sees the following items in the screen
            | item            |
            | header detail   |
            | product name    |
            | account content |
            | clabe content   |

    @PDA015
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user exits account detail of a foregin account
        Given a user with the following criteria
            | criteria                     |
            | account good balance dollars |
        When the user accesses to the operative account product detail
        And the user accesses view the data for the second account
        And the user closes the modal account data
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | account           |
            | operations module |

    @PDA016
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    Scenario Outline: See account details <alert>
        Given a user with the following criteria
            | criteria                |
            | account upgrade alerted |
        And the user starts the application at date:
            | day     | <day>   |
            | month   | <month> |
            | year    | 2025    |
        When the user accesses to the first account product detail
        Then the user sees the following items in the screen
            | item              |
            | account info card |
            | account           |
            | operations module |
            | pockets card      |
        Examples:
            | alert        | day | month |
            | day 1 to 10  | 10  | 01    |
            | day 11 to 59 | 24  | 01    |
            | day 60       | 24  | 03    |

    @PDA017
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    Scenario Outline: See expanded account details <alert>
        Given a user with the following criteria
            | criteria                |
            | account upgrade alerted |
        And the user starts the application at date:
            | day     | <day>   |
            | month   | <month> |
            | year    | 2025    |
        And the user accesses to the operative account product detail
        When the user accesses to upgrade customer from "product detail"
        Then the user accesses the "upgrade customer" screen
        Examples:
            | alert        | day | month |
            | day 1 to 10  | 10  | 01    |
            | day 11 to 59 | 24  | 01    |
            | day 60       | 24  | 03    |

    @PDA018
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: See account details with restrictions
        Given a user with the following criteria
            | criteria                |
            | account upgrade alerted |
        And the user accesses to the operative account product detail
        When the user accesses to why should i upgrade modal
        Then the user sees the following items in the screen
            | item                |
            | indicator           |
            | questions           |

    @PDA019
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: See more link information
        Given a user with the following criteria
            | criteria                |
            | account upgrade alerted |
        And the user accesses to the operative account product detail
        And the user accesses to why should i upgrade modal
        When the user exits the why should I upgrade modal
        Then the user accesses the "product detail account" screen

    @PDA020
    @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: See show more information
        Given a user with the following criteria
            | criteria                |
            | account upgrade alerted |
        And the user accesses to the operative account product detail
        When the user accesses to the view more operatives
        Then the user sees the "balloon account detail" screen

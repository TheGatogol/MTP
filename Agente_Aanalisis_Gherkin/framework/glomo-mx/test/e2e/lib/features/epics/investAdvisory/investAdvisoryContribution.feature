@investAdvisory @investAdvisoryContribution
Feature: Investment Contribution

    @COMP001
    @vbank
    @ios @android @web
    @MX
    @smokeTest
    @backend(test)
    @web-done
    Scenario: Purchase invest MX - Purchase
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds purchase operation
        Then the user sees the following items in the screen
            | item                            |
            | operation header                |
            | success icon                    |
            | in process purchase            |
            | amount                          |
            | detail category                 |
            | operation type                  |
            | contract number label           |
            | purchase contract number        |
            | purchase operation folio        |
            | purchase operation folio number |
            | distribution category           |
            | distribution capital            |
            | distribution capital percentage |
            | distribution flow               |
            | distribution flow percentage    |
            | distribution growth             |
            | distribution growth percentage  |
            | notification message            |
            | share button                    |

    @COMP002
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Purchase invest MX - Purchase within hours
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds purchase operation
        Then the user sees the following items in the screen
            | item                            |
            | operation header                |
            | success icon                    |
            | success purchase                |
            | amount                          |
            | detail category                 |
            | operation type                  |
            | contract number label           |
            | purchase contract number        |
            | distribution category           |
            | distribution capital            |
            | distribution capital percentage |
            | distribution flow               |
            | distribution flow percentage    |
            | distribution growth             |
            | distribution growth percentage  |
            | share button                    |

    @COMP003
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Purchase invest MX - Purchase "Distribution - Liquidity" after hours
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds purchase operation
        Then the user sees the following items in the screen
            | item                            |
            | operation header                |
            | pending icon                    |
            | in process purchase            |
            | amount                          |
            | detail category                 |
            | operation type                  |
            | contract number label           |
            | purchase contract number        |
            | distribution category           |
            | distribution capital            |
            | distribution capital percentage |
            | distribution flow               |
            | distribution flow percentage    |
            | distribution growth             |
            | distribution growth percentage  |
            | notification message            |
            | share button                    |

    @COMP004
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Purchase invest MX - The user enters to make a purchase after hours
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds purchase operation
        Then the user sees the following items in the screen
            | item                            |
            | operation header                |
            | pending icon                    |
            | in process purchase            |
            | amount                          |
            | detail category                 |
            | operation type                  |
            | contract number label           |
            | purchase contract number        |
            | distribution category           |
            | distribution capital            |
            | distribution capital percentage |
            | distribution flow               |
            | distribution flow percentage    |
            | distribution growth             |
            | distribution growth percentage  |
            | notification message            |
            | share button                    |

    @COMP005
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Purchase invest MX - Enter within the funds schedule and end after hours
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds purchase operation
        Then the user sees the following items in the screen
            | item                            |
            | operation header                |
            | pending icon                    |
            | in process purchase            |
            | amount                          |
            | detail category                 |
            | operation type                  |
            | contract number label           |
            | purchase contract number        |
            | distribution category           |
            | distribution capital            |
            | distribution capital percentage |
            | distribution flow               |
            | distribution flow percentage    |
            | distribution growth             |
            | distribution growth percentage  |
            | notification message            |
            | share button                    |

    @COMP006
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Purchase invest MX - Enter after hours and finish on time within the funds schedule
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds purchase operation
        Then the user sees the following items in the screen
            | item                            |
            | operation header                |
            | success icon                    |
            | in process purchase            |
            | amount                          |
            | detail category                 |
            | operation type                  |
            | contract number label           |
            | purchase contract number        |
            | purchase operation folio        |
            | purchase operation folio number |
            | distribution category           |
            | distribution capital            |
            | distribution capital percentage |
            | distribution flow               |
            | distribution flow percentage    |
            | distribution growth             |
            | distribution growth percentage  |
            | notification message            |
            | share button                    |

    @COMP007
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @backend-smoke
    @web-done
    Scenario: Purchase invest MX - Edit amount to purchase
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user edits the amount to purchase from "step"
        Then the user sees the following items in the screen
            | item                     |
            | buy header               |
            | amount to buy label      |
            | buy label                |
            | buy input                |
            | buy notification message |
            | buy confirm button       |

    @COMP008
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @backend-smoke
    @web-done
    Scenario: Purchase invest MX - Edit amount to purchase from the summary
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user edits the amount to purchase from "summary"
        Then the user sees the following items in the screen
            | item                     |
            | buy header               |
            | amount to buy label      |
            | buy label                |
            | buy input                |
            | buy notification message |
            | buy confirm button       |

    @COMP009
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @backend-smoke
    @web-done
    Scenario: Purchase invest MX - Get out of the flow
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user leaves buy fund page
        Then the user accesses the "invest product detail" screen

    @COMP010
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @backend-smoke
    @web-done
    Scenario: Purchase invest MX - Less than minimum
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user tries to buy funds for $"1"
        Then the user sees the following items in the screen
            | item                               |
            | buy input                          |
            | amount error message               |
            | contribution amount confirm button |

    @COMP011
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @backend-smoke
    @web-done
    Scenario: Purchase invest MX - The amount is higher
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user tries to buy funds for $"4000000"
        Then the user sees the following items in the screen
            | item                               |
            | buy input                          |
            | amount error message               |
            | contribution amount confirm button |

    @COMP012
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @backend-smoke
    @web-done
    Scenario: Purchase invest MX - Import zero
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user tries to buy funds for $"0"
        Then the user sees the following items in the screen
            | item                               |
            | buy input                          |
            | amount error message               |
            | contribution amount confirm button |

    @COMP013
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @backend-smoke
    @web-done
    Scenario: Purchase invest MX - Empty input
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user tries to buy funds for $"."
        Then the user sees the following items in the screen
            | item                               |
            | buy input                          |
            | contribution amount confirm button |

    @COMP014
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Purchase invest MX - Invest contribution
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user can't buy funds
        Then the user sees the following items in the screen
            | item                                    |
            | invest error modal icon                 |
            | invest error modal title                |
            | invest error modal message              |
            | invest error modal notification message |
            | invest error modal understand button    |

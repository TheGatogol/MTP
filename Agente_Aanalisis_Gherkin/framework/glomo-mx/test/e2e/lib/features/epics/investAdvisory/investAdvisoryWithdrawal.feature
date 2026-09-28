@investAdvisory @investAdvisoryWithdrawal
Feature: Investment Withdrawal

    @VENT001
    @vbank
    @ios @android @web
    @smokeTest
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Happy Path Partial Investment Withdrawal
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "partial"
        Then the user sees the following items in the screen
            | item                       |
            | success icon               |
            | success sell               |
            | sell amount                |
            | detail category            |
            | sell distribution category |
            | liquidity fund             |
            | liquidity fund percentage  |
            | share button               |

    @VENT002
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Partial Investment Withdrawal after hours
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "partial"
        Then the user sees the following items in the screen
            | item                       |
            | pending icon               |
            | in process sell            |
            | sell amount                |
            | detail category            |
            | sell distribution category |
            | liquidity fund             |
            | liquidity fund percentage  |
            | notification message       |
            | share button               |

    @VENT003
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Partial Investment Withdrawal "Liquidity"
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "partial"
        Then the user sees the following items in the screen
            | item                       |
            | success icon               |
            | success sell               |
            | sell amount                |
            | detail category            |
            | sell distribution category |
            | share button               |

    @VENT004
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Partial Investment Withdrawal "Liquidity" after hours
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "partial"
        Then the user sees the following items in the screen
            | item                       |
            | pending icon               |
            | in process sell            |
            | sell amount                |
            | detail category            |
            | sell distribution category |
            | liquidity fund             |
            | liquidity fund percentage  |
            | notification message       |
            | share button               |

    @VENT005
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Enter within hours and end after hours
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "partial"
        Then the user sees the following items in the screen
            | item                       |
            | pending icon               |
            | in process sell            |
            | sell amount                |
            | detail category            |
            | sell distribution category |
            | liquidity fund             |
            | liquidity fund percentage  |
            | notification message       |
            | share button               |

    @VENT006
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Enter after hours and finish on time within the fund schedule
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "partial"
        Then the user sees the following items in the screen
            | item                       |
            | pending icon               |
            | in process sell            |
            | sell amount                |
            | detail category            |
            | sell distribution category |
            | liquidity fund             |
            | liquidity fund percentage  |
            | notification message       |
            | share button               |

    @VENT007
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Happy Path Total Investment Withdrawal (within fund hours)
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "total"
        Then the user sees the following items in the screen
            | item              |
            | success icon      |
            | success sell      |
            | sell total amount |
            | detail category   |
            | share button      |

    @VENT008
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX -  Total Investment Withdrawal after hours
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "total"
        Then the user sees the following items in the screen
            | item              |
            | pending icon      |
            | in process sell   |
            | sell total amount |
            | detail category   |
            | share button      |

    @VENT009
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX -  Enter whitin the funds schedule and end after hours (Total)
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "total"
        Then the user sees the following items in the screen
            | item              |
            | pending icon      |
            | in process sell   |
            | sell total amount |
            | detail category   |
            | share button      |

    @VENT010
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Enter after hours and finish on time within the fund schedule (Total)
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "total"
        Then the user sees the following items in the screen
            | item              |
            | success icon      |
            | success sell      |
            | sell total amount |
            | detail category   |
            | share button      |

    @VENT011
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Total afer sales detail "liquidity"
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "partial complete"
        Then the user sees the following items in the screen
            | item                    |
            | liquidity fund strategy |

    @VENT012
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Total afer sales detail 2 to 3 strategies
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user performs a funds sell operation "total complete"
        Then the user sees the following items in the screen
            | item                               |
            | liquidity fund strategy            |
            | capital preservation fund strategy |
            | flow generation fund strategy      |

    @VENT013
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Edit amount of investment withdrawal (from multistep)
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user edits "amount multistep" step
        Then the user sees the following items in the screen
            | item                             |
            | edit amount header               |
            | edit amount withdrawal           |
            | edit amount notification message |
            | edit amount confirm button       |

    @VENT014
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Edit summary (Type of Investment Withdrawal)
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user edits "type" step
        Then the user sees the following items in the screen
            | item                      |
            | sell type header          |
            | total withdrawal          |
            | partial withdrawal        |
            | sell notification message |

    @VENT015
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Edit amount in Summary
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user edits "amount" step
        Then the user sees the following items in the screen
            | item                             |
            | edit amount header               |
            | edit amount withdrawal           |
            | edit amount notification message |
            | edit amount confirm button       |

    @VENT016
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Get out of the flow before clicking on Sell
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user leaves sell fund page
        Then the user accesses the "invest product detail" screen

    @VENT017
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Less than minimum allowed
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user tries to sell funds for $"499"
        Then the user sees the following items in the screen
            | item                            |
            | withdrawal amount error message |

    @VENT018
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - The amount is higher
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user tries to sell funds for $"9999"
        Then the user sees the following items in the screen
            | item                            |
            | withdrawal amount error message |

    @VENT019
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Import Zero
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user tries to sell funds for $"0"
        Then the user sees the following items in the screen
            | item                            |
            | withdrawal amount error message |

    @VENT020
    @vbank
    @ios @android @web
    @MX
    @backend(test) @web-done
    Scenario: Invest MX - Empty Input Amount
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user tries to sell funds for $"."
        Then the user sees the following items in the screen
            | item                      |
            | withdrawal confirm button |

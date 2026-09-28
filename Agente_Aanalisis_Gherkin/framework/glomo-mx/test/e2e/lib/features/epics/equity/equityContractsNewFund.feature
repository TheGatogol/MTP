@equityContractsNewFund
Feature: OC Fund Equity Contract

    @ENFC001
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    @smokeTest
    Scenario: The user successfully completes the New Fund Contract path
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        When the user confirms the operative
        Then the user sees the following items in the screen:
            | item                |
            | successful purchase |
            | header receipt      |
            | amount receipt      |

    @ENFC003
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user goes to the fund list step
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        When the user selects the "debt" fund category
        Then the user sees the following items in the screen:
            | item                    |
            | modal fund item         |
            | modal fund menu         |
            | modal fund search input |

    @ENFC004
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user opens the fund profit modal
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user selects the "debt" fund category
        When the user accesses to the fund performance and detail modal
        Then the user sees the following items in the screen:
              | item                |
              | modal detail header |
              | modal detail menu   |
              | modal detail list   |

    @ENFC005
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user goes to the investment step
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        When the user goes to the "amount" step
        Then the user sees the following items in the screen:
            | item                          |
            | invest amount input           |
            | invest amount continue button |

    @ENFC006
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user goes to the legals step
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        When the user goes to the "legals" step
        Then the user sees the following items in the screen:
            | item                   |
            | dici document          |
            | legals confirm terms   |
            | legals continue button |
            | legals privacy button  |

    @ENFC007
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user goes to the confirm section
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        When the user goes to the "summary" step
        Then the user sees the following items in the screen:
            | item                    |
            | summary message         |
            | summary invest amount   |
            | summary continue button |

    @ENFC008
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user accesses to multistrategy list from rent category
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user selects the "multistrategy" fund category
        When the user goes to the "rent" fund filter category
        Then the user sees the following items in the screen:
            | item                    |
            | modal fund menu         |
            | modal fund close button |
            | modal fund search input |

    @ENFC009
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user accesses to view all funds
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        When the user accesses to view all funds
        Then the user sees the following items in the screen:
            | item                    |
            | modal fund close button |
            | modal fund filter link  |
            | modal fund search input |

    @ENFC010
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user closes the fund detail and performance modal
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user selects the "debt" fund category
        And the user accesses to the fund performance and detail modal
        And the user closes the "performance and detail" modal
        And the user accesses to the fund performance and detail modal
        When the user closes the "performance and detail return" modal
        Then the user sees the following items in the screen:
            | item                    |
            | modal fund menu         |
            | modal fund close button |
            | modal fund filter link  |
            | modal fund search input |

    @ENFC011
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user successfully searches for an investment fund
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user selects the "debt" fund category
        And the user search for the "BBVALIQ" fund
        When the user selects the "BBVALIQ" investment fund
        Then the user sees the following items in the screen:
            | item                    |
            | fund section header     |
            | invest section header   |

    @ENFC012
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user searches for an investment fund without results
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user selects the "debt" fund category
        When the user search for the "BBVAXYZ" fund
        Then the user sees the following items in the screen:
            | item                          |
            | modal fund menu               |
            | modal fund close button       |
            | modal fund filter link        |
            | modal fund search input       |
            | modal fund search result icon |

    @ENFC013
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user successfully searches for an investment fund with results in another category
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user selects the "rent" fund category
        When the user search for the "BBVALIQ" fund
        Then the user sees the following items in the screen:
            | item                             |
            | modal fund menu                  |
            | modal fund close button          |
            | modal fund filter link           |
            | modal fund search input          |
            | modal fund search another result |

    @ENFC014
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user filters the fund list by liquidity
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user selects the "debt" fund category
        When the user selects the "24 hours" liquidity filter
        Then the user sees the following items in the screen:
            | item                             |
            | modal fund menu                  |
            | modal fund close button          |
            | modal fund filter link           |
            | modal fund filter tag            |

    @ENFC015
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user search for an investment fund and filters by liquidity
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user selects the "debt" fund category
        And the user selects the "same day" liquidity filter
        When the user search for the "BBVALIQ" fund
        Then the user sees the following items in the screen:
            | item                             |
            | modal fund menu                  |
            | modal fund close button          |

    @ENFC016
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user changes the current investment amount
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user starts the application at date:
            | hour  | 18     |
            | day   | 23     |
            | month | 07     |
            | year  | 2026   |
        And the user accesses to equity new fund contract
        And the user goes to the "legals" step
        When the user modifies the completed "invest" step
        Then the user sees the following items in the screen:
            | item                                 |
            | invest simulation message            |
            | invest simulation detail             |
            | invest simulation performance button |

    @ENFC017
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user accesses to the investment amount help
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user starts the application at date:
            | hour   |  10  |
            | minute |  30  |
        And the user accesses to equity new fund contract
        And the user goes to the "amount" step
        And the user confirms an amount to invest
        When the user accesses to the investment amount modal
        Then the user sees the following items in the screen:
            | item                             |
            | invest help fund icon            |
            | invest help fund key title       |
            | invest help fund key description |

    @ENFC018
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user accesses to the fund key help
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "fund list" step
        And the user selects the "debt" fund category
        When the user accesses to the fund description modal
        Then the user sees the following items in the screen:
            | item                    |
            | modal fund menu         |
            | modal fund close button |
            | modal fund filter link  |
            | modal fund search input |

    @ENFC019
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user purchases a fund with a different liquidity than the same day
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user selects the "debt" fund category
        And the user search for the "BBVAPZO" fund
        And the user selects the "BBVAPZO" investment fund
        When the user confirms the operative
        Then the user sees the following items in the screen:
            | item                |
            | successful purchase |
            | header receipt      |
            | amount receipt      |

    @ENFC020
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user edits steps from summary
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        And the user accesses to equity new fund contract
        And the user goes to the "legals" step
        And the user modifies the completed "invest" step
        And the user goes to the "summary" step
        When the user modifies the completed "legals" step
        Then the user sees the following items in the screen:
            | item                   |
            | dici document          |
            | legals confirm terms   |
            | legals continue button |
            | legals privacy button  |

    @ENFC021
    @MX @vbank @backend(test)
    @web @ios @android @web-done
    Scenario: The user has already invested in all funds
        Given a user with the following criteria
            | criteria                 |
            | equity new fund contract |
        When the user accesses to equity new fund contract
        Then the user sees the following items in the screen:
            | item                      |
            | no fund available icon    |
            | no fund available message |
            | no fund available title   |

@investAdvisory @investAdvisoryProductDetail
Feature: Product Detail - Invest

    @PRDE001
    @vbank
    @ios @android @web
    @MX
    @smokeTest
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Contract detail
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user "reviews" investment contract alias
        Then the user sees the following items in the screen
            | item                                      |
            | contract details header                   |
            | contract details general category         |
            | contract details service label            |
            | contract details service                  |
            | contract details alias label              |
            | contract details alias                    |
            | contract details edit alias               |
            | contract details contract number label    |
            | contract details contract number          |
            | contract details copy contract            |
            | contract details investment service label |
            | contract details investment service       |
            | contract details associated account       |
            | contract details account label            |
            | contract details account                  |
            | contract details copy account             |

    @PRDE002
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Flow edit alias
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user "edits" investment contract alias
        Then the user sees the "contract edit alias" screen

    @PRDE003
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Copy contract number
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user needs to copy "investment contract"
        Then the user sees the following items in the screen
            | item                               |
            | copy contract number success toast |

    @PRDE004
    @vbank
    @ios @android @web
    @MX
    @web-done
    @backend(test)
    Scenario: Invest Product Detail - Copy savings account
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user needs to copy "savings account"
        Then the user sees the following items in the screen
            | item                               |
            | copy savings account success toast |

    @PRDE005
    @vbank
    @ios @android @web
    @web-done
    @MX
    @backend(test)
    Scenario: Invest Product Detail - Purchase flow Buy
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user wants to "buy" some investment funds
        Then the user sees the following items in the screen
            | item                     |
            | buy header               |
            | amount to buy label      |
            | buy label                |
            | buy input                |
            | buy notification message |
            | buy confirm button       |

    @PRDE006
    @vbank
    @ios @android @web
    @web-done
    @MX
    @backend(test)
    Scenario: Invest Product Detail - Purchase flow Sell
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user wants to "sell" some investment funds
        Then the user sees the following items in the screen
            | item                      |
            | sell header               |
            | sell type header          |
            | total withdrawal          |
            | sell notification message |

    @PRDE007
    @vbank
    @ios @android @web
    @web-done
    @MX
    @backend(test)
    Scenario: Invest Product Detail - Action edit alias
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user "edits" investment contract alias
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | header title         |
            | input field          |
            | save button disabled |
            | cancel alias         |

    @PRDE008
    @vbank
    @ios @android @web
    @web-done
    @MX
    @backend(test)
    Scenario: Invest Product Detail - Liquidity Traditional Profile
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user reviews "liquidity" strategy
        Then the user sees the following items in the screen
            | item                        |
            | liquidity header            |
            | invested amount             |
            | liquidity fund key          |
            | general category            |
            | general details             |
            | associated account category |
            | account details             |
            | fund conditions             |
            | fund conditions schedule    |
            | fund conditions liquidity   |
            | fund conditions notice      |
            | fund returns                |
            | fund returns last month     |
            | fund returns last year      |

    @PRDE009
    @vbank
    @ios @android @web
    @web-done
    @MX
    @backend(test)
    Scenario: Invest Product Detail - Capital preservation
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user reviews "capital preservation" strategy
        Then the user sees the following items in the screen
            | item                          |
            | capital preservation header   |
            | invested amount               |
            | capital preservation fund key |
            | general category              |
            | general details               |
            | associated account category   |
            | account details               |
            | fund conditions               |
            | fund conditions schedule      |
            | fund conditions liquidity     |
            | fund conditions notice        |
            | fund returns                  |
            | fund returns last month       |
            | fund returns last year        |

    @PRDE010
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Flow generation
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user reviews "flow generation" strategy
        Then the user sees the following items in the screen
            | item                        |
            | flow generation header      |
            | invested amount             |
            | flow generation fund key    |
            | general category            |
            | general details             |
            | associated account category |
            | account details             |
            | fund conditions             |
            | fund conditions schedule    |
            | fund conditions liquidity   |
            | fund conditions notice      |
            | fund returns                |
            | fund returns last month     |
            | fund returns last year      |

    @PRDE011
    @vbank
    @ios @android @web
    @web-done
    @MX
    @backend(test)
    Scenario: Invest Product Detail - Capital growth
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user reviews "capital growth" strategy
        Then the user sees the following items in the screen
            | item                        |
            | capital growth header       |
            | invested amount             |
            | capital growth fund key     |
            | general category            |
            | general details             |
            | associated account category |
            | account details             |
            | fund conditions             |
            | fund conditions schedule    |
            | fund conditions liquidity   |
            | fund conditions notice      |
            | fund returns                |
            | fund returns last month     |
            | fund returns last year      |

    @PRDE012
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Copy associated account
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user needs to copy "associated account"
        Then the user sees the following items in the screen
            | item                                  |
            | copy associated account success toast |

    @PRDE013
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Validate the Return button
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        And the user opens contract detail
        When the user goes back to previous page
        Then the user sees the "invest product detail" screen

    @PRDE014
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Validate card when you have an investment fund
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        When the user accesses to product detail invest advisory
        Then the user sees the following items in the screen
            | item                        |
            | product detail header       |
            | product detail back button  |
            | product detail alias        |
            | product detail amount       |
            | product detail details link |

    @PRDE015
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Validate an investment fund with more than one strategy
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        When the user accesses to product detail invest advisory
        Then the user sees the following items in the screen
            | item                               |
            | liquidity fund strategy            |
            | capital preservation fund strategy |
            | flow generation fund strategy      |

    @PRDE016
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Validate when the user cannot make the initial purchase
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        When the user accesses to product detail invest advisory
        Then the user sees the following items in the screen
            | item                        |
            | product detail header       |
            | product detail back button  |
            | product detail alias        |
            | product detail amount       |
            | product detail details link |

    @PRDE017
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Validate when the total sale was made
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        When the user accesses to product detail invest advisory
        Then the user sees the following items in the screen
            | item                        |
            | product detail header       |
            | product detail back button  |
            | product detail alias        |
            | product detail amount       |
            | product detail details link |

    @PRDE018
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Validate when investment funds cannot be loaded
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        When the user accesses to product detail invest advisory
        Then the user sees the following items in the screen
            | item                                 |
            | unavailable information header       |
            | unavailable information close button |
            | unavailable information warning icon |
            | unavailable information title        |
            | unavailable information text         |
            | unavailable information retry button |

    @PRDE019
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Close error screen when loading investment funds
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                        |
            | product detail header       |
            | product detail back button  |
            | product detail alias        |
            | product detail amount       |
            | product detail details link |

    @PRDE020
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    Scenario: Invest Product Detail - Validate when fund strategies cannot be loaded
        Given a user with the following criteria
            | criteria        |
            | invest advisory |
        And the user accesses to product detail invest advisory
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                          |
            | product detail header         |
            | product detail back button    |
            | product detail alias          |
            | product detail amount         |
            | product detail details link   |
            | funds not loaded warning      |
            | funds not loaded retry button |

    @PRDE021
    @vbank
    @ios @android @web
    @MX
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Invest Product Detail - Validate tooltip of the "Portfolio Strategies" section
        Given a user with the following criteria
            | criteria                             |
            | invest advisory terms and conditions |
        And the user accesses to product detail invest advisory
        When the user opens terms and conditions
        Then the user sees the following items in the screen
            | item                                               |
            | portfolio strategy modal header                    |
            | portfolio strategy modal close icon                |
            | portfolio strategy modal info icon                 |
            | portfolio strategy modal title                     |
            | portfolio strategy modal term associated fund      |
            | portfolio strategy modal term amount invested      |
            | portfolio strategy modal term percentage portfolio |

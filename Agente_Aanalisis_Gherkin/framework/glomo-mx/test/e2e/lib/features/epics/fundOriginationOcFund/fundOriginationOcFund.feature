@FundOriginationOcFund
Feature: Fund Origination Oc Fund

    @OCFS001
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate contract product from home
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                    |
            | offer investment banner |

    @OCFS002
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate contract product from opportunities
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | main banner |

    @OCFS003
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @smokeTest
    Scenario: Invest in a fund within the schedule
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user successfully completed the investment
        Then the user sees the following items in the screen
            | item                          |
            | header receipt                |
            | check icon                    |
            | investment text               |
            | investment amount             |
            | investment list data          |
            | investment info notification  |
            | investment button row receipt |
            | investment banner receipt     |

    @OCFS004
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Invest in a fund outside of business hours
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user successfully completed the investment
        Then the user sees the following items in the screen
            | item                          |
            | header receipt                |
            | check icon                    |
            | investment text               |
            | investment amount             |
            | investment list data          |
            | investment info notification  |
            | investment button row receipt |
            | investment banner receipt     |

    @OCFS005
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: The user accesses to the AEM help modal
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user enters the "AEM help" modal
        Then the user sees the following items in the screen
            | item             |
            | title faqs       |
            | exit button faqs |
            | faqs list        |

    @OCFS006
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: The user accesses to the fund detail within the schedule
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user enters the "fund detail" modal
        Then the user sees the following items in the screen
            | item                           |
            | historical performance section |
            | performance notification       |
            | document section               |

    @OCFS007
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: The user accesses to the fund detail outside of business hours
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user enters the "fund detail" modal
        Then the user sees the following items in the screen
            | item                           |
            | historical performance section |
            | performance notification       |
            | document section               |

    @OCFS008
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate historical performance modal
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "fund detail" modal
        When the user enters the "historical performance" modal
        Then the user sees the following items in the screen
            | item             |
            | title modal help |
            | icon modal help  |

    @OCFS009
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate the risk modal
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "fund detail" modal
        When the user enters the "risk" modal
        Then the user sees the following items in the screen
            | item             |
            | title modal help |
            | icon modal help  |

    @OCFS010
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate the availability modal
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters the "fund detail" modal
        When the user enters the "availability" modal
        Then the user sees the following items in the screen
            | item             |
            | title modal help |
            | icon modal help  |

    @OCFS011
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Change the investment amount
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user enters an amount of "1000"
        Then the user sees the following items in the screen
            | item                  |
            | help header icon      |
            | exit button           |
            | offer banner          |
            | characteristic points |
            | input text title      |
            | input offer           |
            | continue button offer |

    @OCFS012
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate simulated quantity info modal
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user enters an amount of "1000"
        When the user enters the "final invest amount" modal
        Then the user sees the following items in the screen
            | item             |
            | title modal help |
            | icon modal help  |

    @OCFS013
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate step Associated Account when the user has two to three accounts
        Given a user with the following criteria
            | criteria        |
            | oc fund account |
        And the user accesses to fund card from opportunities
        When the user goes to the "account" step
        Then the user sees the following items in the screen
            | item                     |
            | title step account       |
            | step number account      |
            | description step account |
            | title list account       |
            | account list             |

    @OCFS014
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate accounts modal when the user has more than three accounts
        Given a user with the following criteria
            | criteria                  |
            | oc fund multiple accounts |
        And the user accesses to fund card from opportunities
        And the user goes to the "account" step
        When the user enters the "account list" modal
        Then the user sees the following items in the screen
            | item                |
            | title account modal |
            | exit button modal   |
            | list account modal  |

    @OCFS015
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate that it allows changing account
        Given a user with the following criteria
            | criteria                  |
            | oc fund multiple accounts |
        And the user accesses to fund card from opportunities
        And the user goes to the "summary" step
        And the user uncollapsed "account" step
        When the user selects a valid account
        Then the user sees the following items in the screen
            | item                 |
            | summary button       |
            | step account summary |
            | step legals summary  |

    @OCFS016
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate terms and conditions step
        Given a user with the following criteria
            | criteria                  |
            | oc fund multiple accounts |
        And the user accesses to fund card from opportunities
        And the user goes to the "legals" step
        And the user uncollapsed "account" step
        When the user goes to the "legals" step
        Then the user sees the following items in the screen
            | item                   |
            | title step terms       |
            | step number terms      |
            | document list          |
            | super check            |
            | checkbox list          |
            | continue button terms  |

    @OCFS017
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Validate investments on the dashboard
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user successfully completed the investment
        When the user accesses contract product section from "success page"
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | main banner        |
            | main banner button |

    @OCFS018
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: The user makes a new investment from the success screen
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user successfully completed the investment
        And the user accesses contract product section from "success page"
        When the user accesses to fund card from opportunities
        Then the user sees the following items in the screen
            | item                  |
            | offer banner          |
            | characteristic points |
            | input offer           |

    @OCFS019
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Validate documents list modal
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user successfully completed the investment
        When the user enters the "view documents" modal
        Then the user sees the following items in the screen
            | item                       |
            | modal document exit button |
            | modal document list        |

    @OCFS020
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Return to the entry point
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user confirms exit the operative
        Then the user sees the following items in the screen
            | item                |
            | title modal         |
            | exit header button  |
            | icon modal          |
            | exit primary button |
            | continue button     |

    @OCFS021
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate exit modal
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user confirms exit the operative
        Then the user sees the following items in the screen
            | item                |
            | title modal         |
            | exit header button  |
            | icon modal          |
            | content text modal  |
            | exit primary button |
            | continue button     |

    @OCFS022
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Return to the entry point when entering an amount
        Given a user with the following criteria
            | criteria                  |
            | oc fund multiple accounts |
        And the user accesses to fund card from opportunities
        And the user goes to the "account" step
        When the user confirms exit the operative
        Then the user sees the following items in the screen
            | item                |
            | title modal         |
            | exit header button  |
            | icon modal          |
            | content text modal  |
            | exit primary button |
            | continue button     |

    @OCFS023
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Continue on the screen to invest in a fund
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user confirms exit the operative
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                           |
            | exit button                    |
            | offer banner                   |
            | characteristic points          |
            | disabled continue button offer |

    @OCFS024
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Exit the success screen
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        And the user successfully completed the investment
        When the user accesses contract product section from "success page"
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | main banner        |
            | main banner button |

    @OCFS025
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: The user logs in with an N2 account or incomplete file
        Given a user with the following criteria
            | criteria        |
            | oc funds simple |
        When the user accesses to fund card from opportunities
        Then the user sees the following items in the screen
            | item               |
            | exit button        |
            | icon modal         |
            | title modal        |
            | content text modal |

    @OCFS026
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: The user logs in with an N2 account and cannot continue investing
        Given a user with the following criteria
            | criteria        |
            | oc funds simple |
        And the user accesses to fund card from opportunities
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                           |
            | exit button                    |
            | offer banner                   |
            | characteristic points          |
            | disabled continue button offer |

    @OCFS027
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate "Insufficient balance" modal
        Given a user with the following criteria
            | criteria                  |
            | oc fund simple no balance |
        When the user accesses to fund card from opportunities
        Then the user sees the following items in the screen
            | item               |
            | title modal        |
            | icon modal         |
            | exit header button |
            | content text modal |

    @OCFS028
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Exit the "Account Features" modal
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        When the user accesses to fund card from opportunities
        Then the user sees the following items in the screen
            | item               |
            | title modal        |
            | icon modal         |
            | exit header button |
            | content text modal |

    @OCFS029
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Validate that the investment cannot be continued due to "Account Features"
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                           |
            | exit button                    |
            | offer banner                   |
            | characteristic points          |
            | disabled continue button offer |

    @OCFS030
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @backend-smoke
    Scenario: Validate that the investment cannot be continued due to insufficient balance
        Given a user with the following criteria
            | criteria                  |
            | oc fund simple no balance |
        And the user accesses to fund card from opportunities
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                           |
            | exit button                    |
            | offer banner                   |
            | characteristic points          |
            | disabled continue button offer |

    @OCFS031
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Validate error when entering a lower amount
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user enters an amount of "10"
        Then the user sees the following items in the screen
            | item                           |
            | help header icon               |
            | exit button                    |
            | offer banner                   |
            | characteristic points          |
            | input offer                    |
            | message input offer            |
            | disabled continue button offer |

    @OCFS032
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Validate error when entering a higher amount
        Given a user with the following criteria
            | criteria       |
            | oc fund simple |
        And the user accesses to fund card from opportunities
        When the user enters an amount of "1000000"
        Then the user sees the following items in the screen
            | item                           |
            | help header icon               |
            | exit button                    |
            | offer banner                   |
            | characteristic points          |
            | input offer                    |
            | message input offer            |
            | disabled continue button offer |

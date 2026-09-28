@dashboard_standin
Feature: Dashboard Standin Mode

    @DST001 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    @smokeTest
    Scenario: Dashboard - Stand-In Alert Operatives when user selects transfer operation
        Given a user with the following criteria
            | criteria               |
            | dashboard standin two  |
        And the user accesses to dashboard
        When the user accesses the "transfer" operation
        Then the user sees the following items in the screen
            | item                       |
            | stand in modal button      |
            | stand in modal image       |
            | stand in modal title       |
            | stand in modal description |

    @DST002 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user selects footer operation
        Given a user with the following criteria
            | criteria                |
            | dashboard standin two   |
        And the user accesses to dashboard
        When the user selects "contact footer option from dashboard"
        Then the user sees the following items in the screen
            | item                       |
            | stand in modal button      |
            | stand in modal image       |
            | stand in modal title       |
            | stand in modal description |

    @DST003 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user access account page
        Given a user with the following criteria
            | criteria                |
            | dashboard standin two   |
        And the user accesses to dashboard
        When the user goes to the standin account page
        Then the user accesses the "product detail account" screen

    @DST004 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user access credit card page
        Given a user with the following criteria
            | criteria                |
            | dashboard standin two   |
        And the user accesses to dashboard
        When the user accesses to standin card detail page
        Then the user accesses the "Orange Card Detail" screen

    @DST005 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user selects help button
        Given a user with the following criteria
            | criteria                |
            | dashboard standin two   |
        And the user accesses to dashboard
        When the user selects "help section"
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | hero image    |
            | title         |
            | accept button |
            | description   |

    @DST006 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Dashboard - Stand-In Alert Operatives when user close standin notification
        Given a user with the following criteria
            | criteria                |
            | dashboard standin two   |
        And the user accesses to dashboard
        When the user closes the notification card
        Then the user accesses the "Dashboard" screen

    @DST007 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account - Stand-In  Alert Operatives when user selects more info option
        Given a user with the following criteria
            | criteria                |
            | stand in accounts user  |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user selects "more info"
        Then the user accesses the "limited operatives" screen

    @DST008 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account - Stand-In  Alert Operatives when user selects view account data
        Given a user with the following criteria
            | criteria                  |
            | stand in accounts user    |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user selects "view account data"
        Then the user sees the following items in the screen
            | item                      |
            | header modal              |
            | image modal standin       |
            | title modal standin       |
            | accept button modal       |
            | description modal standin |

    @DST009 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account - Stand-In  Alert Operatives when user selects trensfer operative
        Given a user with the following criteria
            | criteria                |
            | stand in accounts user  |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user selects "transfer operative disabled"
        Then the user sees the following items in the screen
            | item                      |
            | header modal              |
            | image modal standin       |
            | title modal standin       |
            | accept button modal       |
            | description modal standin |

    @DST0010 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user accesses to product detail to select switch off option
        Given a user with the following criteria
            | criteria         |
            | stand in cards   |
        And the user accesses to dashboard
        And the user accesses to the "operative" "credit" card product detail for the first time
        When the user selects "switch off option"
        Then the user sees the following items in the screen
            | item                    |
            | header help screen      |
            | payment help screen     |
            | description help screen |

    @DST0011 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: The user accesses to product detail to select paycard option
        Given a user with the following criteria
            | criteria         |
            | stand in cards   |
        And the user accesses to dashboard
        And the user accesses to the "operative" "credit" card product detail for the first time
        When the user selects "paycard operative"
        Then the user sees the following items in the screen
            | item                    |
            | header help screen      |
            | payment help screen     |
            | description help screen |

    @DST0012 @vbank
    @MX @web @android @ios
    @backend(test) @smokeTest
    @web-done
    Scenario: The user accesses to product detail to select more info message
        Given a user with the following criteria
            | criteria         |
            | stand in cards   |
        And the user accesses to dashboard
        And the user accesses to the "operative" "credit" card product detail for the first time
        When the user access more info message
        Then the user accesses the "limited operatives" screen

    @DST0013 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario:  Dashboard - Stand-In Alert Products when user selects addtional card
        Given a user with the following criteria
            | criteria                    |
            | stand in cards additional   |
        And the user accesses to dashboard
        When the user accesses to standin card detail page
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | hero image    |
            | title         |
            | accept button |
            | description   |

    @DST014 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account Detail - Stand-In The user accesses to account page to see movement detail 2
        Given a user with the following criteria
            | criteria                     |
            | account transactions standin |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "detail product"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | transaction description |
            | transaction import      |
            | operation date          |
            | transaction info        |

    @DST015 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account Detail - Stand-In The user accesses to account page to see movement detail
        Given a user with the following criteria
            | criteria                     |
            | account transactions standin |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user accesses a spei movement in standin mode
        Then the user sees the following items in the screen
            | item                        |
            | header standin spei         |
            | icon standin modal          |
            | title standin modal         |
            | accept button standin modal |
            | description standin modal   |

    @DST016 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account Detail - Stand-In The user accesses to account page to see movements details
        Given a user with the following criteria
            | criteria                     |
            | account transactions standin |
        And the user accesses to dashboard
        When the user accesses to the operative account product detail
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | account info card        |
            | last movements           |
            | see all movements button |

    @DST017 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account Detail - Stand-In The user accesses the movement list page to see an informative modal
        Given a user with the following criteria
            | criteria                     |
            | account transactions standin |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user accesses a spei movement in all transactions in standin mode
        Then the user sees the following items in the screen
            | item                       |
            | header standin spei        |
            | button right standin modal |
            | description standin modal  |
            | title standin modal        |

    @DST018 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account Detail - Stand-In The user accesses to list movements page to see movement detail
        Given a user with the following criteria
            | criteria                     |
            | account transactions standin |
        And the user accesses to dashboard
        And the user accesses to the operative account product detail
        When the user accesses the details of a movement from "detail product"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | transaction description |
            | transaction import      |
            | operation date          |
            | transaction info        |

    @DST019 @vbank
    @MX @web @android @ios
    @backend(test)
    @web-done
    Scenario: Account Detail - Stand-In The user accesses to detail movements page and open modal share receipt button
        Given a user with the following criteria
            | criteria                     |
            | account transactions standin |
        And the user accesses to dashboard
        When the user accesses to the operative account product detail
        And the user accesses the details of a movement from "detail product"
        And the user selects "share transaction"
        Then the user sees the following items in the screen
            | item                       |
            | header standin modal       |
            | button right standin modal |
            | description standin modal  |
            | title standin modal        |

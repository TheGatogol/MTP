@btrader @btraderOrderDetail
Feature: Btrader Order Detail
    @SOD001
    @smokeTest
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Pending purchase order status
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        Then the user sees the following items in the screen
            | item                               |
            | order detail header                |
            | order detail order status pending  |
            | order detail purchase status       |
            | order detail cancel order button   |

    @SOD002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Pending sale order status
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        Then the user sees the following items in the screen
            | item                               |
            | order detail header                |
            | order detail order status pending  |
            | order detail sale status           |
            | order detail cancel order button   |

    @SOD003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Purchase Order Monitoring Status
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a monitoring order"
        Then the user sees the following items in the screen
            | item                                 |
            | order detail header                  |
            | order detail purchase status         |
            | order detail order status monitoring |
            | order detail cancel order button     |

    @SOD004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Type limited order purchase execution status
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        Then the user sees the following items in the screen
            | item                               |
            | order detail purchase status       |
            | order detail order status executed |
            | order detail type order limited    |

    @SOD005
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Type condicioned order purchase execution status
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        Then the user sees the following items in the screen
            | item                                |
            | order detail purchase status        |
            | order detail order status executed  |
            | order detail type order condicioned |

    @SOD006
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Sale type limited order executed status
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        Then the user sees the following items in the screen
            | item                               |
            | order detail header                |
            | order detail order status executed |
            | order detail sale status           |
            | order detail type order limited    |

    @SOD007
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Type limited order purchase canceled status
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a canceled purchase order"
        Then the user sees the following items in the screen
            | item                               |
            | order detail purchase status       |
            | order detail order status canceled |
            | order detail type order limited    |

    @SOD008
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Type conditioned order purchase canceled status
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a canceled purchase order"
        Then the user sees the following items in the screen
            | item                                |
            | order detail purchase status        |
            | order detail order status canceled  |
            | order detail type order condicioned |

    @SOD009
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Tooltips totals titles in order detail for pending orders
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        And the user opens the tooltip to "totals" titles
        Then the user sees the following items in the screen
            | item                                              |
            | order detail balance to totals titles information |
            | order detail balance to totals titles close       |
            | order detail balance to totals titles text body   |

    @SOD010
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Tooltips assigned titles in order detail for pending orders
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        And the user opens the tooltip to "assigned" titles
        Then the user sees the following items in the screen
            | item                                                |
            | order detail balance to assigned titles information |
            | order detail balance to assigned titles close       |
            | order detail balance to assigned titles text body   |

    @SOD011
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Tooltips pending titles in order detail for pending orders
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        And the user opens the tooltip to "pending" titles
        Then the user sees the following items in the screen
            | item                                               |
            | order detail balance to pending titles information |
            | order detail balance to pending titles close       |
            | order detail balance to pending titles text body   |

    @SOD012
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Tooltips canceled titles in order detail for canceled orders
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        And the user opens the tooltip to "canceled" titles
        Then the user sees the following items in the screen
            | item                                                |
            | order detail balance to canceled titles information |
            | order detail balance to canceled titles close       |
            | order detail balance to canceled titles text body   |

    @SOD013
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Back button on order detail header
        Given a user with the following criteria
            | criteria |
            | btrader  |
        And the user accesses to btrader
        When the user "accesses" to order list and "select" "a first order"
        And the user exits the order detail
        Then the user sees the following items in the screen
            | item                       |
            | header orderlist           |
            | filter orderlist           |
            | information order card one |

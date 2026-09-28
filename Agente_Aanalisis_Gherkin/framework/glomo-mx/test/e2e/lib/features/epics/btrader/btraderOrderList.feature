@btrader @btraderOrderList
Feature: Btrader Order List

    @SOL002
    @MX
    @backend(test)
    @vbank @web-done @smokeTest
    @web @android @ios
    Scenario: Perform order filtering
        Given a user with the following criteria
            | criteria |
            | btrader6 |
        And the user accesses to btrader
        When the user "accesses" to order list and "filters" "pending orders"
        Then the user sees the following items in the screen
            | item                            |
            | title filter order list         |
            | order list filter tag           |
            | order list filter tag edit link |
            | information order card one      |

    @SOL003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Delete filter results
        Given a user with the following criteria
            | criteria |
            | btrader4 |
        And the user accesses to btrader
        When the user "accesses" to order list and "filters" "pending orders"
        And the user clean filter
        Then the user sees the following items in the screen
            | item                       |
            | header orderlist           |
            | filter orderlist           |
            | order date indicator       |
            | order status               |
            | information order card one |

    @SOL004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Change filter results
        Given a user with the following criteria
            | criteria |
            | btrader4 |
        And the user accesses to btrader
        When the user "accesses" to order list and "filters" "pending orders"
        And the user "changes filter" to order list and "filters" "canceled orders"
        Then the user sees the following items in the screen
            | item                            |
            | title filter order list         |
            | order list filter tag           |
            | order list filter tag edit link |
            | information order card one      |

    @SOL005
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Exit filter screen
        Given a user with the following criteria
            | criteria |
            | btrader4 |
        And the user accesses to btrader
        When the user "accesses" to order list and "close" "filter modal"
        Then the user sees the following items in the screen
            | item                       |
            | header orderlist           |
            | filter orderlist           |
            | order date indicator       |
            | order status               |
            | information order card one |

    @SOL006
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: Exit order list
        Given a user with the following criteria
            | criteria |
            | btrader4 |
        And the user accesses to btrader
        When the user "accesses" to order list and "view" "orders"
        And the user close order list
        Then the user sees the following items in the screen
            | item               |
            | alias              |
            | contract number    |
            | performance        |
            | operatives btrader |
            | button buy         |
            | button orders      |
            | button transfer    |
            | button edit alias  |

    @SOL007
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario Outline: Access the operations of an order "<type>" and operatives order status
        Given a user with the following criteria
            | criteria |
            | btrader4 |
        And the user accesses to btrader
        When the user "accesses" to order list and "view" "orders"
        And the user consults a "<type>" order
        Then the user sees the following items in the screen
            | item                       |
            | header orderlist           |
            | filter orderlist           |
            | order date indicator       |
            | information order card one |
            | order status               |
        Examples:
            | type                   |
            | pendiente limitada     |
            | ejecutada condicionada |
            | monitoreo condicionada |
            | ejecutada limitada     |

@rewards @LoyaltyPointsTransactions
Feature: Rewards - Loyalty Points Transactions

    @LPT001
    @MX @backend(test)
    @web @ios @android @vbank @web-done @backend-smoke
    # Add delay to Loyalty_v0_points_balance_GET and loyalty_v0_rewards
    #UX-v06: 2.2 scroll
    Scenario Outline: Scroll to the last transaction by <type>
        Given a user with the following criteria
            | criteria          |
            | detail points     |
            | card with points  |
            | multi product     |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user accesses the card "<status_movements>" details
        When the user displays "<type>" transaction tab
        Then the user sees the following items in the screen
            | item                  |
            | <type> transactions   |

        Examples:
            | type   | status_movements     |
            | date   | with movements       |
            | period | without movements    |

    @LPT002
    @MX @backend(test)
    @web @ios @android @vbank @web-done @backend-smoke
    # Add delay to Loyalty_v0_points_balance_GET and loyalty_v0_rewards
    #UX-v06: 2.3.1 & 2.3.2 & #UX-v06: 2.7.2
    Scenario: List of transactions when there are multiple cards without transactions
        Given a user with the following criteria
            | criteria          |
            | detail points     |
            | card with points  |
            | multi product     |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        When the user accesses the card "without movements" details
        Then the user sees the following items in the screen
            | item                       |
            | without transactions image |

    @LPT003
    @MX @backend(test)
    @web @ios @android @vbank @web-done @backend-smoke
    # Add delay to Loyalty_v0_points_balance_GET and loyalty_v0_rewards
    #UX-v06: 2.3.1 & 2.3.2 & #UX-v06: 2.7.2
    Scenario Outline: List of transactions by <type> when there is only one card without transactions
        Given a user with the following criteria
            | criteria             |
            | loyalty points       |
            | single product       |
            | without transactions |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        When the user displays "<type>" transaction tab
        Then the user sees the following items in the screen
            | item                                 |
            | without transactions by <type> image |

        Examples:
            | type   |
            | date   |
            | period |

    @LPT004
    @MX @backend(test)
    @web @ios @android @vbank @web-done @backend-smoke
    # Add delay to Loyalty_v0_points_balance_GET and loyalty_v0_rewards
    #UX-v06: 2.4.1.1
    Scenario: Shown transactions of points by periods
        Given a user with the following criteria
            | criteria          |
            | detail points     |
            | card with points  |
            | multi product     |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user accesses the card "with movements" details
        When the user displays "period" transaction tab
        Then the user sees the following items in the screen
            | item                |
            | period date         |
            | period balance      |
            | period transactions |
            | period payment type |

    @LPT005
    @MX @backend(test) @no-spherica
    @web @ios @android @vbank @web-done @backend-smoke
    @smokeTest
    # Add delay to Loyalty_v0_points_balance_GET and loyalty_v0_rewards
    #UX-v06: 3/3.1
    Scenario: Show the help of last transactions
        Given a user with the following criteria
            | criteria         |
            | loyalty points   |
            | single product   |
            | card with points |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        When the user access the help of last transactions
        Then the user sees the following items in the screen
            | item                         |
            | help modal description       |
            | understood help modal button |

    @LPT006
    @MX @backend(test) @no-spherica
    @web @ios @android @vbank @web-done @backend-smoke
    # Add delay to Loyalty_v0_points_balance_GET and loyalty_v0_rewards
    #UX-v06: 3/3.2
    Scenario: Show the help of how to use your points
        Given a user with the following criteria
            | criteria             |
            | loyalty points       |
            | single product       |
            | without transactions |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        When the user access the help of how to use your points
        Then the user sees the following items in the screen
            | item                         |
            | help modal description       |
            | understood help modal button |

    @LPT007
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    # Add delay to Loyalty_v0_points_balance_GET and loyalty_v0_rewards
    #UX-v06: Error 1
    Scenario: Error loading the list of transactions
        Given a user with the following criteria
            | criteria                |
            | loyalty points          |
            | error transactions list |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        When the user displays "period" transaction tab
        Then the user sees the following items in the screen
            | item                           |
            | list transactions error        |
            | list transactions retry button |

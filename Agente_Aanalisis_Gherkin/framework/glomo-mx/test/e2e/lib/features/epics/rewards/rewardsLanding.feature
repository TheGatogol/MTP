@rewards @rewardsLanding
Feature: Rewards - rewards landing

    @RWL001
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-192448
    # Add delay to loyalty_v0_rewards
    #UX-v03: 1/1.1 Access from dashboard
    Scenario Outline: Access to Rewards Landing from dashboard with <available_cards>
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | <available_cards> |
        When the user accesses to Rewards Landing
        Then the user sees the following items in the screen
            | item                        | value           |
            | header                      |                 |
            | Rewards landing Points      |                 |
            | Expire points               | <expire_points> |
            | Card module                 | <card_module>   |
            | Last Transactions Tooltip   | <expire_points> |
            | Loyalty Points Transactions | <expire_points> |

        Examples:
            | expire_points | card_module | available_cards |
            |               | not visible | single product  |
            | not visible   | visible     | multi product   |

    @RWL002
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-192448
    @smokeTest
    # Add delay to loyalty_v0_rewards
    ##UX-v03: 1/1.2  Access from sidebar
    Scenario Outline: Access to Rewards Landing from sidebar with <available_cards>
        Given a user with the following criteria
            | criteria          |
            | card with points  |
            | <available_cards> |
        And the user accesses to dashboard
        When the user accesses to "Rewards Landing" item located in the sidebar
        Then the user sees the following items in the screen
            | item                        | value           |
            | header                      |                 |
            | Rewards landing Points      |                 |
            | Expire points               | <expire_points> |
            | Card module                 | <card_module>   |
            | Last Transactions Tooltip   | <expire_points> |
            | Loyalty Points Transactions | <expire_points> |

        Examples:
            | expire_points | card_module | available_cards |
            |               | not visible | single product  |
            | not visible   | visible     | multi product   |

    @RWL003
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-192448
    # Add delay to loyalty_v0_rewards
    ##UX-v03: 3/3.1/3.1.3 Access the points detail
    Scenario: Access the points detail with a multi-product user
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
        And the user accesses to Rewards Landing
        When the user accesses to Landing of Points from one of the cards
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | available points detail |
            | date of expire detail   |
            | points to be expired    |
            | date transactions       |

    @RWL004
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-192448
    # Add delay to loyalty_v0_rewards
    ##UX-v03: 3/3.1/3.1.3 Access the points detail
    Scenario: Access the points detail from product detail
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
        And the user accesses to the "operative" "credit" card product detail
        When the user accesses to Landing of Points from one of the cards
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | available points detail |
            | date of expire detail   |
            | points to be expired    |
            | date transactions       |

    @RWL005
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-192448
    # Add delay to loyalty_v0_rewards
    ##UX-v03: 3/3.4
    Scenario: Access the points detail without points
        Given a user with the following criteria
            | criteria            |
            | card without points |
            | multi product       |
        And the user accesses to the "operative" "credit" card product detail
        When the user accesses to Landing of Points from one of the cards
        Then the user sees the following items in the screen
            | item                    | value       |
            | header                  |             |
            | available points detail |             |
            | date of expire detail   | not visible |
            | points to be expired    |             |
            | disclaimer              |             |

    @RWL006
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    @smokeTest
    @manual @JIRA.GLOMOMX-277630
    # Add delay to loyalty_v0_rewards
    ##UX-v03: 3/3.5
    Scenario: Close the global access notification to Point Landing
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to Landing of Points from one of the cards
        And the user goes back to orange card product detail
        When the user accesses to Landing of Points from one of the cards
        Then the user sees the following items in the screen
            | item                                    | value       |
            | disclaimer - global access notification | not visible |

    @RWL007
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    # Add delay to loyalty_v0_rewards
    #UX-v03: 5/5.1 & 5.2
    Scenario Outline: Use my points when <scenario>
        Given a user with the following criteria
            | criteria          |
            | <number_of_cards> |
        And the user accesses to Rewards Landing
        When the user uses use my points
        Then the user sees the following items in the screen
            | item            | value             |
            | header          |                   |
            | description     |                   |
            | points transfer | <points_transfer> |
            | points raffle   |                   |

        Examples:
            | scenario                 | number_of_cards | points_transfer |
            | there is only one card   | single product  | not visible     |
            | there are multiple cards | multi product   |                 |

    @RWL008
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    # Add delay to loyalty_v0_rewards
    #UX-v03: 5/5.3
    Scenario: Using my points with a Crea card
        Given a user with the following criteria
            | criteria       |
            | single product |
            | Crea card      |
        And the user accesses to Rewards Landing
        When the user uses use my points
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | info icon            |
            | how to use my points |
            | terms and conditions |
            | Understood           |

    @RWL009
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    # Add delay to loyalty_v0_rewards
    #UX-v03: 5/5.4
    Scenario: Faqs - Use my points
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | single product   |
        And the user accesses to Rewards Landing
        And the user uses use my points
        When the user accesses the faqs about using my points
        Then the user sees the following items in the screen
            | item                        |
            | header faqs using my points |
            | faqs using my points        |

    @RWL010
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    @tmpExclude @JIRA.GLOMOMX-192448
    #UX-v03: 7/7.1.1
    Scenario: Deploy the points to be expire in Rewards Landing
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | single product   |
            | loyalty points   |
        And the user accesses to Rewards Landing
        When the user deploys the points to be expire
        Then the user sees the following items in the screen
            | item                      |
            | points to be expired list |

    @RWL011
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-192448
    # Add delay to loyalty_v0_rewards
    #UX-v03: 7/7.1.1
    Scenario: Deploy the points to be expire in Landing of Points
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
        And the user accesses to Rewards Landing
        And the user accesses to Landing of Points from one of the cards
        When the user deploys the points to be expire
        Then the user sees the following items in the screen
            | item                      |
            | points to be expired list |

    @RWL012
    @ios @android @web @web-done @tmpExclude @JIRA.GLOMOMX-166513
    @MX @backend(artichoke) @vbank @vbank-modified
    # Add delay to loyalty_v0_rewards
    #UX-v03: 8/8.1
    Scenario: Access the help of how to collect points
        Given a user with the following criteria
            | criteria            |
            | card without points |
            | multi product       |
        And the user accesses to Rewards Landing
        When the user accesses help on how to collect points
        Then the user sees the following items in the screen
            | item                                |
            | info icon help modal                |
            | how to collect my points help modal |
            | terms and conditions modal          |
            | Understood Modal                    |
    @RWL013
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    # Add delay to loyalty_v0_rewards
    #UX-v03: 8/8.2
    Scenario: Access the general help of points
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
        And the user accesses to Rewards Landing
        When the user accesses the general help of points
        Then the user sees the following items in the screen
            | item        |
            | header faqs |
            | faqs        |

    @RWL014
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    #UX-v03: Error 1
    # Edit vbank record 17,glomo,_loyalty_v0_points_balances,GET,2.yml
    Scenario: Error accessing landing rewards
        Given a user with the following criteria
            | criteria             |
            | error loading points |
        When the user accesses to Rewards Landing
        Then the user sees the following items in the screen
            | item                   |
            | error available points |

    @RWL015
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    # Add delay to loyalty_v0_rewards
    #UX-v03: Error 2
    Scenario: Error when painting the cards module
        Given a user with the following criteria
            | criteria            |
            | error loading cards |
        When the user accesses to Rewards Landing
        Then the user sees the following items in the screen
            | item              |
            | error card module |

    @RWL016
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    @tmpExclude @JIRA.GLOMOMX-192448
    # Add delay to loyalty_v0_rewards
    #UX-v03: Error 3
    Scenario: Error loading the points to be to expire
        Given a user with the following criteria
            | criteria                       |
            | error loading points to expire |
        And the user accesses to Rewards Landing
        When the user deploys the points to be expire
        Then the user sees the following items in the screen
            | item                           |
            | error loading points to expire |

    @RWL017
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    #UX-v03: 5.2.1/5.2.1.1
    Scenario: Rewards landing to transfer points
        Given a user with the following criteria
            | criteria         |
            | reward landing   |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "1" points to target card
        When the user finishes the points transfer process
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | success operation icon        |
            | success operation information |
            | operation date                |
            | source card information       |
            | target card information       |
            | points transferred            |
            | operation type description    |
            | operation number              |
            | exit button                   |

    @RWL018
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    @smokeTest
    #UX-v03: 5.2.1/5.2.1.2
    Scenario: Rewards landing to transfer points without points
        Given a user with the following criteria
            | criteria         |
            | reward landing   |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "origin card from transfer" points
        When the user selects a origin card
        Then the user sees the following items in the screen
            | item                               |
            | modal icon without points          |
            | modal title without points         |
            | modal description without points   |
            | modal accept button without points |

    @RWL019
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    #UX-v03: Error 5
    Scenario:  Error user without points
        Given a user with the following criteria
            | criteria       |
            | reward landing |
        And the user accesses to Rewards Landing
        And the user uses use my points
        When the user selects raffle points
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | error title                  |
            | error text description       |
            | understood help modal button |

    @RWL020
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    #UX-v03: 5.2.2/ 5.2.2.1
    Scenario: Use my points with raffle when there is one card
        Given a user with the following criteria
            | criteria          |
            | single product    |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "one card raffle" points
        When the user accesses to the summary of the "total tickets" purchase
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | success operation icon        |
            | success operation information |
            | operation date                |
            | source card information       |
            | number of tickets purchased   |
            | raffles name                  |
            | total points used             |
            | total points left             |
            | operation type description    |
            | operation number              |
            | share button                  |
            | exit button                   |

    @RWL021
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    #UX-v03: 5.2.2/ 5.2.2.2
    Scenario: Use my points with raffle when there are multiple card
        Given a user with the following criteria
            | criteria          |
            | reward landing     |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        When the user accesses to the summary of the "total tickets" purchase
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | success operation icon        |
            | success operation information |
            | operation date                |
            | source card information       |
            | number of tickets purchased   |
            | raffles name                  |
            | total points used             |
            | total points left             |
            | operation type description    |
            | operation number              |
            | share button                  |
            | exit button                   |

    @RWL022
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    #UX-v03: Error 4
    Scenario: Error to loading raffle
        Given a user with the following criteria
            | criteria       |
            | reward landing |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "origin card from raffle" points
        When the user selects a origin card
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | panel content  |
            | image          |
            | button primary |

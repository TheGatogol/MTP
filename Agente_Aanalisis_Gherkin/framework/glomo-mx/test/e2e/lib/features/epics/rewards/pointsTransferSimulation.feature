@rewards @pointsTransferSimulation
Feature: Points transfer simulation

    @PTS001
    @MX @vbank
    @ios @android @web @web-done
    @backend(test) @backend-smoke
    Scenario Outline: Simulate the all points transfer when <description>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user transfer all "total points" to target card
        Then the user sees the following items in the screen
            | item                           | value       |
            | header                         |             |
            | source card information        |             |
            | target card collapsed step     |             |
            | target card change button      | <changeBtn> |
            | points transfer collapsed step |             |
            | confirm button                 |             |

        Examples:
            | description                       | criteria                          | changeBtn  |
            | only one possible target card     | only one possible target card     |  hidden    |
            | two or more possible target cards | two or more possible target cards |            |

    @PTS002
    @MX @vbank
    @ios @android @web @web-done
    @backend(test) @backend-smoke
    Scenario Outline: Simulate the specific points transfer when <description>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user transfer "1" points to target card
        Then the user sees the following items in the screen
            | item                           | value       |
            | header                         |             |
            | source card information        |             |
            | target card collapsed step     |             |
            | target card change button      | <changeBtn> |
            | points transfer collapsed step |             |
            | confirm button                 |             |

        Examples:
            | description                       | criteria                          | changeBtn |
            | only one possible target card     | only one possible target card     | hidden    |
            | two or more possible target cards | two or more possible target cards |           |

    @PTS003
    @ios @android @web @web-done
    @smokeTest @backend-smoke
    @MX @backend(test) @vbank
    Scenario: Simulate the points transfer when target card is selected from my cards
        Given a user with the following criteria
            | criteria                           |
            | four or more possible target cards |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user selects the target card to transfer points from all my cards
        Then the user sees the following items in the screen
            | item                       | value   |
            | header                     |         |
            | source card information    |         |
            | target card collapsed step |         |
            | points transfer area       | enabled |

    @PTS004
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario: Transfer the points when are no points in source card
        Given a user with the following criteria
            | criteria    |
            | two product |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "origin card from transfer" points
        When the user selects a origin card
        Then the user sees error modal of that not have enough points

    @PTS005
    @MX @vbank @backend(test)
    @ios @android @web @web-done @backend-smoke
    Scenario Outline: Show whether or not the link for all cards is displayed <description>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to Rewards Landing
        And the user uses use my points
        When the user accesses to "transfer" points
        Then the user sees the following items in the screen
            | item           | value     |
            | all cards link | <visible> |

        Examples:
            | description                        | criteria                           | visible |
            | only one possible target card      | only one possible target card      | hidden  |
            | three possible target cards        | two or more possible target cards  | hidden  |
            | four or more possible target cards | four or more possible target cards |         |

    @PTS006
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario Outline: Show my bbva cards screen - <criteria>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user accesses all cards
        Then the user sees the following items in the screen
            | item              | value    |
            | header title      |          |
            | close button      |          |
            | card title        |          |
            | card number       |          |
            | card amount       |          |
            | card amount label |          |
            | info box          | <status> |
            | exit button       |          |

        Examples:
            | criteria                                | status   |
            | more cards with points with off status  | enabled  |
            | more cards with points at least one off | enabled  |
            | various points                          | disabled |

    @PTS007
    @MX @vbank
    @ios @android @web
    @web-done @backend(test) @backend-smoke
    Scenario Outline: Insert a amount <description>
        Given a user with the following criteria
            | criteria                           |
            | four or more possible target cards |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user fills amount of "<amountSelected>" to transfer to target card
        Then the user sees the following items in the screen
            | item              | value    |
            | information error | <error>  |
            | continue button   | <status> |

        Examples:
            | description                                                    | amountSelected | status   | error  |
            | greater than zero and less than or equal to source card points | 500            |          | hidden |
            | equal zero                                                     | 0              | disabled | hidden |
            | greater than the source card points                            | 8005           | disabled |        |

    @PTS008
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario: Show the options to keep or change target card
        Given a user with the following criteria
            | criteria                           |
            | four or more possible target cards |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user selects the target card to points transfer
        When the user selects change "target card"
        Then the user sees the section of target card change

    @PTS009
    @MX @vbank @backend(test)
    @ios @android @web @web-done @backend-smoke
    Scenario Outline: Confirm change of target card when there are <description>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user selects the target card to points transfer
        When the user changes to step "target card" and confirm the card change
        Then the user sees the following items in the screen
            | item                    | value     |
            | source card information |           |
            | all cards link          | <visible> |
            | points transfer area    | disabled  |

        Examples:
            | description                        | criteria                           | visible |
            | three possible target cards        | two or more possible target cards  | hidden  |
            | four or more possible target cards | four or more possible target cards |         |

    @PTS010
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario: Keep the target card
        Given a user with the following criteria
            | criteria                          |
            | two or more possible target cards |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user selects the target card to points transfer
        When the user changes to step "target card" and keep the card change
        Then the user sees the following items in the screen
            | item                           | value |
            | header                         |       |
            | source card information        |       |
            | target card collapsed step     |       |
            | target card change button      |       |
            | points transfer collapsed step |       |
            | confirm button                 |       |

    @PTS011
    @MX @vbank @backend(test)
    @ios @android @web @web-done @backend-smoke
    Scenario Outline: Change amount of points selected when <description>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer all "total points" to target card
        When the user selects change "points to transfer"
        Then the user sees the following items in the screen
            | item                          | value       |
            | source card information       |             |
            | target card collapsed step    |             |
            | target card change button     | <changeBtn> |
            | points transfer area          | enabled     |
            | points information disclaimer |             |
            | continue button               |             |

        Examples:
            | description                       | criteria                          | changeBtn |
            | only one possible target card     | only one possible target card     | hidden    |
            | two or more possible target cards | two or more possible target cards |           |

    @PTS012
    @ios @android @web @web-done
    @MX @backend(test) @vbank @backend-smoke
    Scenario: Close points transfer operation with steps collapsed
        Given a user with the following criteria
            | criteria                          |
            | two or more possible target cards |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user selects the target card to points transfer
        When the user closes the current operative
        Then the user sees the "small" close confirmation modal

    @PTS013
    @MX
    @ios @android @web @web-done
    @vbank @backend(test) @backend-smoke
    Scenario Outline: Check state <criteria> in bbva cards screen
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user accesses all cards
        Then the user sees the following items in the screen
            | item     | value    |
            | off card | disabled |

        Examples:
            | criteria                               |
            | more cards with points with off status |

    @PTS014
    @MX @vbank @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Transfer points when source card <description>
        Given a user with the following criteria
            | criteria |
            | <card>   |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "origin card from transfer" points
        When the user selects a origin card
        Then the user sees a "small" modal with the following elements:
            | item          |
            | icon          |
            | title         |
            | description   |
            | accept button |

        Examples:
            | description                         | card                              |
            | is powered off                      | cards with points with off status |
            | is inoperative                      | cards with points with off status |
            | has a different status of operative | cards with points with off status |

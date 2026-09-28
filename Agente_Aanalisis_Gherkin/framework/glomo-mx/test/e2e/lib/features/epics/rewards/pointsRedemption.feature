@rewards @pointsRedemption
Feature: Points redemption

    @PRS001
    @smokeTest
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Successful simulation purchase according to client's points
        Given a user with the following criteria
            | criteria                                             |
            | two or more possible target cards to points transfer |
            | card with enough points to buy raffle                |
        And the user accesses to Rewards Landing
        And the user uses use my points
        When the user accesses to "multi cards raffle" points
        Then the user sees the following items in the screen
            | item                                    |
            | header                                  |
            | panel info                              |
            | characteristics step without collapsing |
            | confirm participation                   |

    @PRS002
    @ios @android @web @web-done
    @smokeTest
    @MX @backend(artichoke) @vbank
    Scenario: Successful purchase of the maximum tickets possible according to client's points
        Given a user with the following criteria
            | criteria                                             |
            | two or more possible target cards to points transfer |
            | card with enough points to buy raffle                |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        When the user accesses to the summary of the "total tickets" purchase
        Then the user sees the following items in the screen
            | item                          | value   |
            | header                        |         |
            | success operation icon        |         |
            | success operation information |         |
            | operation date                |         |
            | source card information       |         |
            | number of tickets purchased   |         |
            | raffles name                  |         |
            | total points used             |         |
            | total points left             |         |
            | operation type description    |         |
            | operation number              |         |
            | share button                  |         |
            | exit button                   | enabled |

    @PRS003
    @MX @vbank
    @web @ios @android @web-done
    @backend(artichoke)
    Scenario: No tickets purchase allowed when crea card
        Given a user with the following criteria
            | criteria                                                     |
            | crea card with points and cut-off and expire points reported |
        And the user accesses to Rewards Landing
        When the user uses use my points
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | info icon            |
            | how to use my points |
            | terms and conditions |
            | Understood           |

    @PRS004
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Show the confirmation modal for exiting the operation when the user participates raffle
        Given a user with the following criteria
            | criteria                                             |
            | two or more possible target cards to points transfer |
            | card with enough points to buy raffle                |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        And the user participates in the raffle
        When the user closes the current operative
        Then the user sees the "small" close confirmation modal

    @PRS005
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Error while entering more tickets than client is allowed to purchase
        Given a user with the following criteria
            | criteria                                             |
            | two or more possible target cards to points transfer |
            | card with enough points to buy raffle                |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        When the user buys more tickets than allowed with "card with more one ticket to buy"
        Then the user sees the following items in the screen
            | item                           | value    |
            | characteristics step collapsed |          |
            | information error              |          |
            | continue button                | disabled |

    @PRS006
    @MX @vbank
    @web @ios @android @web-done
    Scenario Outline: Show modal of insufficient points when <description>
        Given a user with the following criteria
            | criteria   |
            | <criteria> |
        And the user accesses to Rewards Landing
        And the user uses use my points
        When the user selects raffle points
        Then the user sees a "small" modal with the following elements:
            | item          |
            | icon          |
            | title         |
            | description   |
            | accept button |

        @backend(artichoke)
        Examples:
            | description                                         | criteria                                     |
            | the card does not have points to buy tickets        | card with zero current points to buy tickets |
            | the card does not have enough points to buy tickets | card without enough points to buy tickets    |

    @PRS007
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Show the modal error when simulation fail one time
        Given a user with the following criteria
            | criteria                                  |
            | card with enough points to buy raffle     |
            | 1 attempts error in redemption simulation |
        And the user accesses to Rewards Landing
        And the user uses use my points
        When the user selects raffle points
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | error title            |
            | error text description |

    @PRS008
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Show the modal error definitive when simulation fails more than 3 times
        Given a user with the following criteria
            | criteria                                            |
            | card with enough points to buy raffle               |
            | more than 3 attempts error in redemption simulation |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user selects raffle points
        When the user retries "1" times big help modal
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | error title            |
            | error text description |

    @PRS009
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank @vbank-modified
    @no-spherica
    # Force error to fail raffle
    Scenario: Show the modal error when purchase fail one time
        Given a user with the following criteria
            | criteria                                      |
            | card with enough points to buy raffle         |
            | 1 attempted error in the redemption execution |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        When the user selects "total tickets" and confirms the purchase
        Then the user sees a "small" modal with the following elements:
            | item         |
            | retry button |
            | exit button  |

    @PRS010
    @web @ios @android @web-done
    @MX @backend(test) @vbank
    @no-spherica
    #in the yml (vbank) file containing the response from the execution of the redemption service add a 2s delay
    Scenario: Show the modal error definitive when purchase fails more than 3 times
        Given a user with the following criteria
            | criteria       |
            | reward landing |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        And the user selects "total tickets" and confirms the purchase
        When the user retries "2" times
        Then the user sees a "big" modal with the following elements:
            | item        |
            | call button |
            | exit button |

    @PRS011
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Status of the other quantity option when only one ticket maximum possible to purchase
        Given a user with the following criteria
            | criteria                                      |
            | card with enough points to buy raffle         |
            | 1 attempted error in the redemption execution |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        When the user participates in the raffle
        Then the user sees the following items in the screen
            | item              | value    |
            | total tickets     |          |
            | other quantity    | disabled |

    @PRS012
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Viewing the FAQs of points redemption
        Given a user with the following criteria
            | criteria                                             |
            | two or more possible target cards to points transfer |
            | card with enough points to buy raffle                |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        When the user selects FAQs icon on the header while in multistep
        Then the user sees the following items in the screen
            | item                    |
            | FAQs title              |
            | Points redemption title |
            | Questions list          |

    @PRS013
    @ios @android @web @web-done
    @MX @backend(artichoke) @vbank
    Scenario: Viewing an answer to a FAQ
        Given a user with the following criteria
            | criteria                                             |
            | two or more possible target cards to points transfer |
            | card with enough points to buy raffle                |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        And the user selects FAQs icon on the header while in multistep
        When the user accesses to some question
        Then the user sees a "big" modal with the following elements:
            | item                    |
            | Points redemption title |
            | close                   |
            | Question title          |
            | Answer                  |

    @PRS014
    @web @ios @android @web-done
    @MX @backend(artichoke) @vbank
    Scenario Outline: Not allowing user to enter tickets with decimals with <description>
        Given a user with the following criteria
            | criteria                                             |
            | two or more possible target cards to points transfer |
            | card with enough points to buy raffle                |
        And the user accesses to Rewards Landing
        And the analytics interceptor service is initiated
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        And the user participates in the raffle
        When the user selects "other quantity" and tries to fill in "<value>" tickets
        Then the "<value>" value are not allowed in the text box so they are not filled in with them

        Examples:
            | description | value |
            | point       | 1.    |
            | comma       | 1,    |

    @PRS015
    @MX @vbank
    @web @ios @android @web-done @backend(test)
    Scenario: Show modal of expired raffle
        Given a user with the following criteria
            | criteria       |
            | reward landing |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "origin card from raffle" points
        When the user selects a origin card
        Then the user sees the following items in the screen
            | item                                |
            | header                              |
            | modal icon inactive raffle          |
            | modal title inactive raffle         |
            | modal description inactive raffle   |
            | modal accept button inactive raffle |

    @PRS016 @vbank
    @MX @web @android @ios
    @web-done
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Close operation raffle
        Given a user with the following criteria
            | criteria          |
            | points redemption |
            | points off        |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        When the user close raffle of points
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | image card     |
            | product        |
            | button primary |

    @PRS017 @vbank
    @MX @web @android @ios
    @web-done
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Validate button continue participate raffle
        Given a user with the following criteria
            | criteria          |
            | points redemption |
            | points off        |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        When the user participates with of "total tickets" purchase
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | panel characteristics |
            | panel share           |

    @PRS018 @vbank
    @MX @web @android @ios
    @web-done
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Validate consult terms
        Given a user with the following criteria
            | criteria          |
            | points redemption |
            | points off        |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        And the user accesses the summary screen of the "total tickets"
        When the user consult terms and conditionals in screen summary
        Then the user sees the following items in the screen
            | item                       |
            | PDF terms and conditions   |
            | Check terms and conditions |

    @PRS019 @vbank
    @MX @web @android @ios
    @web-done
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Change number of points
        Given a user with the following criteria
            | criteria          |
            | points redemption |
            | points off        |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        And the user accesses the summary screen of the "total tickets"
        When the user select change points amount and introduces "25" points
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | panel characteristics |
            | panel share           |

    @PRS020 @vbank
    @MX @web @android @ios
    @web-done
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Amount points invalidate
        Given a user with the following criteria
            | criteria          |
            | points redemption |
            | points off        |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        And the user accesses the summary screen of the "total tickets"
        When the user select change points amount and introduces invalidate amount "4999"
        Then the user sees the following items in the screen
            | item              |
            | information error |

    @PRS021 @vbank
    @MX @web @android @ios
    @web-done
    @backend(test)
    @alternate-scenarios-smoke
    Scenario Outline: Validate <case>
        Given a user with the following criteria
            | criteria          |
            | points redemption |
            | points off        |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "multi cards raffle" points
        And the user selects FAQs icon on the header while in multistep
        When the user access frequently question "<question>"
        Then the user sees a modal with the following elements:
            | item         |
            | Header       |
            | title        |
            | Close button |
            | Description  |
        Examples:
            | case                               | question |
            | faq is there a participation limit | two      |
            | aq who can participate             | three    |
            | faq raffle with debit card         | four     |

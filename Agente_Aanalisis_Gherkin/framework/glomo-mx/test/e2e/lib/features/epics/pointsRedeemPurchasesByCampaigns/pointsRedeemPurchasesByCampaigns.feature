@PointsRedeemPurchasesByCampaigns

Feature: Loyalty Points Redeem Purchases By Campaigns

    @LRC001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done @smokeTest
    Scenario Outline: The user accesses a notification detail and pays with points for a <type> transaction
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        And the user completes a payment with points for a "<type>" transaction
        When the user closes the success screen
        Then the user sees the "notification center" screen

        Examples:
            | type         |
            | posted       |
            | in transit   |

    @LRC002
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario Outline: The user accesses a notification detail and opens the <action> modal for a <type> transaction
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        And the user opens the "<action>" modal for a "<type>" transaction
        When the user closes the "<action>" points modal
        Then the user sees the following items in the screen
            | item                                              |
            | header pay with points                            |
            | help button                                       |
            | close button                                      |
            | text your points are worth more on this purchase  |
            | text you have available                           |
            | text with benefit they are worth                  |
            | text without benefit they would be worth          |
            | purchase detail                                   |
            | show details link                                 |
            | pay with points button                            |

        Examples:
            | type         | action       |
            | posted       | show details |
            | in transit   | show details |

    @LRC003
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user accesses the pay with points flow and closes it without completing the transaction.
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        When the user exits the pay with points flow without completing the transaction
        Then the user sees the "notification center" screen

    @LRC004
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: The user accesses points and promotions
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        And the user completes a payment with points for a "posted" transaction
        When the user accesses points and promotions
        Then the user sees the "promotions landing" screen

    @LRC005
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario Outline: The user opens the notification detail and reviews the modal for <type>
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        When the user accesses the pay with points detail notification
        Then the user sees the following items in the screen
            | item                          |
            | header modal pay with points  |
            | close button modal            |
            | icon modal                    |
            | text title modal              |
            | text description modal        |

        Examples:
            | type                              |
            | benefit applied                   |
            | benefit expired                   |
            | applied to another purchase       |
            | clarification already submitted   |
            | clarification request             |

    @LRC006
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario Outline: The user accesses the notification detail and views the help content for <type>
        Given a user with the following criteria
            | criteria                              |
            | points redeem purchases by campaign   |
        And the user accesses center notification
        And the user accesses the pay with points detail notification
        When the user accesses the help section and selects "<type>"
        Then the user sees the following items in the screen
            | item                  |
            | <item_text>           |
            | <secondary_item_text> |

        Examples:
            | type                          | item_text                 | secondary_item_text   |
            | what do my points mean        | bbva points               | full purchase         |
            | what happens to my balance    | equivalent amount         | empty                 |
            | value of points               | value may vary            | empty                 |
            | point reflection timing       | purchase you just made    | transaction in transit|
            | application timing            | depending on days passed  | usually 1-5 days      |

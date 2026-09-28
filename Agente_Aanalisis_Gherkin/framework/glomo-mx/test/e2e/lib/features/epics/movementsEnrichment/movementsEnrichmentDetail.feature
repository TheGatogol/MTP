@movementsEnrichmentDetail
Feature: Movements Enrichment Detail

    @MED001
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario Outline: View the details of a <type> movement with credit card holder
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "purchase transaction" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                          | value    |
            | header                        | visible  |
            | button back                   | visible  |
            | clarifications button         | visible  |
            | operation type title          | visible  |
            | operation type value          | visible  |
            | card used title               | <state1> |
            | additional card value         | <state2> |
            | amount pay with card title    | <state3> |
            | amount pay with points title  | <state4> |
            | amount foreign currency title | <state5> |
            | amount local currency title   | <state6> |
            | points used title             | <state7> |
            | points earned title           | <state8> |
            | card termination title        | visible  |

        Examples:
            | type                      | state1  | state2  | state3  | state4  | state5  | state6  | state7  | state8  |
            | ordinary purchase         | visible | visible | hidden  | hidden  | hidden  | hidden  | hidden  | hidden  |
            | full points purchase      | visible | visible | visible | visible | hidden  | hidden  | visible | hidden  |
            | mixed purchase            | hidden  | hidden  | visible | visible | hidden  | hidden  | visible | visible |
            | foreign currency purchase | hidden  | hidden  | hidden  | hidden  | visible | visible | hidden  | visible |

    @MED002
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: View the details of a refund movement with credit card holder
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "refund transaction" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | button back            |
            | operation type title   |
            | operation type value   |
            | concept title          |
            | operation date title   |
            | card termination title |

    @MED003
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario: View details of an installment payment transaction
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "credit card installment transaction" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | button back            |
            | operation type title   |
            | operation type value   |
            | card termination title |

    @MED004
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    @smokeTest
    Scenario: View details of a movement in transit
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "in transit transaction" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | button back          |
            | in transit label     |
            | in transit button    |
            | operation type title |
            | operation type value |

    @MED005
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario Outline: View details of a transaction paid with a <type> card using TDC
        Given a user with the following criteria
            | criteria                                          |
            | additional credit card with enrichments movements |
        And the user accesses to additional card detail from additional
        When the user selects a "purchase transaction" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                    | value    |
            | header                  | visible  |
            | button back             | visible  |
            | clarifications button   | visible  |
            | operation type title    | visible  |
            | operation type value    | visible  |
            | physical purchase value | <state1> |
            | digital purchase value  | <state2> |

        Examples:
            | type     | state1  | state2  |
            | digital  | hidden  | visible |
            | physical | visible | hidden  |

    @MED006
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: View details of a withdrawal transaction in <type> with TDC
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "cash withdrawal transaction" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                         | value    |
            | header                       | visible  |
            | button back                  | visible  |
            | operation type title         | visible  |
            | cash withdrawal value        | <state1> |
            | branch cash withdrawal value | <state2> |
            | charged amount title         | <state3> |
            | withdrawn amount title       | <state4> |
            | card termination title       | visible  |

        Examples:
            | type                                  | state1  | state2  | state3  | state4  |
            | cash withdrawal                       | visible | hidden  | hidden  | hidden  |
            | cash withdrawal with foreign currency | visible | hidden  | visible | visible |
            | cash withdrawal in branches           | hidden  | visible | hidden  | hidden  |

    @MED007
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario Outline: View details of a <type> movement in essential mode
        Given a user with the following criteria
            | criteria                                             |
            | credit card stand in mode with enrichments movements |
        And the user accesses to "operative" "credit" card detail in stand in mode
        When the user selects a "purchase transaction" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                   | value    |
            | header                 | visible  |
            | button back            | visible  |
            | date main panel        | visible  |
            | description title      | <state1> |
            | card termination title | visible  |

        Examples:
            | type         | state1  |
            | purchase     | visible |
            | spei payment | hidden  |

    @MED008
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario: View the details of an uncategorized movement with credit card holder
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the user selects a "in transit transaction" movement in "credit" transaction
        When the user opens in transit info modal
        Then the user sees the following items in the screen
            | item                  |
            | info modal in transit |

    @MED009
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Validate that promotional activity is displayed installment transfer promotion
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "uncategorized transaction" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | concept main panel |
            | date main panel    |
            | amount main panel  |

    @MED010
    @MX
    @vbank
    @backend(test)
    @web @ios @android
    @web-done
    Scenario: Validate error when the details of a transaction are not loaded
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "purchase transaction" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | error message detail |

    @MED011
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Validate that the merchant address is copied to the clipboard when clicks on the copy button
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the user selects a "physical purchase" movement in "credit" transaction
        And the user opens the merchant location map
        When the user copies the merchant address
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | button back            |
            | dynamic map            |
            | address copy link      |
            | address copied message |

    @MED012
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Validate that moviment details are displayed when expandable is clicked
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "physical purchase" movement in "credit" transaction
        And the user expands detail information
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | concept main panel |
            | date main panel    |
            | amount main panel  |

    @MED013
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: Validate that the merchant have <type> information in merchant details
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the user selects a "<purchase type>" movement in "credit" transaction
        And the user opens the merchant location map
        When the user opens merchant details
        Then the user sees the following items in the screen
            | item                         | value    |
            | merchant detail header       | visible  |
            | merchant detail close button | visible  |
            | call merchant button         | <state1> |
            | go to website button         | <state2> |
            | title info panel             | <state3> |
            | without info                 | <state4> |

        Examples:
            | type    | purchase type     | state1  | state2  | state3  | state4  |
            | data    | physical purchase | visible | visible | visible | hidden  |
            | no data | physical purchase | hidden  | hidden  | hidden  | visible |

    @MED014
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Validate that the merchant detail is not available
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the user selects a "physical purchase" movement in "credit" transaction
        When the user opens the merchant location map
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | button back |
            | dynamic map |

@moreCardInformation
Feature: MoreCardInformation

    @MCI001
    @MX
    @web @android @ios
    @web-done
    @vbank
    @smokeTest
    Scenario Outline: Access to more info - See "<cardType>" card detail "<alias>"
        Given a user with the following criteria
            | criteria        |
            | <cardType> card |
            | <alias>         |
        And the user accesses to the "<alias>" "<cardType>" card product detail
        When the user accesses to detail information card
        Then the user sees the following items in the screen
            | item                       | value      |
            | Card Image More Info       |            |
            | Card Number More Info      |            |
            | Card Date                  |            |
            | Card Holder Name           |            |
            | Card Type Label            |            |
            | Card Type Value            |            |
            | Card Alias Label           | <visible>  |
            | Card Alias Value           | <visible>  |
            | Associate Products Label   |            |
            | Associate Products Value   |            |
            | Card Number Label          |            |
            | Card Number Value          |            |
            | Card Date Label            |            |
            | Card Date Value            |            |
            | Card Holder Label          |            |
            | Card Holder Value          |            |
            | Credit Limit Label         | <visible1> |
            | Credit Limit Value         | <visible1> |
            | Copy button                |            |
            | Annuity Label              | <visible1> |
            | Annuity Value              | <visible1> |
            | Collection Expenses Label  | <visible1> |
            | Collection Expenses Value  | <visible1> |
            | Replacement Label          | <visible1> |
            | Replacement Value          | <visible1> |
        @backend(artichoke)
        Examples:
            | alias         | visible     | cardType | visible1    |
            | with alias    | visible     | credit   | visible     |
            | with alias    | visible     | debit    | not visible |
            | without alias | not visible | credit   | visible     |
            | without alias | not visible | debit    | not visible |

    @MCI002
    @web @android @ios
    @web-done
    @vbank
    @MX @backend(artichoke)
    Scenario: Access to more info - Copy Pan Number
        Given a user with the following criteria
            | criteria    |
            | credit card |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to detail information card
        When the user copies pan number card
        Then the user sees the following items in the screen
            | item        |
            | green toast more info |

    @MCI003
    @MX
    @web @android @ios
    @web-done
    @vbank
    Scenario Outline: Access to more info - See "<paymentMethod>" payment method
        Given a user with the following criteria
            | criteria        |
            | <paymentMethod> |
        And the user accesses to the "<paymentMethod>" "credit" card product detail
        When the user accesses to detail information card
        Then the user sees the following items in the screen
            | item                 |
            | Payment Method Label |
            | Payment Method Value |

        @backend(artichoke)
        Examples:
            | paymentMethod          |
            | total amount payment   |
            | minimum amount payment |

    @MCI004
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Access to payment detail
        Given a user with the following criteria
            | criteria         |
            | detail card      |
            | more information |
        And the user accesses to the "operative" "credit" card product detail
        When the user access to "payment detail"
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | info card bar |
            | security bar  |

    @MCI005
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Access to payment detail and close modal screen
        Given a user with the following criteria
            | criteria         |
            | detail card      |
            | more information |
        And the user accesses to the "operative" "credit" card product detail
        When the user access to "payment detail and close the modal"
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | info card bar |
            | security bar  |

    @MCI006
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Select card - copy card number
        Given a user with the following criteria
            | criteria         |
            | detail card      |
            | more information |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to more information card
        When the user accesses to copy card number
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | info card bar |
            | security bar  |

    @MCI007
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Access card detail - copy card number
        Given a user with the following criteria
            | criteria         |
            | detail card      |
            | more information |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to detail information card
        When the user copies pan number card
        Then the user sees the following items in the screen
            | item                  |
            | Card Image More Info  |
            | Card Number More Info |
            | card Date             |
            | card Holder Name      |
            | card Type Label       |

    @MCI008
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario Outline: Validate card with <status>
        Given a user with the following criteria
            | criteria    |
            | more card   |
            | credit card |
            | <status>    |
        When the user accesses to the "operative" "credit" card product detail
        Then the user sees the following items in the screen
            | item               | value      |
            | status description | <visible>  |
            | status title       | <visible>  |
            | minus label        |            |

        Examples:
            |status                  | visible     |
            | minimum payment        | invisible   |
            | payment date expired   | visible     |
            | unexpired payment date | visible     |
            | overdraft card         | visible     |
            | without accounts       | invisible   |

    @MCI009
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Validate simulate interest
        Given a user with the following criteria
            | criteria         |
            | credit card      |
            | status operative |
        And the user accesses to the "operative" "credit" card product detail
        When the user access to "simulate interests"
        Then the user sees the following items in the screen
            | item              |
            | onboarding header |
            | slider 1          |
            | icon interest     |

    @MCI010
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Modal favour balance
        Given a user with the following criteria
            | criteria                 |
            | credit card              |
            | status balance in favour |
        And the user accesses to the "balance in favour" "credit" card product detail
        When the user accesses to link of balance in favour
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | info card bar |
            | security bar  |

    @MCI011
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Validate account status screen
        Given a user with the following criteria
            | criteria     |
            | cost control |
            | credit card  |
        And the user accesses to the "operative" "credit" card product detail
        When the user access to "account status"
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | close button |
            | text card    |

    @MCI012
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Validate expenses control screen
        Given a user with the following criteria
            | criteria         |
            | cost control     |
            | more information |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects expense control
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | help button |
            | atm button  |

    @MCI013
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    @manual @JIRA.GLOMOMX-127285
    Scenario: Validate lock and reset screen
        Given a user with the following criteria
            | criteria         |
            | detail card      |
            | more information |
        And the user accesses to the "operative" "credit" card product detail
        When the user locks and reboots
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | card number        |
            | detail card action |

    @MCI014
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Validate when the user pays card
        Given a user with the following criteria
            | criteria         |
            | credit card      |
            | status operative |
        And the user accesses to the "operative" "credit" card product detail
        When the user access to "pay card"
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | card to pay |
            | amount      |

    @MCI015
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Validate button edit alias
        Given a user with the following criteria
            | criteria         |
            | detail card      |
            | more information |
        And the user accesses to the "operative" "credit" card product detail
        When the user accesses the edit alias
        Then the user sees the following items in the screen
            | item           |
            | header main     |
            | input alias    |
            | save alias btn |

    @MCI016
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Validate error message movements credit card
        Given a user with the following criteria
            | criteria     |
            | status error |
            | credit card  |
        And the user accesses to the "operative" "credit" card product details
        When the user retries "2"
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | retry link  |
            | modal error |

    @MCI017
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario Outline: Validate when the user turns the card "<onOff>" to "<cardType>"
        Given a user with the following criteria
            | criteria        |
            | <cardType> card |
            | status off      |
        And the user accesses to the "operative" "<cardType>" card product detail
        When the user "successfully" turns "<onOff>" the card
        Then the user sees the following items in the screen
            | item               | value    |
            | header             |          |
            | status description | <state1> |
            | switch off         | <state2> |

        Examples:
            | onOff | state1    | state2    | cardType |
            | off   | visable   | invisible | credit   |
            | on    | invisible | visible   | credit   |
            | off   | visable   | invisible | debit    |
            | on    | invisible | visible   | debit    |

    @MCI018
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario Outline: Validate activation digital card "<product>"
        Given a user with the following criteria
            | criteria       |
            | <product> card |
            | <cardType>     |
            | orange card    |
        And the user accesses to the "operative" "<product>" card product detail
        When the user access to "activate digital card"
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | imagin header  |
            | text header    |
            | digital button |

        Examples:
            | cardType                  | product |
            | status remittance pending | debit   |
            | payment date expired      | credit  |

    @MCI019
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Validate functionality of the buy with digital card operation
        Given a user with the following criteria
            | criteria         |
            | cost control     |
            | more information |
        And the user accesses to the "operative" "credit" card product detail
        When the user access to "buy with a digital card"
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | copy button |
            | view button |

    @MCI020
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Validate error message credit card
        Given a user with the following criteria
            | criteria     |
            | credit card  |
            | status error |
        And the user accesses to the "operative" "credit" card product details
        When the user retries "1"
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | retry link  |
            | modal error |

    @MCI021
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    @manual @JIRA.GLOMOMX-127285
    Scenario: Validate card screen, when you have an ILC offer.
        Given a user with the following criteria
            | criteria         |
            | detail card      |
            | more information |
        And the user accesses to the "operative" "credit" card product detail
        When the user accesses to increase your line of credit screen
        Then the user sees the following items in the screen
            | item          |
            | header        |
            | info card bar |
            | security bar  |

    @MCI022
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario Outline: Validate debit card status "<cardType>"
        Given a user with the following criteria
            | criteria   |
            | debit card |
            | more card  |
            | <cardType> |
        When the user accesses to the "operative" "debit" card product detail
        Then the user sees the following items in the screen
            | item               | value     |
            | inactive label     | <status>  |
            | inactive status    | <status>  |
            | header             | enable    |
            | detail card action | visible   |
            | alias value        | enable    |

        Examples:
            | cardType                  | status    |
            | status pending activation | enable    |
            | status remittance pending | invisible |
            | status pending delivery   | enable    |

    @MCI023
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Validate button turn off debit
        Given a user with the following criteria
            | criteria         |
            | debit card       |
            | status operative |
        And the user accesses to the "operative" "debit" card product detail
        When the user turns "off" the card
        Then the user sees the following items in the screen
            | item         |
            | title modal  |
            | turn on link |

    @MCI024
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test)
    Scenario: Validate button "on" "debit" card
        Given a user with the following criteria
            | criteria         |
            | debit card       |
            | status operative |
        And the user accesses to the "operative" "debit" card product detail
        When the user turns "on" the card
        Then the user sees the following items in the screen
            | item         |
            | title modal  |
            | turn on link |

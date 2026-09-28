@orangeCardProductDetail
Feature: OrangeCardProductDetail

    #Security module
    @OCPD001
    @MX
    @web @android @ios
    @vbank
    @web-done
    @smokeTest
    @backend-smoke
    @backend(test)
    Scenario Outline: Access to security module for <cardtype> credit card
        Given a user with the following criteria
            | criteria    |
            | credit card |
            | <cardtype>  |
        When the user accesses to the "<status>" "credit" card product detail
        Then the user sees the following items in the screen
            | item                         | value    |
            | OnOff action                 | <state1> |
            | Generate digital card action | enable   |
            | Digital card payment         | <state2> |
            | Pan number                   | enable   |
            | Expiration date value        | enable   |
            | Card alias                   | enable   |
            | Available amount value       | enable   |
            | Available amount label       | enable   |
            | Disposed amount value        | enable   |
            | Disposed amount label        | enable   |
            | Balance label                | <state3> |
            | Balance value                | <state3> |

        Examples:
            | cardtype                   | status              | state1    | state2    | state3  |
            | status operative           | operative           | enable    | invisible | disable |
            | status inoperative         | inoperative         | disable   | invisible | disable |
            | status pending delivery    | pending delivery    | disable   | invisible | disable |
            | status pending embossing   | pending embossing   | enable    | invisible | disable |
            | status off                 | operative           | enable    | invisible | enable  |
            | status blocked             | blocked             | disable   | disable   | disable |
            | status expired             | expired             | disable   | invisible | disable |
            | status overdraft           | overdraft           | invisible | disable   | disable |
            | status virtual association | virtual association | enable    | enable    | disable |
            | status balance in favour   | balance in favour   | enable    | invisible | enable  |

    @OCPD002
    @MX
    @web @android @ios
    @web-done
    @vbank
    @smokeTest
    @backend-smoke
    @backend(test)
    Scenario Outline: Access to security module for <card_type> debit card
        Given a user with the following criteria
            | criteria    |
            | debit card  |
            | orange card |
            | <card_type> |
        When the user accesses to the "<status>" "debit" card product detail
        Then the user sees the following items in the screen
            | item                             | value    |
            | OnOff action                     | <state1> |
            | Generate digital card action     | enable   |
            | Digital card payment             |          |
            | Card image                       | <state2> |
            | Pan number                       |          |
            | Expiration date label            | enable   |
            | Expiration date value            | enable   |
            | Card alias                       | enable   |
            | Current available amount label   |          |
            | Current available balance amount |          |
            | Status title                     | <state3> |
            | Status description               | <state3> |
            | Associated Account Label         |          |
            | Associated Account Value         |          |

        Examples:
            | card_type                     | status              | state1  | state2  | state3    |
            | status operative              | operative           | enable  | enable  | invisible |
            | status inoperative            | inoperative         | disable | enable  | enable    |
            | status pending delivery       | pending delivery    | disable | disable | enable    |
            | status off                    | operative           | enable  | enable  | enable    |
            | status blocked                | blocked             | disable | enable  | enable    |
            | status virtual association    | virtual association | enable  | enable  | invisible |
            | status no virtual association | operative           | enable  | enable  | invisible |
            | status pending embossing      | pending embossing   | disable | enable  | enable    |
            | status expired                | expired             | disable | enable  | enable    |

    @OCPD003
    @MX
    @web @android @ios
    @web-done
    @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: Access to complete information "<case>" card
        Given a user with the following criteria
            | criteria    |
            | <type> card |
            | <card_type> |
        And the user accesses to the "operative" "<type>" card product detail
        When the user accesses to more information card
        Then the user sees the following items in the screen
            | item                       | value  |
            | Card image full            | enable |
            | Card number                |        |
            | expiration date full label | enable |
            | Copy pan action            |        |
            | Detail Card action         |        |

        @backend(test)
        Examples:
            | case   | card_type        | type   |
            | credit | status operative | credit |
            | debit  | status operative | debit  |

    @OCPD004
    @MX
    @web @android @ios
    @web-done
    @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline:  Access first time to "<card_type>" "<with_without>" digital card associated
        Given a user with the following criteria
            | criteria    |
            | credit card |
            | <card_type> |
        When the user accesses to the "<status>" "<type>" card product detail for the first time
        Then the user sees the following items in the screen
            | item   |
            | <item> |

        @backend(test)
        Examples:
            | card_type                  | type   | with_without | item            | status              |
            | status virtual association | credit | with         | card help popup | virtual association |
            | status inoperative         | credit | without      | card help popup | inoperative         |

    @OCPD005
    @MX
    @web @android @ios
    @vbank
    @smokeTest
    @web-done
    @backend-smoke
    Scenario Outline: Copy pan number - "<case>" card
        Given a user with the following criteria
            | criteria    |
            | <type> card |
            | <card_type> |
        And the user accesses to the "operative" "<type>" card product detail
        And the user accesses to more information card
        When the user accesses to copy card number
        Then the user sees the following items in the screen
            | item        |
            | green toast |
        @backend(test)
        Examples:
            | case          | card_type        | type   |
            | credit number | status operative | credit |
            | debit number  | status operative | debit  |

    @OCPD006
    @MX
    @web @android @ios
    @web-done
    @vbank
    @backend(test)
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Help of balance in favour
        Given a user with the following criteria
            | criteria                 |
            | credit Card              |
            | status balance in favour |
        And the user accesses to the "balance in favour" "credit" card product detail
        When the user accesses to link of balance in favour
        Then the user sees the following items in the screen
            | item               |
            | header help screen |
            | cancel             |
            | retry modal        |

    @OCPD007
    @MX
    @web @android @ios
    @web-done
    @vbank
    @alternate-scenarios-smoke
    @backend(test)
    Scenario: Service access error
        Given a user with the following criteria
            | criteria         |
            | credit card      |
            | status operative |
        When the user accesses to the "operative" "credit" card product detail for the first time
        Then the user sees the following items in the screen
            | item           | value    |
            | quick controls | disabled |
            | modal error    |          |
            | retry link     |          |

    @OCPD008
    @MX
    @web @android @ios
    @web-done
    @vbank
    @alternate-scenarios-smoke
    @backend(test)
    Scenario: Retry error - Access Successfully
        Given a user with the following criteria
            | criteria         |
            | credit card      |
            | status operative |
        And the user accesses to the "operative" "credit" card product detail for the first time
        When the user retries access "3" times
        Then the user sees the following items in the screen
            | item                  | value     |
            | Pan number            | invisible |
            | Expiration date label | disabled  |
            | Expiration date value | disabled  |
            | Card alias            | invisible |

    @OCPD009
    @MX
    @web @android @ios
    @vbank
    @web-done
    @alternate-scenarios-smoke
    @backend-smoke
    @backend(test)
    Scenario Outline: Access with "<status>" "<card_type>" card
        Given a user with the following criteria
            | criteria    |
            | credit card |
            | <card_type> |
        When the user accesses to the "<status>" "credit" card product detail
        Then the user sees the following items in the screen
            | item          | value   |
            | <switchOnOff> | visible |
        Examples:
            | card_type        | status    | switchOnOff |
            | status operative | operative | Switch off  |
            | status OFF       | operative | Switch on   |

    @OCPD010
    @MX
    @web @android @ios
    @manual @JIRA.GLOMOGL-26754
    @alternate-scenarios-smoke
    Scenario Outline: Error loading card image - <card_type>
        Given a user with the following criteria
            | criteria    |
            | Credit Card |
            | Debit Card  |
        And the user accesses to the card "<card_type>" product detail
        When the app does not load card image correctly
        Then the user sees the following items in the screen
            | item               |
            | Default Card Image |
        Examples:
            | card_type   |
            | debit  cart |
            | credit cart |

    @OCPD011
    @MX
    @web @android @ios
    @web-done
    @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    @backend(test)
    Scenario Outline: <item> Disappears after interact with app - "<status>" card
        Given a user with the following criteria
            | criteria    |
            | credit card |
            | <card_type> |
        And the user accesses to the "<status>" "credit" card product detail for the first time
        When the user closes the help screen
        Then the user does not see the following items in the screen
            | item   |
            | <item> |
        Examples:
            | item            | status              | card_type                  |
            | card help popup | virtual association | status virtual association |
            | card help popup | blocked             | status blocked             |

    @OCPD012
    @MX
    @web @android @ios
    @web-done
    @vbank
    @backend(artichoke)
    @alternate-scenarios-smoke
    Scenario: Call error  - Credit card - Communicate with BBVA error
        Given a user with the following criteria
            | criteria    |
            | credit card |
            | with alias  |
        And the user accesses to the "infinite error" "credit" card product detail for the first time
        When the user retries access "max" times
        Then the user sees the following items in the screen
            | item        |
            | modal error |
        And the user does not see the following items in the screen
            | item         |
            | retry action |

    #Credit module

    ####### OCPD013 test should be executed manually because, ##################
    ####### its necessary implement a new method to resolve date problems ######

    @OCPD013
    @MX
    @web @android @ios
    @smokeTest
    @vbank
    @backend(artichoke)
    @manual @JIRA.GLOMOGL-26754
    Scenario: Access to credit module
        Given a user with the following criteria
            | criteria              |
            | credit module         |
            | minimum pay avoid fee |
        And the user accesses to the "operative" "credit" card product detail
        When the user scrolls to credit module
        Then the user sees the following items in the screen
            | item                            |
            | credit title                    |
            | credit label                    |
            | granted credit label            |
            | amount granted credit           |
            | payment details title           |
            | payday limit label              |
            | payday limit                    |
            | cut off date label              |
            | cut off date                    |
            | payment options                 |
            | payment detail banner           |
            | minimum amount label            |
            | minimum amount                  |
            | minimum amount tooltip          |
            | minimum amount avoid fees label |
            | minimum amount avoid fees       |
            | card simulate button            |

    ####### OCPD014 test should be executed manually because, ##################
    ####### its necessary implement a new method to resolve date problems ######

    @OCPD014
    @MX
    @web @android @ios
    @vbank
    @manual @JIRA.GLOMOGL-26754
    @alternate-scenarios-smoke
    Scenario Outline: PayDay Limit - "<dateFormat>"
        Given a user with the following criteria
            | criteria      |
            | credit module |
        And the user accesses to the "credit" card product detail with "<dateFormat>" payday format
        When the user scrolls to credit module
        Then the user verifies date format is equal to "<dateFormat>"
        @backend(artichoke)
        Examples:
            | dateFormat     |
            | day of month   |
            | number of days |
            | expired        |

    @OCPD015
    @MX
    @web @android @ios
    @web-done
    @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    @backend(test)
    Scenario Outline: Status of card simulate button - "<card_type>" Card
        Given a user with the following criteria
            | criteria    |
            | credit card |
            | <card_type> |
        And the user accesses to the "<status>" "credit" card product detail
        When the user scrolls to credit module
        Then the user sees the following items in the screen
            | item                 | value     |
            | Card Simulate Button | <visible> |
        Examples:
            | card_type                | status            | visible   |
            | status operative         | operative         | invisible |
            | status off               | operative         | enabled   |
            | status inoperative       | inoperative       | enable    |
            | status overdraft         | overdraft         | enabled   |
            | status pending Embossing | pending Embossing | invisible |
            | status pending Delivery  | pending Delivery  | enabled   |
            | status expired           | expired           | enable    |
            | status blocked           | blocked           | enabled   |

    @OCPD016
    @web @android @ios
    @web-done
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Access to card payment method - not one offer
        Given a user with the following criteria
            | criteria         |
            | credit card      |
            | status operative |
        And the user accesses to the "operative" "credit" card product detail
        When the user scrolls to credit module
        Then the user does not see the following items in the screen
            | item          |
            | offers banner |

    @OCPD017
    @web @android @ios
    @web-done
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Access to payment detail tooltip - Help Screen
        Given a user with the following criteria
            | criteria         |
            | credit card      |
            | status operative |
        And the user accesses to the "operative" "credit" card product detail
        And the user scrolls to credit module
        When the user accesses to payment detail tooltip
        Then the user sees the following items in the screen
            | item                |
            | payment help screen |

    @OCPD018
    @web @android @ios
    @web-done
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Close help screen at payment detail help screen
        Given a user with the following criteria
            | criteria         |
            | credit card      |
            | status operative |
        And the user accesses to the "operative" "credit" card product detail
        And the user scrolls to credit module
        And the user accesses to payment detail tooltip
        When the user exits the help screen
        Then the user accesses the "Orange Card Detail" screen

    @OCPD019
    @web @android @ios
    @web-done
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Continue process at payment detail help screen
        Given a user with the following criteria
            | criteria         |
            | credit card      |
            | status operative |
        And the user accesses to the "operative" "credit" card product detail
        And the user scrolls to credit module
        When the user accesses to payment detail tooltip
        Then the user sees the following items in the screen
            | item                    |
            | header help screen      |
            | payment help screen     |
            | description help screen |

    #Points Module

    @OCPD020 @tmpExclude @JIRA.GLOMOMX-103911
    @web @android @ios
    @web-done
    @vbank
    @MX @backend(test)
    @smokeTest
    Scenario: Access to points module - Points module banner
        Given a user with the following criteria
            | criteria         |
            | credit card      |
            | status operative |
        And the user accesses to the "operative" "credit" card product detail
        When the user scrolls to points module
        Then the user sees the following items in the screen
            | item          |
            | points banner |
            | points detail |

    @OCPD021 @tmpExclude @JIRA.GLOMOMX-103911
    @web @android @ios
    @web-done
    @vbank
    @MX @backend(test)
    @alternate-scenarios-smoke
    Scenario Outline: Access to points module - Card "<with_without>" points
        Given a user with the following criteria
            | criteria    |
            | credit card |
            | <card_type> |
        And the user accesses to the "operative" "credit" card product detail
        When the user scrolls to points module
        Then the user verifies "<points>" format message
        Examples:
            | card_type          | with_without | points    |
            | status not points  | without      | no points |
            | status with points | with         | points    |

    @OCPD022
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @backend(test) @MX @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user presses the activate digital card button
        Given a user with the following criteria
            | criteria                   |
            | orange card product detail |
            | ipn credit card            |
            | no digital card            |
        And the user accesses to the "operative" "credit" card product detail
        When the user accesses to digital card activation
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | title       |
            | back button |
            | description |

    @OCPD023
    @web @android @ios
    @web-done
    @backend(test) @MX @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: The user acces the activate digital card button
        Given a user with the following criteria
            | criteria                   |
            | orange card product detail |
            | ipn credit card            |
            | card digital               |
        And the user accesses to the "operative" "credit" card product detail
        When the user accesses to digital card screen
        Then the user sees the following items in the screen
            | item             |
            | card image       |
            | description      |
            | PAN number Label |
            | PAN number Value |

    @OCPD024
    @web @android @ios
    @web-done
    @backend(test) @MX @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user presses expense control
        Given a user with the following criteria
            | criteria                   |
            | orange card product detail |
            | ipn credit card            |
            | card digital               |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects expense control
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | title daily amount |
            | help icon          |
            | title of limit     |

    @OCPD025
    @web @android @ios
    @web-done
    @backend(test) @MX @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user enters with a single contracted product
        Given a user with the following criteria
            | criteria                   |
            | orange card product detail |
            | gold credit card           |
            | mono produc                |
        When the user accesses to the "operative" "credit" card product detail
        Then the user sees the following items in the screen
            | item                  | value       |
            | header                |             |
            | Card image            |             |
            | digital card payment  | enable      |
            | card block management | not visible |

    @OCPD026
    @web @android @ios
    @web-done
    @backend(test) @MX @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: The user presses account status
        Given a user with the following criteria
            | criteria                   |
            | orange card product detail |
            | ipn credit card            |
            | card digital               |
        And the user accesses to the "operative" "credit" card product detail
        When the user accesses to the monthly statement enquiry card screen
        Then the user sees the following items in the screen
            | item       |
            | header     |
            | card       |
            | card image |
            | balance    |
            | period     |

    @OCPD027
    @web @android @ios
    @web-done
    @backend(test) @MX @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario: The user enters the card with the button calculate interest
        Given a user with the following criteria
            | criteria                   |
            | orange card product detail |
            | ipn credit card            |
            | card digital               |
        When the user accesses to the "operative" "credit" card product detail
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | Card image                |
            | calculate interest button |

    @OCPD028
    @web @android @ios
    @web-done
    @backend(test) @MX @vbank
    @alternate-scenarios-smoke
    @backend-smoke
    Scenario Outline: The user enters the card with <status>
        Given a user with the following criteria
            | criteria                   |
            | orange card product detail |
            | <card>                     |
            | <status>                   |
        When the user accesses to the "operative" "credit" card product detail
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | Card image     |
            | locked label   |
            | message locked |
        Examples:
            | card                 | status               |
            | platinum credit card | overdraft            |
            | blue credit card     | exceds credits limit |

    @OCPD029
    @web @android @ios
    @web-done
    @backend(artichoke) @MX @vbank
    @alternate-scenarios-smoke
    Scenario: The user enters the card without movements
        Given a user with the following criteria
            | criteria    |
            | credit card |
            | with alias  |
        When the user accesses to the "infinite error" "credit" card product detail
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | Card image              |
            | empty movements image   |
            | label without movements |

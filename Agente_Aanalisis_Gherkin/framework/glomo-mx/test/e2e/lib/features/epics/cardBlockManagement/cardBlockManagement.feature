@cardBlockManagement
Feature: Card Block Management
    As a Glomo User
    I would like card replacement for debit and credit card

    @CBM001
    @MX
    @web @android @ios @web-done
    @vbank @backend(test) @smokeTest
    Scenario: Lock with replacement - Delivery option at any branch
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses the block and reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | operative      |
            | product id       | AV             |
        When the user completes without otp the block and reposition card process with the following criteria
            | item     | value      |
            | reason   | theft      |
            | new card | instant    |
            | address  | any branch |
            | terms    | accepted   |
        Then the user sees the following items in the screen:
            | item                                        |
            | modal success header                        |
            | modal success close                         |
            | modal success icon                          |
            | modal success title                         |
            | modal success card to replaced              |
            | modal success reason damage                 |
            | modal success new card type                 |
            | modal success replacement cost              |
            | modal success delivery address              |
            | modal success shipping cost                 |
            | modal success operation code                |
            | modal success shipment mail information     |
            | modal success shipment tracking information |

    @CBM002
    @MX
    @web @android @ios @web-done
    @vbank @backend(test) @smokeTest
    Scenario: Lock with replacement - Delivery option to registered address
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses the block and reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | operative      |
            | product id       | AV             |
        When the user completes the block and reposition card process with the following criteria
            | item     | value    |
            | reason   | theft    |
            | new card | custom   |
            | address  | home     |
            | terms    | accepted |
        Then the user sees the following items in the screen:
            | item                                        |
            | modal success header                        |
            | modal success close                         |
            | modal success icon                          |
            | modal success title                         |
            | modal success card to replaced              |
            | modal success reason damage                 |
            | modal success new card type                 |
            | modal success replacement cost              |
            | modal success delivery address              |
            | modal success shipping cost                 |
            | modal success operation code                |
            | modal success shipment mail information     |
            | modal success shipment tracking information |

    @CBM003
    @MX
    @web @android @ios @web-done
    @vbank
    Scenario Outline: Lock with replacement - Sending <card description> card to originating asset branch
        Given a user with the following criteria
            | criteria                   |
            | <card description>         |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses the block and reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | operative      |
            | product id       | <product id>   |
        When the user completes the block and reposition card process with the following criteria
            | item     | value          |
            | new card | single custom  |
            | address  | opening branch |
            | date     |                |
            | terms    | accepted       |
            | reason   | theft          |
        Then the user sees the following items in the screen:
            | item                                        |
            | modal success header                        |
            | modal success close                         |
            | modal success icon                          |
            | modal success title                         |
            | modal success date and time                 |
            | modal success card to replaced              |
            | modal success reason damage                 |
            | modal success new card type                 |
            | modal success replacement cost              |
            | modal success delivery address              |
            | modal success shipping cost                 |
            | modal success operation code                |
            | modal success shipment mail information     |
            | modal success shipment tracking information |

        @backend(test)
        Examples:
            | product id | card description                        |
            | V4         | infinite credit card operative          |
            | V0         | infinite metallic credit card operative |

    @CBM004
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Lock with replacement - Edit reason for lock
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "operative" "credit" card
        And the user confirms the block and reposition card process with the following criteria
            | item     | value      |
            | reason   | theft      |
            | terms    | accepted   |
            | new card | instant    |
            | address  | any branch |
        When the user modifies the block reason in resume screen with the following criteria
            | item   | value |
            | reason | lost  |
        Then the user sees the following items in the screen:
            | item                              | value    |
            | header resume                     |          |
            | exit resume                       |          |
            | card title resume                 |          |
            | card name resume                  |          |
            | card image resume                 |          |
            | card number resume                |          |
            | card available amount resume      |          |
            | card disposed amount resume       |          |
            | block reason title resume         |          |
            | block reason value resume         |          |
            | block reason modify button resume |          |
            | new card title                    |          |
            | instant new card radio            |          |
            | custom new card radio             |          |
            | continue reposition button        | disabled |

    @CBM005
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Lock with replacement - Edit the Terms and Conditions section
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "operative" "credit" card
        And the user confirms the block card process with the following criteria
            | item     | value      |
            | reason   | theft      |
            | terms    | accepted   |
            | new card | instant    |
            | address  | any branch |
        When the user modifies terms and conditions in resume screen
        Then the user sees the following items in the screen:
            | item                              |
            | header resume                     |
            | exit resume                       |
            | card title resume                 |
            | card name resume                  |
            | card image resume                 |
            | card number resume                |
            | card available amount resume      |
            | card disposed amount resume       |
            | block reason title resume         |
            | block reason value resume         |
            | block reason modify button resume |
            | Terms and conditions title        |
            | Terms and conditions check        |
            | Confirm Terms and conditions      |

    @CBM006
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario Outline: Blocked - debit blocked due to <reason>
        Given a user with the following criteria
            | criteria                       |
            | debit card operative           |
            | card block and replacement     |
            | card reissue conditions        |
        And the user accesses card block management operative with "operative" "debit" card
        And the user completes the block card process with the following criteria
            | item   | value    |
            | reason | <reason> |
            | terms  | accepted |
        When the user closes the receipt
        Then the user sees the "dashboard" screen

        Examples:
            | reason |
            | theft  |
            | lost   |

    @CBM007
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Blocked - Change blocking reason
        Given a user with the following criteria
            | criteria                   |
            | debit card operative       |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "operative" "debit" card
        And the user confirms the block card process with the following criteria
            | item   | value    |
            | reason | theft    |
        When the user modifies the block reason in resume screen with the following criteria
            | item   | value |
            | reason | lost  |
        Then the user sees the following items in the screen:
            | item                              | value       |
            | header resume                     |             |
            | exit resume                       |             |
            | card title resume                 |             |
            | card name resume                  |             |
            | card image resume                 |             |
            | card number resume                |             |
            | card available amount resume      | not visible |
            | card disposed amount resume       | not visible |
            | block reason title resume         |             |
            | block reason value resume         |             |
            | block reason modify button resume |             |
            | terms and conditions title        |             |
            | terms and conditions check        |             |
            | confirm terms and conditions      | disabled    |

    @CBM008
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario Outline: Replacement - Instant replacement of <card type> at branch
        Given a user with the following criteria
            | criteria                         |
            | <card type> card blocked by lost |
            | card block and replacement       |
            | card reissue conditions          |
        And the user accesses card block management operative with "blocked" "<card type>" card
        When the user confirms the reposition card process with the following criteria
            | item     | value                 |
            | address  | process at the office |
            | new card | <new card>            |
        Then the user sees the following items in the screen:
            | item                 | value             |
            | modal header         | process at branch |
            | modal close          | process at branch |
            | modal icon           | process at branch |
            | modal title          | process at branch |
            | modal description    | process at branch |
            | modal primary button | process at branch |

        Examples:
            | card type | new card                 |
            | credit    | instant                  |
            | debit     | instant default selected |

    @CBM009
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Replacement - Close window Exit
        Given a user with the following criteria
            | criteria                    |
            | credit card blocked by lost |
            | card block and replacement  |
            | card reissue conditions     |
        And the user accesses card block management operative with "blocked" "credit" card
        And the user confirms the reposition card process with the following criteria
            | item     | value                 |
            | address  | process at the office |
            | new card | instant               |
        When the user exits the operative
        Then the user accesses the "card block management" screen

    @CBM010
    @MX
    @web @android @ios @web-done
    @vbank @backend(test) @vbank-modifed
    Scenario Outline: Scheduled delivery in <management>
        Given a user with the following criteria
            | criteria                   |
            | debit card blocked by lost |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "<card status>" "debit" card
        When the user confirms the <management> card process with the following criteria
            | item     | value          |
            | new card | single instant |
            | address  | home           |
            | date     | date selection |
        Then the user sees the following items in the screen:
            | item                            | value       |
            | header resume                   |             |
            | exit resume                     |             |
            | card title resume               |             |
            | card name resume                |             |
            | card image resume               |             |
            | card number resume              |             |
            | card available amount resume    | not visible |
            | card disposed amount resume     | not visible |
            | new card title resume           |             |
            | new card modify button resume   |             |
            | new card type resume            |             |
            | new card cost resume            |             |
            | address title resume            |             |
            | address modify button           |             |
            | address type resume             |             |
            | address cost warning resume     |             |
            | scheduled delivery title resume |             |
            | scheduled delivery date resume  |             |
            | scheduled delivery hour resume  |             |
            | edit scheduled delivery resume  |             |
            | fee amount section resume       |             |
            | confirm resume button           |             |

        Examples:
            | card status     | management |
            | blocked lost    | reposition |
            | blocked renewal | renewal    |

    @CBM011
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario Outline: Scheduled delivery to a different address <management>
        Given a user with the following criteria
            | criteria                   |
            | debit card blocked by lost |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "<card status>" "debit" card
        And the user confirms the <management> card process with the following criteria
            | item     | value                    |
            | new card | instant default selected |
        When the user introduces data in other address section with the following criteria
            | item    | value                 |
            | address | out of range zip code |
        Then the user sees the following items in the screen:
            | item                          | value       |
            | header resume                 |             |
            | exit resume                   |             |
            | card title resume             |             |
            | card name resume              |             |
            | card image resume             |             |
            | card number resume            |             |
            | card available amount resume  | not visible |
            | card disposed amount resume   | not visible |
            | new card title resume         |             |
            | new card modify button resume |             |
            | new card type resume          |             |
            | new card cost resume          |             |
            | address title resume          |             |
            | address modify button         |             |
            | address type resume           |             |
            | address cost warning resume   |             |
            | continue button step 4        | disabled    |

        Examples:
            | card status     | management |
            | blocked lost    | reposition |
            | blocked renewal | renewal    |

    @CBM012
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Replacement - Credit Card Replacement
        Given a user with the following criteria
            | criteria                      |
            | credit card blocked by stolen |
            | card block and replacement    |
            | card reissue conditions       |
        And the user accesses the reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | blocked        |
            | product id       | AV             |
        When the user completes the reposition card process with the following criteria
            | item     | value    |
            | new card | custom   |
            | address  | home     |
            | date     |          |
            | terms    | accepted |
        Then the user sees the following items in the screen:
            | item                                        | value       |
            | modal success header                        |             |
            | modal success close                         |             |
            | modal success icon                          |             |
            | modal success title                         |             |
            | modal success date and time                 |             |
            | modal success card to replaced              |             |
            | modal success reason damage                 | not visible |
            | modal success new card type                 |             |
            | modal success replacement cost              |             |
            | modal success delivery address              |             |
            | modal success shipping cost                 |             |
            | modal success operation code                |             |
            | modal success shipment mail information     |             |
            | modal success shipment tracking information |             |

    @CBM013
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario Outline: Replacement - Choose branch <status>
        Given a user with the following criteria
            | criteria                      |
            | credit card blocked by stolen |
            | card block and replacement    |
            | card reissue conditions       |
        And the user accesses the reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | blocked        |
            | product id       | AV             |
        And the user confirms the reposition card process with the following criteria
            | item     | value  |
            | new card | custom |
        And the user accesses to the branch locator
        And the user searches for and selects a branch
        When the user accepts the terms and confirms the process
        Then the user sees the following items in the screen:
            | item                                        | value                 |
            | modal success header                        |                       |
            | modal success close                         |                       |
            | modal success icon                          |                       |
            | modal success title                         |                       |
            | modal success date and time                 |                       |
            | modal success card to replaced              |                       |
            | modal success reason damage                 | not visible           |
            | modal success new card type                 |                       |
            | modal success replacement cost              |                       |
            | modal success delivery address              | <deliveryAddress>     |
            | modal success shipping cost                 |                       |
            | modal success operation code                |                       |
            | modal success shipment mail information     |                       |
            | modal success shipment tracking information | <trackingInformation> |

        Examples:
            | status       | trackingInformation | deliveryAddress |
            | Successfully |                     |                 |
            | Fail         | error sucursal      | not visible     |

    @CBM014
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Replacement  - Validate edit branch
        Given a user with the following criteria
            | criteria                      |
            | credit card blocked by stolen |
            | card block and replacement    |
            | card reissue conditions       |
        And the user accesses the reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | blocked        |
            | product id       | AV             |
        And the user confirms the reposition card process with the following criteria
            | item     | value  |
            | new card | custom |
        And the user accesses to the branch locator
        And the user attempts to search for and selects a branch
        When the user accesses to modify address in branch map selector
        Then the user sees the following items in the screen:
            | item                |
            | map branch          |
            | search branch input |
            | list branches       |

    @CBM015
    @MX
    @web @android @ios @web-done
    @vbank @vbank-modified
    Scenario Outline: Replacement - Sending credit card <card description> to originating asset branch
        Given a user with the following criteria
            | criteria                   |
            | <card description>         |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses the reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | blocked        |
            | reason           | <reason>       |
            | product id       | <product id>   |
        When the user completes the reposition card process with the following criteria
            | item     | value          |
            | new card | single custom  |
            | address  | opening branch |
            | date     |                |
            | terms    | accepted       |
        Then the user sees the following items in the screen:
            | item                                        | value       |
            | modal success header                        |             |
            | modal success close                         |             |
            | modal success icon                          |             |
            | modal success title                         |             |
            | modal success date and time                 |             |
            | modal success card to replaced              |             |
            | modal success reason damage                 | not visible |
            | modal success new card type                 |             |
            | modal success replacement cost              |             |
            | modal success delivery address              |             |
            | modal success shipping cost                 |             |
            | modal success operation code                |             |
            | modal success shipment mail information     |             |
            | modal success shipment tracking information |             |

        @backend(test)
        Examples:
            | product id | reason | card description                              |
            | V4         | theft  | infinite credit card blocked by stolen        |
            | V0         | lost   | infinite metallic credit card blocked by lost |

    @CBM016
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario Outline: Delivery address out of range - <card description>
        Given a user with the following criteria
            | criteria                   |
            | debit card blocked by lost |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "<card type>" "debit" card
        And <step>
            | item     | value                    |
            | new card | instant default selected |
        And the user introduces data in other address section with the following criteria
            | item    | value                 |
            | address | out of range zip code |
        And the user modifies address selection in resume screen
        When the user introduces data in other address section with the following criteria
            | item    | value     |
            | address | <address> |
        Then the user sees the following items in the screen:
            | item                          | value       |
            | header resume                 |             |
            | exit resume                   |             |
            | card title resume             |             |
            | card name resume              |             |
            | card image resume             |             |
            | card number resume            |             |
            | card available amount resume  | not visible |
            | card disposed amount resume   | not visible |
            | new card title resume         |             |
            | new card modify button resume |             |
            | new card type resume          |             |
            | new card cost resume          |             |
            | address street                | <isVisible> |
            | external number               | <isVisible> |
            | internal number               | <isVisible> |
            | zip code                      | <isVisible> |
            | neighborhood selector         | <isVisible> |
            | additional reference          | <isVisible> |
            | continue button step 3        |             |

        Examples:
            | card description                        | step                                                                      | card type       | address         | isVisible   |
            | reposition debit card                   | the user confirms the reposition card process with the following criteria | blocked         | correct address |             |
            | renewal debit card                      | the user confirms the renewal card process with the following criteria    | blocked renewal | correct address |             |
            | reposition debit card - home registered | the user confirms the reposition card process with the following criteria | blocked         | home            | not visible |
            | renewal debit card - home registered    | the user confirms the renewal card process with the following criteria    | blocked renewal | home            | not visible |

    @CBM017
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Replacement - See privacy notice
        Given a user with the following criteria
            | criteria                   |
            | debit card blocked by lost |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "blocked lost" "debit" card
        And the user confirms the reposition card process with the following criteria
            | item     | value          |
            | new card | single instant |
        When the user consults privacy policy in replacement card process
        Then the user sees the following items in the screen:
            | item              | value   |
            | modal header      | privacy |
            | modal close       | privacy |
            | modal icon        | privacy |
            | modal description | privacy |

    @CBM018
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    #CBM022 in C204
    Scenario: Replacement - Show data
        Given a user with the following criteria
            | criteria                   |
            | debit card blocked by lost |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "blocked" "debit" card
        And the user confirms the reposition card process with the following criteria
            | item     | value                    |
            | new card | instant default selected |
        And the user shows my address in replacement card process
        When the user hides my address in replacement card process
        Then the user sees the following items in the screen:
            | item                  | value         |
            | unmasked home address |               |
            | show data             | Mostrar datos |

    @CBM019
    @MX
    @web @android @ios @web-done
    @vbank @backend(test) @vbank-modifed
    Scenario: Renewal - Process at branch
        Given a user with the following criteria
            | criteria                      |
            | debit card blocked by lost    |
            | card block and replacement    |
            | card reissue conditions       |
        And the user accesses card block management operative with "blocked renewal" "debit" card
        When the user confirms the renewal card process with the following criteria
            | item     | value                    |
            | address  | process at the office    |
            | new card | instant default selected |
        Then the user sees the following items in the screen:
            | item                 | value             |
            | modal header         | process at branch |
            | modal close          | process at branch |
            | modal icon           | process at branch |
            | modal title          | process at branch |
            | modal description    | process at branch |
            | modal primary button | process at branch |

    @CBM020
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario Outline: Renewal - Validate error in field <address>
        Given a user with the following criteria
            | criteria                   |
            | debit card blocked by lost |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "blocked renewal" "debit" card
        And the user confirms the renewal card process with the following criteria
            | item     | value          |
            | new card | single instant |
        When the user introduces data in other address section with the following criteria
            | item    | value     |
            | address | <address> |
        Then the user sees the following items in the screen:
            | item      |
            | <element> |

        Examples:
            | address                                              | element                                                |
            | maximum characters street                            | maximum characters street warning resume               |
            | maximum characters outside number                    | maximum characters outside number warning resume       |
            | maximum characters inside number                     | maximum characters inside number warning resume        |
            | maximum characters additional reference              | maximum characters additional reference warning resume |
            | invalid characters street                            | invalid characters street warning resume               |
            | invalid characters outside number                    | invalid characters outside number warning resume       |
            | invalid characters inside number                     | invalid characters inside number warning resume        |
            | special characters are not permitted in the zip code | special characters are not permitted in the zip code   |
            | invalid zip code                                     | wrong zip code warning resume                          |
            | wrong zip code                                       | wrong zip code warning resume                          |

    @CBM021
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Errors - Card replacement is not possible
        Given a user with the following criteria
            | criteria                    |
            | card block and replacement  |
            | credit card blocked by lost |
            | card reissue conditions     |
        And the user attempts to access card block management operative with "blocked" "credit" card
        When the user retries "3" times
        Then the user sees the following items in the screen:
            | item                 | value |
            | modal header         | error |
            | modal close          | error |
            | modal icon           | error |
            | modal title          | error |
            | modal description    | error |
            | modal primary button | error |

    @CBM022
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Errors - Validate operation error
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses the block and reposition process with the following criteria
            | type             | credit         |
            | physical support | normal plastic |
            | status           | operative      |
            | product id       | AV             |
        When the user attempts to the block and reposition card process with the following criteria
            | item     | value      |
            | reason   | theft      |
            | new card | instant    |
            | address  | any branch |
            | terms    | accepted   |
        Then the user sees the following items in the screen:
            | item                   | value |
            | modal header           | error |
            | modal close            | error |
            | modal icon             | error |
            | modal title            | error |
            | modal description      | error |
            | modal primary button   | error |
            | modal secondary button | error |

    @CBM023
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario: Errors - Information no loaded
        Given a user with the following criteria
            | criteria                                  |
            | card block and replacement                |
            | credit card error access block management |
        And the user attempts to access card block management operative with "operative" "credit" card
        And the user retries "3" times
        When the user attempts to block card process 1 times
        Then the user sees the "card block management" screen

    @CBM024
    @MX
    @web @android @ios @web-done
    @backend(test) @smokeTest @vbank
    Scenario: Lock with replacement - Validate edit branch
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "operative" "credit" card
        And the user confirms the block and reposition card process with the following criteria
            | item     | value    |
            | reason   | theft    |
            | new card | custom   |
            | address  | home     |
            | terms    | accepted |
        When the user modifies address selection in resume screen
        Then the user sees the following items in the screen:
            | item                                      | value       |
            | exit resume                               |             |
            | card title resume                         |             |
            | card name resume                          |             |
            | card image resume                         |             |
            | card number resume                        |             |
            | card available amount resume              |             |
            | card disposed amount resume               |             |
            | block reason title resume                 |             |
            | block reason value resume                 |             |
            | block reason modify button resume         |             |
            | new card title resume                     |             |
            | new card modify button resume             |             |
            | new card type resume                      |             |
            | new card cost resume                      |             |
            | address title                             |             |
            | home delivery option                      |             |
            | choose branch option                      |             |
            | choose another address                    | not visible |
            | continue button step 3                    |             |
            | terms and conditions title resume         |             |
            | terms and conditions status resume        |             |
            | terms and conditions modify button resume |             |
            | confirm resume button                     | not visible |

    @CBM025
    @MX @web-done
    @web @android @ios
    @vbank @backend(test) @vbank-modified
    Scenario Outline: Lock with replacement - <delivery>
        Given a user with the following criteria
            | criteria                   |
            | credit card operative      |
            | card block and replacement |
            | card reissue conditions    |
        And the user accesses card block management operative with "operative" "credit" card
        And the user confirms the block and reposition card process with the following criteria
            | item     | value  |
            | reason   | lost   |
            | new card | custom |
        And the user accesses to the branch locator
        And the user searches for and selects a branch
        When the user accepts the terms and confirms the process
        Then the user sees the following items in the screen:
            | item                                        | value                 |
            | modal success header                        |                       |
            | modal success close                         |                       |
            | modal success icon                          |                       |
            | modal success title                         |                       |
            | modal success date and time                 |                       |
            | modal success card to replaced              |                       |
            | modal success reason damage                 |                       |
            | modal success new card type                 |                       |
            | modal success replacement cost              |                       |
            | modal success delivery address              | <deliveryAddress>     |
            | modal success shipping cost                 |                       |
            | modal success operation code                |                       |
            | modal success shipment mail information     |                       |
            | modal success shipment tracking information | <trackingInformation> |

        Examples:
            | delivery                               | trackingInformation | deliveryAddress |
            | Choose delivery branch                 |                     |                 |
            | Default shipping to registered address | error sucursal      | not visible     |

    @CBM026
    @MX
    @web @android @ios @web-done
    @vbank @backend(test)
    Scenario Outline: Blocked - credit blocked due to <reason>
        Given a user with the following criteria
            | criteria                                  |
            | card block and replacement                |
            | credit card error access block management |
        And the user attempts to access card block management operative with "operative" "credit" card
        And the user retries "3" times
        And the user attempts to block card process 1 times
        And the user completes the block card process with the following criteria
            | item   | value    |
            | reason | <reason> |
            | terms  | accepted |
        When the user closes the receipt
        Then the user sees the "dashboard" screen

        Examples:
            | reason |
            | theft  |
            | lost   |

@mposDigitalSales
Feature: Mpos Digital Sales

    @MPDS001
    @MX @web @ios @android
    @smokeTest @vbank-modified
    @vbank @backend(test) @web-done
    Scenario: The user successfully contracts the offer
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "summary" step of the oc cash zone offer
        And the user accepts the contract and finalizes the contracting of the offer
        When the user confirm token
        Then the user sees the following items in the screen
            | item                               |
            | success page header                |
            | success page amount paid           |
            | success page payment description   |
            | success page contract date         |
            | success page agreement number      |
            | success page reference number      |
            | success page operation type number |
            | success page cie guide number      |
            | success page folio number          |
            | success page payment account       |

    @MPDS002
    @MX @web @ios @android
    @vbank @backend(test)
    @alternate-scenarios-smoke @backend-smoke @web-done
    Scenario: The user validates the payment methods modal from the add card reader step
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "add card reader" step of the oc cash zone offer
        When the user accesses to the "card reader details" modal
        Then the user sees the following items in the screen
            | item                                          |
            | card reader details modal header              |
            | card reader details modal close button        |
            | card reader details modal openpay mini label  |
            | card reader details modal benefits link       |
            | card reader details modal considerations link |
            | card reader details modal specifications link |

    @MPDS003
    @MX @web @ios @android
    @vbank @backend(test)
    @alternate-scenarios-smoke @backend-smoke @web-done
    Scenario: The user successfully contracts the offer selecting without Openpay Mini reader
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "add card reader" step of the oc cash zone offer
        And the user selects the without card reader option and continues to summary
        When the user accepts the contract and finalizes the contracting of the offer
        Then the user sees the following items in the screen
            | item                             |
            | success page header              |
            | success page payment description |
            | success page contract date       |

    @MPDS004
    @MX @web @ios @android
    @vbank @backend(test)
    @alternate-scenarios-smoke @backend-smoke @web-done
    Scenario: The user removes the Openpay Mini reader and completes the contract
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "delivery address" step of the oc cash zone offer
        And the user changes the card reader option to without reader and continues to summary
        When the user accepts the contract and finalizes the contracting of the offer
        Then the user sees the following items in the screen
            | item                             |
            | success page header              |
            | success page payment description |
            | success page contract date       |

    @MPDS005
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke
    Scenario: The user validates the "more info delivery address" modal
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "delivery address" step of the oc cash zone offer
        When the user accesses to the "more info delivery address" modal
        Then the user sees the following items in the screen
            | item                            |
            | more info delivery header       |
            | more info delivery icon         |
            | more info delivery title        |
            | more info delivery content      |
            | more info delivery close button |

    @MPDS006
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user "displays" "cash on delivery" accordion information
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "more info reader" modal
        When the user "displays" the "cash on delivery" accordions information
        Then the user sees the following items in the screen
            | item                                      |
            | more info reader close button             |
            | more info reader panel information        |
            | more info reader descriptive banner       |
            | more info reader benefits accordion       |
            | more info reader considerations accordion |
            | more info reader specifications accordion |

    @MPDS007
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user "displays" "openpay mini reader" accordion information
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "more info reader" modal
        When the user "displays" the "openpay mini reader" accordions information
        Then the user sees the following items in the screen
            | item                                      |
            | more info reader close button             |
            | more info reader panel information        |
            | more info reader descriptive banner       |
            | more info reader benefits accordion       |
            | more info reader considerations accordion |
            | more info reader specifications accordion |

    @MPDS008
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user "displays" "payment link" accordion information
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "more info reader" modal
        When the user "displays" the "payment link" accordions information
        Then the user sees the following items in the screen
            | item                                      |
            | more info reader close button             |
            | more info reader panel information        |
            | more info reader descriptive banner       |
            | more info reader benefits accordion       |
            | more info reader considerations accordion |
            | more info reader specifications accordion |

    @MPDS009
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user closes the more info reader pop-up modal
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "more info reader" modal
        When the user closes the more info reader pop-up modal
        Then the user sees the following items in the screen
            | item                         |
            | offer header                 |
            | offer payment section        |
            | offer benefits section       |
            | offer commissions section    |
            | offer continue button        |
            | offer ask for advisor link   |
            | offer more info reader link  |
            | offer other commissions link |

    @MPDS010
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user accesses the help screen for more info commissions
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        When the user accesses to the "more info commissions" modal
        Then the user sees the following items in the screen
            | item                                    |
            | more info commissions header            |
            | more info commissions help icon         |
            | more info commissions exit button       |
            | more info commissions information panel |

    @MPDS011
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user exits the oc cash zone offer screen
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        When the user exits the oc cash zone offer screen
        Then the user sees the "contract product section" screen

    @MPDS012
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke
    Scenario: The user validates that his personal data are not displayed encrypted
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "order data" step of the oc cash zone offer
        And the user unmask contact details data of oc cash zone offer
        When the sms key "12345678" is entered
        Then the user sees the following items in the screen
            | item                        |
            | unmasked email oc cash zone |
            | unmasked phone oc cash zone |

    @MPDS013
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user validates the privacy notice modal
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "order data" step of the oc cash zone offer
        When the user accesses to the "privacy notice" modal
        Then the user sees the following items in the screen
            | item                       |
            | privacy notice header      |
            | privacy notice description |
            | privacy notice exit button |

    @MPDS014
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user validates the modal exit contracting data from oc cash zone offer screen
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "order data" step of the oc cash zone offer
        When the user exits the order data oc cash zone offer
        Then the user sees the following items in the screen
            | item                        |
            | close modal icon            |
            | close modal header          |
            | close modal cross button    |
            | close modal description     |
            | close modal exit button     |
            | close modal continue button |

    @MPDS015
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user validates that the x button closes the accounts screen
        Given a user with the following criteria
            | criteria      |
            | oc cash zone  |
            | five accounts |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "income account" step of the oc cash zone offer
        And the user accesses to the "all income accounts" modal
        When the user closes the all income accounts pop-up modal
        Then the user sees the following items in the screen
            | item                                     |
            | income all accounts modal header         |
            | income all accounts modal description    |
            | income all accounts modal view all link  |
            | income all accounts modal panel accounts |

    @MPDS016
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user "does not see" the view all link if the user has no more than 3 accounts
        Given a user with the following criteria
            | criteria     |
            | oc cash zone |
            | two accounts |
        And the user accesses to card oc cash zone offer from "opportunities"
        When the user accesses to the "income account" step of the oc cash zone offer
        Then the user sees the following items in the screen
            | item                             | value       |
            | income account modal header      |             |
            | income account modal description |             |
            | income account view all link     | not visible |
            | income account continue button   | not visible |

    @MPDS017
    @MX @web @ios @android
    @smokeTest @vbank-modified
    @vbank @backend(test) @web-done
    Scenario: The user validates the disabled continue button on onboarding screen for a N2 client
        Given a user with the following criteria
            | criteria     |
            | n2 account   |
            | oc cash zone |
        When the user accesses to card oc cash zone offer from "opportunities"
        Then the user sees the following items in the screen
            | item                             | value    |
            | offer header                     |          |
            | offer update account header      |          |
            | offer update account icon        |          |
            | offer update account description |          |
            | offer payment section            |          |
            | offer benefits section           |          |
            | offer commissions section        |          |
            | offer continue button            | disabled |
            | offer ask for advisor link       |          |
            | offer more info reader link      |          |
            | offer other commissions link     |          |

    @MPDS018
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user adds another delivery address
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "delivery address" step of the oc cash zone offer
        When the user "adds" another delivery address
        Then the user sees the following items in the screen
            | item                                   |
            | delivery address header                |
            | delivery address description           |
            | delivery address message information   |
            | delivery address main address section  |
            | delivery address other address section |
            | delivery address continue button       |

    @MPDS019
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user deletes another delivery address
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "delivery address" step of the oc cash zone offer
        When the user "adds and deletes" another delivery address
        Then the user sees the following items in the screen
            | item                                   | value    |
            | delivery address header                |          |
            | delivery address description           |          |
            | delivery address message information   |          |
            | delivery address main address section  |          |
            | delivery address other address section |          |
            | delivery address continue button       | disabled |

    @MPDS020
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke
    Scenario: The user validates that his main address are not displayed encrypted
        Given a user with the following criteria
            | criteria     |
            | cash zone privacy |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "delivery address" step of the oc cash zone offer
        And the user unmask contact delivery address of oc cash zone offer
        When the sms key "12345678" is entered
        Then the user sees the following items in the screen
            | item                                   |
            | delivery address header                |
            | delivery address description           |
            | delivery address message information   |
            | delivery address main address unmask   |
            | delivery address other address section |
            | delivery address continue button       |

    @MPDS021
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user validates that selecting the view all link displays the accounts screen
        Given a user with the following criteria
            | criteria      |
            | oc cash zone  |
            | five accounts |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "income account" step of the oc cash zone offer
        When the user accesses to the "all income accounts" modal
        Then the user sees the following items in the screen
            | item                                     |
            | income all accounts modal header         |
            | income all accounts modal close button   |
            | income all accounts modal panel accounts |

    @MPDS022
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user validates the "income account" section when they have only 1 account
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        When the user accesses to the "income account" step of the oc cash zone offer
        Then the user sees the following items in the screen
            | item                                      |
            | income all accounts modal header          |
            | income all accounts modal description     |
            | income all accounts modal panel accounts  |
            | income all accounts modal continue button |

    @MPDS023
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user validates the insufficient balance label in the "payment account" section
        Given a user with the following criteria
            | criteria             |
            | oc cash zone         |
            | insufficient balance |
        And the user accesses to card oc cash zone offer from "opportunities"
        When the user accesses to the "payment account" step of the oc cash zone offer
        Then the user sees the following items in the screen
            | item                                 | value    |
            | payment account header               |          |
            | payment account description          |          |
            | payment account insufficient balance |          |
            | payment account continue button      | disabled |

    @MPDS024
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user modifies another delivery address
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "delivery address" step of the oc cash zone offer
        When the user "modifies" another delivery address
        Then the user sees the following items in the screen
            | item                                   |
            | delivery address header                |
            | delivery address description           |
            | delivery address message information   |
            | delivery address main address section  |
            | delivery address other address section |
            | delivery address continue button       |

    @MPDS025
    @MX @web @ios @android
    @vbank @backend(test) @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user changes the account from the summary screen
        Given a user with the following criteria
            | criteria      |
            | oc cash zone  |
            | five accounts |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "income account" step of the oc cash zone offer
        And the user selects one of their multiple accounts in the "income account" step
        And the user selects one of their multiple accounts in the "payment account" step
        When the user changes the income account from the summary screen
        Then the user sees the following items in the screen
            | item                         |
            | summary order data           |
            | summary income account       |
            | summary add card reader      |
            | summary delivery address     |
            | summary payment account      |
            | summary terms and conditions |
            | summary contract panel       |
            | summary contract button      |

    @MPDS026
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user checks and unchecks the boxes on the terms and conditions screen
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "terms and conditions" step of the oc cash zone offer
        When the user "checks and unchecks" all the terms and conditions of the contract
        Then the user sees the following items in the screen
            | item                                 | value    |
            | terms and conditions header          |          |
            | terms and conditions download file   |          |
            | terms and conditions first checkbox  |          |
            | terms and conditions second checkbox |          |
            | terms and conditions third checkbox  |          |
            | terms and conditions fourth checkbox |          |
            | terms and conditions continue button | disabled |

    @MPDS027
    @MX @web @ios @android
    @vbank @backend(test) @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: The user validates the disabled continue button on the terms and conditions screen
        Given a user with the following criteria
            | criteria     |
            | one account  |
            | oc cash zone |
        And the user accesses to card oc cash zone offer from "opportunities"
        And the user accesses to the "terms and conditions" step of the oc cash zone offer
        When the user "does not accept" all the terms and conditions of the contract
        Then the user sees the following items in the screen
            | item                                 | value    |
            | terms and conditions header          |          |
            | terms and conditions download file   |          |
            | terms and conditions first checkbox  |          |
            | terms and conditions second checkbox |          |
            | terms and conditions third checkbox  |          |
            | terms and conditions fourth checkbox |          |
            | terms and conditions continue button | disabled |

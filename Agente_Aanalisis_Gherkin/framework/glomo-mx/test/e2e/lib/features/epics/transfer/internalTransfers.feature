@transfers @internalTransfer
Feature: Internal Transfers

    @INT001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    Scenario: Validate - Transfer from product detail to a new internal identified contact
        Given a user with the following criteria
            | criteria           |
            | transfers account  |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "internal identified" account by entering the destination number
        And the user introduces amount and concept in transfer process
        And the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    | value       |
            | operation data and hour |             |
            | transfered amount       |             |
            | tax amount              |             |
            | origin account          |             |
            | destination account     |             |
            | concept                 |             |
            | operation type          |             |
            | operation number        |             |
            | users email             |             |
            | share button            |             |
            | exit button             |             |
            | offer card              | not visible |

    @INT002
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    Scenario: Validate - Transfer from dashboard  to a new contact from a BBVA user
        Given a user with the following criteria
            | criteria           |
            | transfers account  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "internal recognized" account by entering the destination number
        And the user introduces amount and concept in transfer process
        And the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | tax amount              |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |
            | users email             |
            | share button            |
            | exit button             |

    @INT003
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    @backend-smoke
    Scenario: Validate - Transfer from product detail to a new contact from a BBVA user - Alias saved
        Given a user with the following criteria
            | criteria          |
            | account transfer  |
            | internal transfer |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "internal saved in contacts" account by entering the destination number
        Then the user sees the following items in the screen
            | item                       |
            | alias in use message       |
            | accept alias in use button |
            | cancel alias in use button |

    @INT004
    @vbank
    @MX @android @ios
    @web
    @web-done
    @backend(test)
    @backend-smoke
    Scenario: Validate - Transfer from product detail to a new contact, when new contact is a BBVA user
        Given a user with the following criteria
            | criteria          |
            | account transfer  |
            | internal transfer |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "with identified data" account by entering the destination number
        Then the user sees the following items in the screen
            | item                         |
            | correct iron icon            |
            | correct information found    |
            | account number label         |
            | account number span          |
            | bank entity label            |
            | bank entity span             |
            | destinatary name label       |
            | destinatary name span        |
            | destination currency label   |
            | destination currency span    |
            | checkbox                     |
            | save contact paragraph       |
            | save contact iron icon       |
            | save contact span            |
            | input alias internal         |

    @INT005
    @MX @vbank
    @smokeTest @backend(test)
    @ios @android @web @web-done
    @backend-smoke
    Scenario: Dashboard-navigation
        Given a user with the following criteria
            | criteria          |
            | account transfer  |
            | internal transfer |
        And the user accesses to transfer from dashboard and selects a origin "main account"
        And the user exits the recipient screen to select another source account
        When the user selects a contact saved with the destination account "saving bbva"
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | amount title           |
            | amount deposited       |
            | tag in your account    |
            | continue button amount |

    @INT006
    @MX @vbank
    @smokeTest @backend(test)
    @ios @android @web @web-done
    @backend-smoke
    Scenario: Dashboard-link change
        Given a user with the following criteria
            | criteria          |
            | account transfer  |
            | internal transfer |
        And the user initiates a transfer by entering an amount greater than the balance
        When the user continues the transfer with another origin account
        Then the user sees the following items in the screen
            | item                    |
            | concept title           |
            | input reference         |
            | continue button enabled |

    @INT007
    @MX @vbank
    @alternate-scenarios-smoke @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Dashboard - Transfer to a new recipient <description>-<destinatary> without saving
        Given a user with the following criteria
            | criteria  |
            | <account> |
        And the user accesses to transfer from dashboard and selects a origin "<description>"
        And the user adds a "<destinatary>" internal account without saving to contacts
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                        |
            | operation data and hour     |
            | transfered amount           |
            | origin account              |
            | destination account         |
            | concept                     |
            | reference                   |
            | share button                |
            | exit button                 |

        Examples:
            | account          | description  | destinatary   |
            | account transfer | main account | libreton BBVA |
            | account transfer | saving       | TDD BBVA      |
            | account transfer | check        | TDD BBVA      |
            | account transfer | digital      | libreton BBVA |
            | account transfer | digital      | TDD BBVA      |
            | account libreton | libreton     | express BBVA  |
            | account transfer | saving       | express BBVA  |
            | account transfer | check        | express BBVA  |
            | account express  | express      | express BBVA  |
            | account express  | express      | TDD BBVA      |
            | account transfer | digital      | express BBVA  |
            | account libreton | libreton     | TDD BBVA      |

    @INT008
    @MX @vbank
    @alternate-scenarios-smoke @backend(test)
    @ios @android @web @web-done
    Scenario: Account Detail - Transfer to a saved contact
        Given a user with the following criteria
            | criteria          |
            | account transfer  |
        And the user accesses to transfer from account detail and selects a origin "main account"
        And the user selects a contact saved with the destination account "saving bbva"
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                        |
            | operation data and hour     |
            | transfered amount           |
            | origin account              |
            | destination account         |
            | concept                     |
            | reference                   |
            | share button                |
            | exit button                 |

    @INT009
    @MX @vbank
    @alternate-scenarios-smoke @backend(test)
    @ios @android @web @web-done
    Scenario Outline: Account Detail - Transfer to new recipient <description>-check BBVA saving contact
        Given a user with the following criteria
            | criteria  |
            | <account> |
        And the user accesses to transfer from account detail and selects a origin "<description>"
        And the user saves an internal "check BBVA" account as a new contact
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                        |
            | operation data and hour     |
            | transfered amount           |
            | origin account              |
            | destination account         |
            | concept                     |
            | reference                   |
            | share button                |
            | exit button                 |

        Examples:
            | account          | description |
            | account transfer | saving      |
            | account transfer | check       |
            | account libreton | libreton    |
            | account express  | express     |

    @INT010
    @MX @vbank
    @alternate-scenarios-smoke @backend(test)
    @ios @android @web @web-done
    Scenario: Dashboard - Transfer to a new contact by changing the payment reason with the X button
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "main account"
        And the user saves an internal "libreton BBVA" account as a new contact
        And the user changes the concept by entering amount "20" and concept "donativo"
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                        |
            | operation data and hour     |
            | transfered amount           |
            | origin account              |
            | destination account         |
            | concept                     |
            | reference                   |
            | share button                |
            | exit button                 |

    @INT011
    @MX @vbank
    @alternate-scenarios-smoke @backend(test)
    @ios @android @web @web-done
    Scenario: Dashboard- Elimination of contacts with one or more products
        Given a user with the following criteria
            | criteria          |
            | account transfer  |
        And the user accesses to transfer from dashboard and selects a origin "main account"
        And the user selects a destinatary from "saved contact"
        And the user deletes a contact that has "account BBVA"
        When the user cancels the deletion and deletes another contact with "more accounts BBVA"
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | close button    |
            | input search    |
            | swipe list      |
            | contact element |

    @INT012
    @MX @vbank
    @alternate-scenarios-smoke @backend(test)
    @ios @android @web @web-done
    @backend-smoke
    Scenario: Dashboard - New Contact SPEI
        Given a user with the following criteria
            | criteria          |
            | account transfer  |
            | internal transfer |
        And the user accesses to transfer from dashboard and selects a origin "main account"
        And the user selects a destinatary from "new recipient"
        When the user enters a "spei BBVA" number
        Then the user sees the following items in the screen
            | item                         |
            | correct iron icon            |
            | correct information found    |
            | account number label         |
            | account number span          |
            | bank entity label            |
            | bank entity span             |
            | destinatary name label       |
            | destinatary name span        |
            | destination currency label   |
            | destination currency span    |
            | checkbox                     |
            | save contact paragraph       |
            | save contact iron icon       |
            | save contact span            |
            | input alias internal         |

    @INT013
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario Outline: Dashboard- Transfer to a contact from a <description>-<destinatary> account
        Given a user with the following criteria
            | criteria  |
            | <account> |
        And the user accesses to transfer from dashboard and selects a origin "<description>"
        And the user selects a contact saved with the destination account "<destinatary>"
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                        |
            | operation data and hour     |
            | transfered amount           |
            | origin account              |
            | destination account         |
            | concept                     |
            | exit button                 |

        Examples:
            | account          | description  | destinatary   |
            | account transfer | main account | libreton BBVA |
            | account transfer | saving       | saving BBVA   |
            | account transfer | saving       | libreton BBVA |
            | account transfer | saving       | TDC BBVA      |
            | account transfer | check        | saving BBVA   |
            | account transfer | check        | libreton BBVA |
            | account transfer | check        | TDC BBVA      |
            | account libreton | libreton     | saving BBVA   |
            | account libreton | libreton     | TDC BBVA      |
            | account transfer | digital      | libreton BBVA |
            | account transfer | digital      | saving BBVA   |
            | account libreton | libreton     | libreton BBVA |
            | account express  | express      | libreton BBVA |
            | account express  | express      | saving BBVA   |
            | account express  | express      | TDC BBVA      |

    @INT014
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    @backend-smoke
    Scenario: Dashboard - No Contacts
        Given a user with the following criteria
            | criteria          |
            | internal transfer |
            | without contacts  |
        And the user accesses to transfer from dashboard and selects a origin "checks"
        When the user selects a destinatary from "saved contact"
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | message without contacts |
            | close button             |
            | input search             |

    @INT015
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: Saved contact - Validation of the "X" button to exit the successful transfer screen digital-TDC
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "digital"
        And the user selects a contact saved with the destination account "TDC BBVA"
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer with the otp code and closes the successful screen
        Then the user sees the "dashboard" screen

    @INT016
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: New contact - Validation of the "X" button to exit the successful transfer screen digital-TDD
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "digital"
        And the user adds a "TDD BBVA" internal account without saving to contacts
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer with the otp code and closes the successful screen
        Then the user sees the "dashboard" screen

    @INT017
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: Dashboard - Add new product to a contact and transfer digital-account
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "digital"
        And the user adds an internal "express BBVA" account to an already saved contact
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                        |
            | operation data and hour     |
            | transfered amount           |
            | origin account              |
            | destination account         |
            | concept                     |
            | reference                   |
            | share button                |
            | exit button                 |

    @INT018
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    @backend-smoke
    Scenario:  Dashboard - Validate message when the contact is already registered
        Given a user with the following criteria
            | criteria          |
            | account transfer  |
            | internal transfer |
        And the user accesses to transfer from dashboard and selects a origin "main account"
        And the user selects a destinatary from "new recipient"
        When the user enters a "TDC BBVA" number
        Then the user sees the following items in the screen
            | item                          |
            | close button                  |
            | contact already saved message |
            | alias in use message          |
            | continue button               |

    @INT019
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: Validation modal when the destination number is not found in dimo
        Given a user with the following criteria
            | criteria      |
            | dimo transfer |
            | accounts      |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "with phone number not found in dimo" account by entering the destination number
        Then the user sees a modal with the following elements:
            | item             |
            | help icon        |
            | title text       |
            | text information |
            | accept button    |
            | cancel button    |

    @INT020
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Validation modal to invite dimo when the destination number is not found in dimo
        Given a user with the following criteria
            | criteria      |
            | dimo transfer |
            | accounts      |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "with phone number not found in dimo" account by entering the destination number
        When the user invite the contact to Dimo
        Then the user sees a modal with the following elements:
            | item              |
            | header            |
            | message container |
            | text information  |
            | text information  |
            | accept button     |

    @INT021
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Validation of the another time option to exit modal invite dimo and shows the new contact screen
        Given a user with the following criteria
            | criteria      |
            | dimo transfer |
            | accounts      |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "with phone number not found in dimo" account by entering the destination number
        When the user decides to invite to dimo at another time
        Then the user sees the following items in the screen
            | item                           |
            | correct information found      |
            | account number label           |
            | account number span            |
            | bank entity input              |
            | input recipient name           |
            | input recipient name icon      |
            | input recipient name paragraph |
            | checkbox                       |
            | save contact paragraph         |
            | save contact iron icon         |
            | save contact span              |
            | input alias internal           |

    @INT022
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario:  Validation of the "X" button to exit modal invite dimo and shows the new contact screen
        Given a user with the following criteria
            | criteria      |
            | dimo transfer |
            | accounts      |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "with phone number not found in dimo" account by entering the destination number
        When the user invite the contact to Dimo and closes the invite modal
        Then the user sees the following items in the screen
            | item                           |
            | correct information found      |
            | account number label           |
            | account number span            |
            | bank entity input              |
            | input recipient name           |
            | input recipient name icon      |
            | input recipient name paragraph |
            | checkbox                       |
            | save contact paragraph         |
            | save contact iron icon         |
            | save contact span              |
            | input alias internal           |

    @INT030
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Validation MTU limits from internal transfer
        Given a user with the following criteria
            | criteria                              |
            | exception transfers with exceeded mtu |
        And the user accesses to transfer from account detail and selects a origin "main account"
        And the user selects a destinatary from "new recipient"
        When the user completes the transfer "internal identified" contact and accesses MTU limit exceeded screen
        Then the user sees the following items in the screen
            | item			                   |
            | header limit exceeded            |
            | microillustration limit exceeded |
            | title limit exceeded             |
            | first paragraph limit exceeded   |
            | second paragraph limit exceeded  |
            | button limit exceeded            |
            | link limit exceeded              |

    @INT031
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Confirm MTU import from internal transfer
        Given a user with the following criteria
            | criteria                              |
            | exception transfers with exceeded mtu |
        And the user accesses to transfer from account detail and selects a origin "main account"
        And the user selects a destinatary from "new recipient"
        And the user completes the transfer "internal identified" contact and accesses MTU limit exceeded screen
        When the user confirms the MTU exception
        Then the user sees the following items in the screen
            | item			                           |
            | close button confirmation max limit      |
            | header confirmation max limit            |
            | microillustration confirmation max limit |
            | title confirmation max limit             |
            | description confirmation max limit       |
            | button confirmation max limit            |

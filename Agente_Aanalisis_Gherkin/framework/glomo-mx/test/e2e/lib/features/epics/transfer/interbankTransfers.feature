@transfers @interbankTransfer
Feature: Interbank Transfers

    @IBT001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @JIRA.GLOMOMX-94322
    @vbank_modified
    # Campaigns service recording has been added
    Scenario: Validate - Transfer from product detail to a new "not found interbank" contact - Save contact
        Given a user with the following criteria
            | criteria          |
            | transfers account |
        And the user starts the application at date:
            | day   | 28   |
            | month | 9    |
            | year  | 2022 |
            | hour  | 14   |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "not found interbank" account by entering the destination number
        And the user introduces amount and concept in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    | value   |
            | operation data and hour |         |
            | transfered amount       |         |
            | origin account          |         |
            | destination account     |         |
            | concept                 |         |
            | reference               |         |
            | share button            |         |
            | exit button             |         |
            | offer card              | visible |

    @IBT002
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario: Validate - Transfer from product detail to a new "already saved interbank" contact from another bank
        Given a user with the following criteria
            | criteria          |
            | transfers account |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "already saved interbank" account by entering the destination number
        And the user introduces amount and concept in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |

    @IBT003
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    Scenario: Validate - Transfer from dashboard to a new "not found interbank contact"
        Given a user with the following criteria
            | criteria          |
            | transfers account |
        When the user starts the application at date:
            | hour  | 12   |
            | day   | 17   |
            | month | 07   |
            | year  | 2027 |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "not found interbank contact" account by entering the destination number
        And the user introduces amount and concept in transfer process
        And the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |

    @IBT004
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @smokeTest
    @backend-smoke
    Scenario: Validate - Transfer from product detail to a new contact, when new contact is not from BBVA
        Given a user with the following criteria
            | criteria           |
            | account transfer   |
            | interbank transfer |
        When the user starts the application at date:
            | hour  | 12   |
            | day   | 17   |
            | month | 07   |
            | year  | 2026 |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "without identified data" account by entering the destination number
        Then the user sees the following items in the screen
            | item                           |
            | correct information found      |
            | account number label           |
            | account number span            |
            | bank entity label              |
            | bank entity span               |
            | input recipient name           |
            | input recipient name icon      |
            | input recipient name paragraph |
            | checkbox                       |
            | save contact paragraph         |
            | save contact iron icon         |
            | save contact span              |
            | input alias internal           |

    @IBT005
    @vbank
    @MX @android @ios
    @web @web-done
    @backend(test)
    @smokeTest
    @backend-smoke
    Scenario: Validate - OTP - Transfer of product detail when adding a new contact
        Given a user with the following criteria
            | criteria           |
            | account transfer   |
            | interbank transfer |
        When the user starts the application at date:
            | hour  | 12   |
            | day   | 17   |
            | month | 07   |
            | year  | 2027 |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "save new contact" account by entering the destination number
        Then the user sees the following items in the screen
            | item                | value |
            | Header otp          |       |
            | Title otp           |       |
            | Input otp           |       |
            | Continue button otp |       |

    @IBT006
    @MX @vbank
    @smokeTest @backend(test)
    @ios @android @web
    @web-done
    Scenario: Modal displaying the credit card offer
        Given a user with the following criteria
            | criteria          |
            | transfers account |
        And the user starts the application at date:
            | day   | 28   |
            | month | 9    |
            | year  | 2022 |
            | hour  | 14   |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "not found interbank" account by entering the destination number
        And the user introduces amount and concept in transfer process
        And the user completes the transfer process with otp code
        When the user exits the screen successfully
        Then the user sees the following items in the screen
            | item         |
            | modal header |
            | modal image  |
            | modal title  |
            | modal text   |
            | list title   |
            | modal list   |
            | primary btn  |

    @IBT007
    @MX @vbank
    @backend(test)
    @alternate-scenarios-smoke
    @ios @android @web @web-done
    Scenario: Interbank transfer from product detail - New recipient saving-SPEI
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from account detail and selects a origin "saving"
        And the user adds an unknown "SPEI" interbank account saving to contacts
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |

    @IBT008
    @MX @vbank
    @backend(test)
    @alternate-scenarios-smoke
    @ios @android @web @web-done
    Scenario: From the saving account detail - delete contact
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from account detail and selects a origin "saving"
        And the user selects a destinatary from "saved contact"
        And the user deletes a "contact" user
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | close button    |
            | input search    |
            | swipe list      |
            | contact element |

    @IBT009
    @MX @vbank
    @backend(test)
    @alternate-scenarios-smoke
    @ios @android @web @web-done
    Scenario Outline: Interbank transfer from detail - Add <destinatary> to a saved contact <description>-<destinatary>
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from account detail and selects a origin "<description>"
        And the user selects a destinatary from "new recipient"
        And the user adds the destination number "<destinatary>" of the interbank account not found to a saved contact
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | change destination button |
            | amount deposited          |
            | update recipient title    |
        Examples:
            | description | destinatary |
            | check       | TDC         |
            | saving      | CLABE       |

    @IBT010
    @MX @vbank
    @backend(test)
    @alternate-scenarios-smoke
    @ios @android @web @web-done
    Scenario: Interbank transfer from detail - Add SPEI to a saved contact saving-SPEI
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from account detail and selects a origin "saving"
        And the user selects a destinatary from "new recipient"
        And the user adds the destination number "SPEI" of the interbank account not found to a saved contact
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | change destination button |
            | amount deposited          |
            | update recipient title    |

    @IBT011
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario Outline: Interbank transfer from footer to saved contact- <description>-<destinatary>
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "<description>"
        And the user selects a contact saved with the destination account "<destinatary>"
        And the user enters amount "<amount>" and concept "<concept>" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |
        Examples:
            | description | destinatary | amount | concept  |
            | saving      | CLABE       | 20     | donativo |
            | check       | CLABE       | 20     | donativo |
            | check       | TDD         | 20     | donativo |
            | digital     | CLABE       | 20     | donativo |
            | digital     | TDC         | 20     | donativo |
            | digital     | TDD         | 20     | donativo |

    @IBT012
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario Outline: Interbank transfer from footer to saved contact- <description>-<destinatary>
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "<description>"
        And the user selects a contact saved with the destination account "<destinatary>"
        And the user enters amount "<amount>" and concept "<concept>" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |
        Examples:
            | description | destinatary | amount | concept  |
            | saving      | SPEI        | 20     | donativo |
            | check       | SPEI        | 20     | donativo |
            | digital     | SPEI        | 20     | donativo |

    @IBT013
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario Outline: Interbank transfer from footer to saved contact- express-<destinatary>
        Given a user with the following criteria
            | criteria        |
            | account express |
        And the user accesses to transfer from dashboard and selects a origin "express"
        And the user selects a contact saved with the destination account "<destinatary>"
        And the user enters amount "<amount>" and concept "<concept>" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |
        Examples:
            | destinatary | amount | concept  |
            | CLABE       | 20     | donativo |
            | TDC         | 20     | donativo |
            | TDD         | 20     | donativo |

    @IBT014
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: Interbank transfer from footer to saved contact- express-SPEI
        Given a user with the following criteria
            | criteria        |
            | account express |
        And the user accesses to transfer from dashboard and selects a origin "express"
        And the user selects a contact saved with the destination account "SPEI"
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |

    @IBT015
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario Outline: Interbank transfer to a new recipient from the footer - Without saving contact - <description>-<destinatary>
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "<description>"
        And the user adds a "<destinatary>" interbank account without saving to contacts
        And the user enters amount "<amount>" and concept "<concept>" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |
        Examples:
            | description | destinatary | amount | concept  |
            | saving      | CLABE       | 20     | donativo |
            | saving      | TDD         | 20     | donativo |
            | check       | CLABE       | 20     | donativo |
            | check       | TDD         | 20     | donativo |
            | digital     | CLABE       | 20     | donativo |
            | digital     | TDD         | 20     | donativo |

    @IBT016
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario Outline: Interbank transfer to a new recipient from the footer - Without saving contact - <description>-<destinatary>
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "<description>"
        And the user adds a "<destinatary>" interbank account without saving to contacts
        And the user enters amount "<amount>" and concept "<concept>" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |
        Examples:
            | description | destinatary | amount     | concept  |
            | saving      | SPEI        | 20         | donativo |
            | check       | SPEI        | 20         | donativo |
            | digital     | SPEI        | 500,000.00 | donativo |

    @IBT017
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario Outline: Interbank transfer to a new recipient from the footer - express-<destinatary>
        Given a user with the following criteria
            | criteria        |
            | account express |
        And the user accesses to transfer from dashboard and selects a origin "express"
        And the user adds an unknown "<destinatary>" interbank account saving to contacts
        And the user enters amount "<amount>" and concept "<concept>" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |
        Examples:
            | destinatary | amount | concept  |
            | CLABE       | 20     | donativo |
            | TDD         | 20     | donativo |

    @IBT018
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: Interbank transfer to a new recipient from the footer - express-SPEI
        Given a user with the following criteria
            | criteria        |
            | account express |
        And the user accesses to transfer from dashboard and selects a origin "express"
        And the user adds an unknown "SPEI" interbank account saving to contacts
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |

    @IBT019
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: Interbank transfer with change of source account
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "saving"
        And the user selects a contact saved with the destination account "TDD"
        And the user changes the source account and continues with the transfer to a contact
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |

    @IBT020
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    @backend-smoke
    Scenario Outline: Search existing contacts by <description>
        Given a user with the following criteria
            | criteria           |
            | account transfer   |
            | interbank transfer |
        And the user accesses to transfer from dashboard and selects a origin "saving"
        And the user selects a destinatary from "saved contact"
        When the user searches for the existing contact by "<description>"
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | close button    |
            | input search    |
            | swipe list      |
            | contact element |
        Examples:
            | description  |
            | name correct |
            | CLABE        |
            | TDC          |

    @IBT021
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    @backend-smoke
    Scenario: Search non-existent contact by wrong name
        Given a user with the following criteria
            | criteria           |
            | account transfer   |
            | interbank transfer |
        And the user accesses to transfer from dashboard and selects a origin "saving"
        And the user selects a destinatary from "saved contact"
        When the user searches for the existing contact by "wrong name"
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | close button |
            | input search |
            | swipe list   |

    @IBT022
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: Interbank transfer to a new recipient from the detail when the TDD is not recognized
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from account detail and selects a origin "saving"
        And the user adds a "unrecognized tdd" interbank account without saving to contacts
        And the user enters amount "20" and concept "donativo" in transfer process
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |

    @IBT023
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: Interbank transfer to a saved contact searched by TDC
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from dashboard and selects a origin "check"
        And the user selects a destinatary from "saved contact"
        And the user continues the transfer to the contact found by "TDC"
        When the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | reference               |
            | share button            |
            | exit button             |

    @IBT024
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    @backend-smoke
    Scenario: Interbank transfer entering an amount greater than that of the account
        Given a user with the following criteria
            | criteria           |
            | account transfer   |
            | interbank transfer |
        And the user accesses to transfer from account detail and selects a origin "saving"
        And the user adds a "TDD" interbank account without saving to contacts
        When the user enter amount "9999999998600"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | header exit button      |
            | amount title            |
            | amount deposited        |
            | amount exceeded message |

    @IBT025
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    @backend-smoke
    Scenario: Validate error message in account without money
        Given a user with the following criteria
            | criteria           |
            | account transfer   |
            | interbank transfer |
        When the user accesses to transfer from dashboard and selects a origin "account without money"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | header exit button           |
            | insufficient balance message |

    @IBT026
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    Scenario: From the saving account detail - delete contact with more than 3 products
        Given a user with the following criteria
            | criteria         |
            | account transfer |
        And the user accesses to transfer from account detail and selects a origin "saving"
        And the user selects a destinatary from "saved contact"
        And the user deletes a "contact" user
        When the user cancels the deletion and deletes another contact with more than 3 products
        Then the user sees the following items in the screen
            | item            |
            | header          |
            | close button    |
            | input search    |
            | swipe list      |
            | contact element |

    @IBT027
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    @backend-smoke
    Scenario: Validation of the "Accept" button when leaving the summary screen "X"
        Given a user with the following criteria
            | criteria           |
            | account transfer   |
            | interbank transfer |
        And the user accesses to transfer from dashboard and selects a origin "saving"
        And the user selects a contact saved with the destination account "SPEI"
        And the user enter amount "20" and concept "donativo"
        When the user "accepts" that he wants to close the transfer screen
        Then the user accesses the "dashboard" screen

    @IBT028
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    @backend-smoke
    Scenario: Validation of the "Cancel" button when leaving the summary screen "X"
        Given a user with the following criteria
            | criteria           |
            | account transfer   |
            | interbank transfer |
        And the user accesses to transfer from dashboard and selects a origin "saving"
        And the user selects a contact saved with the destination account "SPEI"
        And the user enter amount "20" and concept "donativo"
        When the user "cancels" that he wants to close the transfer screen
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | change origin button      |
            | change destination button |
            | change amount button      |
            | change concept button     |

    @IBT029
    @MX @vbank
    @backend(test)
    @web-done @alternate-scenarios-smoke
    @ios @android @web
    @backend-smoke
    Scenario: Validation of "X" button on the token screen
        Given a user with the following criteria
            | criteria           |
            | account transfer   |
            | interbank transfer |
        And the user accesses to transfer from dashboard and selects a origin "saving"
        And the user selects a contact saved with the destination account "SPEI"
        When the user continues with the transfer and closes the token screen
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | change origin button      |
            | change destination button |
            | change amount button      |
            | change concept button     |

    @IBT030
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

    @IBT031
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

    @IBT032
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

    @IBT033
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

    @IBT034
    @MX @vbank
    @backend(test)
    @web-done
    @ios @android @web
    Scenario: Validate MTU from interbank transfer SPEI
        Given a user with the following criteria
            | criteria                              |
            | accounts                              |
            | exception transfers with exceeded mtu |
        And the user accesses to transfer from dashboard and selects a origin "principal"
        And the user selects a contact saved with the destination account "SPEI"
        When the user completes the transfer "saved" contact and accesses MTU limit exceeded screen
        Then the user sees the following items in the screen
            | item			                   |
            | header limit exceeded            |
            | microillustration limit exceeded |
            | title limit exceeded             |
            | first paragraph limit exceeded   |
            | second paragraph limit exceeded  |
            | button limit exceeded            |
            | link limit exceeded              |

    @IBT035
    @MX @vbank
    @backend(test)
    @web-done
    @ios @android @web
    Scenario: Confirm MTU import from interbank transfer SPEI
        Given a user with the following criteria
            | criteria                              |
            | accounts                              |
            | exception transfers with exceeded mtu |
        And the user accesses to transfer from dashboard and selects a origin "principal"
        And the user selects a contact saved with the destination account "SPEI"
        And the user completes the transfer "saved" contact and accesses MTU limit exceeded screen
        When the user confirms the MTU exception
        Then the user sees the following items in the screen
            | item			                           |
            | close button confirmation max limit      |
            | header confirmation max limit            |
            | microillustration confirmation max limit |
            | title confirmation max limit             |
            | description confirmation max limit       |
            | button confirmation max limit            |

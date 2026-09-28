@creditCardHolder
Feature: Credit Card Holder

    @CCH001
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: View the offer in the <scenario> section of the board
        Given a user with the following criteria
            | criteria                      |
            | credit card holder <scenario> |
        When the user accesses to dashboard
        Then the user sees the following items in the screen:
            | item       |
            | <elements> |

        Examples:
            | scenario | elements    |
            | nba      | NBA section |
            | nbo      | NBO section |

    @CCH002
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: View the <case> offer in the opportunities section
        Given a user with the following criteria
            | criteria                      |
            | credit card holder <scenario> |
        When the user accesses contract product section
        Then the user sees the following items in the screen:
            | item   |
            | <case> |

        Examples:
            | scenario | case         |
            | oro      | main banner  |
            | crea     | small banner |

    @CCH003
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: See the benefits when you enter the offer - <scenario>
        Given a user with the following criteria
            | criteria                      |
            | credit card holder <scenario> |
        When the user navigates to the "credit card holder" section
        Then the user sees the following items in the screen:
            | item                 | value          |
            | header               |                |
            | benefits header      |                |
            | benefits container   |                |
            | benefits list bullet |                |
            | notification message | <show element> |
            | see offer            |                |

        Examples:
            | scenario            | show element |
            | oro                 | not visible  |
            | crea                | not visible  |
            | outdated ine        | visible      |
            | outdated rfc        | visible      |
            | outdated rfc or ine | visible      |
            | infinite            | not visible  |

    @CCH004
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: View offer details - <scenario>
        Given a user with the following criteria
            | criteria                      |
            | credit card holder <scenario> |
        And the user navigates to the "credit card holder" section
        When the user performs "continue from the offer page" with "normal"
        Then the user sees the following items in the screen:
            | item                          | value          |
            | offer header                  |                |
            | offer description             |                |
            | offer credit line header      |                |
            | offer credit line img         |                |
            | offer credit line card name   |                |
            | offer credit line enjoy until |                |
            | offer credit line amount      |                |
            | offer credit line edit        |                |
            | offer fees header             |                |
            | offer fees variable rate      |                |
            | offer fees cat without iva    |                |
            | offer see conditions          | <show element> |
            | offer continue                |                |
            | offer advisor call            |                |

        Examples:
            | scenario            | show element |
            | oro                 | visible      |
            | crea                | not visible  |
            | outdated rfc or ine | visible      |

    @CCH005
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: See the payment settings section of the offer - <scenario>
        Given a user with the following criteria
            | criteria                      |
            | credit card holder <scenario> |
        And the user navigates to the "credit card holder" section
        When the user performs "continue from the offer information" with "normal"
        Then the user sees the following items in the screen:
            | item                          |
            | payment header                |
            | payment description           |
            | payment deadline modal        |
            | payment deadline form select  |
            | payment deadline list         |
            | payment direct debit modal    |
            | payment domiciliation toggle  |
            | payment domiciliation options |
            | payment domiciliation account |
            | payment notification          |
            | payment continue              |

        Examples:
            | scenario |
            | oro      |
            | crea     |

    @CCH006
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: See the delivery address section of the offer - <scenario> - <case name>
        Given a user with the following criteria
            | criteria                      |
            | credit card holder <scenario> |
        And the user navigates to the "credit card holder" section
        When the user performs "continue from the payment settings" with "<case name>"
        Then the user sees the following items in the screen:
            | item                     | value          |
            | address header           |                |
            | address description      | <show element> |
            | address domicile radio   |                |
            | address unmasked address |                |
            | address show address     |                |
            | address branch radio     | <show element> |
            | address notification     |                |
            | address continue         |                |

        Examples:
            | scenario     | show element | case name                |
            | oro          | visible      | normal                   |
            | oro          | visible      | direct debit deactivated |
            | oro          | visible      | interest free payment    |
            | crea         | not visible  | normal                   |
            | outdated rfc | visible      | fill rfc                 |

    @CCH007
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: Check the select all box in the terms and conditions section - <scenario> - <case name>
        Given a user with the following criteria
            | criteria                      |
            | credit card holder <scenario> |
        And the user navigates to the "credit card holder" section
        When the user performs "continue from the delivery address" with "<case name>"
        Then the user sees the following items in the screen:
            | item                     |
            | terms header             |
            | terms description        |
            | terms credit history     |
            | terms contract           |
            | terms domicile           |
            | terms documents header   |
            | terms documents pdfs     |
            | terms documents checkbox |
            | terms continue           |

        Examples:
            | scenario     | case name                |
            | oro          | normal                   |
            | oro          | direct debit deactivated |
            | oro          | interest free payment    |
            | oro          | select branch delivery   |
            | crea         | normal                   |
            | outdated rfc | fill rfc                 |

    @CCH008
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: View summary screen - <scenario> - <case name>
        Given a user with the following criteria
            | criteria                      |
            | credit card holder <scenario> |
        And the user navigates to the "credit card holder" section
        When the user performs "continue from the terms and conditions" with "<case name>"
        Then the user sees the following items in the screen:
            | item                      |
            | all completed multi step  |
            | request card summary step |

        Examples:
            | scenario     | case name                |
            | oro          | normal                   |
            | oro          | direct debit deactivated |
            | oro          | interest free payment    |
            | oro          | select branch delivery   |
            | crea         | normal                   |
            | outdated rfc | fill rfc                 |

    @CCH009
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    @smokeTest
    Scenario Outline: Complete the hiring process - <scenario> - <case name>
        Given a user with the following criteria
            | criteria                      |
            | credit card holder <scenario> |
        And the user navigates to the "credit card holder" section
        And the user performs "request card" with "<case name>"
        When the user enters the OTP in the credit card holder section
        Then the user sees the following items in the screen:
            | item                         |
            | receipt header               |
            | receipt btn close            |
            | receipt content success      |
            | date list simple             |
            | credit card list simple      |
            | deadline payment list simple |
            | court date list simple       |
            | domiciliation list simple    |
            | charge account list simple   |
            | delivery address list simple |
            | email list simple            |
            | receipt notification message |
            | view documents               |
            | share receipt                |

        Examples:
            | scenario     | case name                |
            | oro          | normal                   |
            | oro          | direct debit deactivated |
            | oro          | interest free payment    |
            | oro          | select branch delivery   |
            | crea         | normal                   |
            | outdated rfc | fill rfc                 |
            | infinite     | wealth management office |
            | infinite     | normal                   |
            | start        | normal                   |

    @CCH010
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View benefit details from the offer page
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "view benefits from the offer page" with "normal"
        Then the user sees the following items in the screen:
            | item                         |
            | modals header                |
            | modals btn close             |
            | modals primary list bullet   |
            | modals secondary list bullet |
            | modals primary text          |

    @CCH011
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Change credit limit from information offer step
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "change credit limit from the offer information" with "normal"
        Then the user sees the following items in the screen:
            | item                |
            | modals header       |
            | modals btn close    |
            | modals primary text |
            | modals input        |
            | modals continue     |

    @CCH012
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Confirm new line of credit
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "confirm new line from the offer information" with "normal"
        Then the user sees the following items in the screen:
            | item                          |
            | offer credit line header      |
            | offer credit line img         |
            | offer credit line card name   |
            | offer credit line enjoy until |
            | offer credit line amount      |
            | offer credit line edit        |

    @CCH013
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View cat information
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "view cat information from the offer information" with "normal"
        Then the user sees the following items in the screen:
            | item                    |
            | modals header           |
            | modals btn close        |
            | modals help modal title |
            | modals primary text     |
            | modals secondary text   |

    @CCH014
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View interest rate information
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "view interest rate information from the offer information" with "normal"
        Then the user sees the following items in the screen:
            | item                      |
            | modals header             |
            | modals btn close          |
            | modals help modal title   |
            | modals help modal content |

    @CCH015
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: See additional information on the conditions
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "view conditions offer information" with "normal"
        Then the user sees the following items in the screen:
            | item                    |
            | modals header           |
            | modals btn close        |
            | modals help modal title |
            | modals primary text     |
            | modals secondary text   |

    @CCH016
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Change payment deadline
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "change payment deadline from the payment settings" with "normal"
        Then the user sees the following items in the screen:
            | item                         |
            | payment deadline form select |
            | payment deadline list        |

    @CCH017
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Deactivate direct debit
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "deactivate direct debit from the payment settings" with "normal"
        Then the user sees the following items in the screen:
            | item                                     |
            | payment domiciliation toggle desactivate |

    @CCH018
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Select payment to avoid generating interest
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "select payment to avoid generating interest from payment settings" with "normal"
        Then the user sees the following items in the screen:
            | item                    |
            | payment minimum payment |
            | payment avoid interest  |

    @CCH019
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Payment deadline information
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "view payment deadline information from the payment settings" with "normal"
        Then the user sees the following items in the screen:
            | item                         |
            | modals header                |
            | modals btn close             |
            | modals help modal title      |
            | modals primary list bullet   |
            | modals secondary list bullet |
            | modals tertiary list bullet  |

    @CCH020
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Direct debit payment information
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "view direct debit payment information from the payment settings" with "normal"
        Then the user sees the following items in the screen:
            | item                         |
            | modals header                |
            | modals btn close             |
            | modals help modal title      |
            | modals primary list bullet   |
            | modals secondary list bullet |
            | modals tertiary list bullet  |

    @CCH021
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Show full home address
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        And the user performs "show full home address from delivery address" with "normal"
        When the user enters the OTP in the credit card holder section
        Then the user sees the following items in the screen:
            | item                       |
            | address obfuscated address |

    @CCH022
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Hide full home address
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "hide full home address from delivery address" with "normal"
        Then the user sees the following items in the screen:
            | item                     |
            | address unmasked address |

    @CCH023
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Select branch as delivery address
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "select branch as delivery address from delivery address" with "normal"
        Then the user sees the following items in the screen:
            | item                             |
            | address domicile radio desactive |
            | address branch radio active      |

    @CCH024
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Delivery address information
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "view delivery address information from delivery address" with "normal"
        Then the user sees the following items in the screen:
            | item                         |
            | modals btn close             |
            | modals help modal title      |
            | modals primary list bullet   |
            | modals secondary list bullet |

    @CCH025
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Credit history inquiry information
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "view credit history inquiry information from terms and conditions" with "normal"
        Then the user sees the following items in the screen:
            | item                    |
            | modals header           |
            | modals btn close        |
            | modals help modal title |
            | modals primary text     |
            | modals secondary text   |

    @CCH026
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: See the benefits by looking beyond the details
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        And the user performs "view benefits from the offer page" with "normal"
        When the user exits the credit card holder section from "exit close from modals"
        Then the user sees the following items in the screen:
            | item                 |
            | benefits header      |
            | benefits container   |
            | benefits list bullet |

    @CCH027
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View details of the general offer without going through the benefits
        Given a user with the following criteria
            | criteria                           |
            | credit card holder not preapproved |
        And the user navigates to the "non preapproved credit card" section
        When the user continues from the offer page without benefits to "continue from the terms and conditions"
        Then the user sees the following items in the screen:
            | item                      |
            | all completed multi step  |
            | request card summary step |

    @CCH028
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: Show the <scenario> section when editing from the summary - <scenario>
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "edit from the summary <scenario>" with "normal"
        Then the user sees the following items in the screen:
            | item          |
            | <header>      |
            | <description> |
            | <content1>    |
            | <content2>    |

        Examples:
            | scenario             | header         | description          | content1                 | content2                    |
            | offer information    | offer header   | offer description    | offer credit line header | offer credit line card name |
            | payment settings     | payment header | payment description  | payment deadline modal   | payment direct debit modal  |
            | delivery address     | address header | address show address | address domicile radio   | address unmasked address    |
            | terms and conditions | terms header   | terms description    | terms contract           | terms domicile              |

    @CCH029
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Display the summary screen after making a change in a section
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        And the user performs "edit from the summary offer information" with "normal"
        When the user makes a change in the offer information section
        Then the user sees the following items in the screen:
            | item                      |
            | all completed multi step  |
            | request card summary step |

    @CCH030
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View documents generated during the hiring process
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "view documents from the receipt" with "normal"
        Then the user sees the following items in the screen:
            | item                      |
            | modals header             |
            | modals btn close          |
            | card terms and conditions |
            | direct debit form         |

    @CCH031
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: See the payment settings section of the not preapproved offer
        Given a user with the following criteria
            | criteria                           |
            | credit card holder not preapproved |
        And the user navigates to the "non preapproved credit card" section
        When the user continues from the offer page without benefits to "continue from the offer information"
        Then the user sees the following items in the screen:
            | item                          |
            | payment header                |
            | payment deadline modal        |
            | payment direct debit modal    |
            | payment domiciliation toggle  |
            | payment domiciliation options |
            | payment domiciliation account |
            | payment notification          |
            | payment continue              |

    @CCH032
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: See the payment settings section of the offer - outdated rfc
        Given a user with the following criteria
            | criteria                        |
            | credit card holder outdated rfc |
        And the user navigates to the "credit card holder" section
        And the user performs "continue from the offer information with rfc" with "normal"
        When the user enters the OTP in the credit card holder section
        Then the user sees the following items in the screen:
            | item                          |
            | payment header                |
            | payment description           |
            | payment deadline modal        |
            | payment deadline form select  |
            | payment deadline list         |
            | payment direct debit modal    |
            | payment domiciliation toggle  |
            | payment domiciliation options |
            | payment domiciliation account |
            | payment notification          |
            | payment continue              |

    @CCH033
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Exit confirmation method when a process has already been completed
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user exits the credit card holder section from "offer information"
        Then the user sees the following items in the screen:
            | item                      |
            | modals header             |
            | modals btn close          |
            | modals help modal title   |
            | modals help modal content |
            | modals continue           |
            | modals continue process   |

    @CCH034
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario Outline: Exit the process - <scenario>
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user exits the credit card holder section from "<from>"
        Then the user sees the "contract product section" screen

        Examples:
            | scenario                                  | from                        |
            | from the modal means of exit confirmation | exit from offer information |
            | without having interacted                 | exit from offer page        |
            | from the success screen                   | exit from receipt           |

    @CCH035
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Continue in the process
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user remains in the credit card holder section
        Then the user sees the following items in the screen:
            | item                          | value   |
            | offer header                  |         |
            | offer description             |         |
            | offer credit line header      |         |
            | offer credit line img         |         |
            | offer credit line card name   |         |
            | offer credit line enjoy until |         |
            | offer credit line amount      |         |
            | offer credit line edit        |         |
            | offer fees header             |         |
            | offer fees variable rate      |         |
            | offer fees cat without iva    |         |
            | offer see conditions          | visible |
            | offer continue                |         |
            | offer advisor call            |         |

    @CCH036
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: See the delivery address section of the not preapproved offer
        Given a user with the following criteria
            | criteria                           |
            | credit card holder not preapproved |
        And the user navigates to the "non preapproved credit card" section
        When the user continues from the offer page without benefits to "continue from the payment settings"
        Then the user sees the following items in the screen:
            | item                     |
            | address header           |
            | address domicile radio   |
            | address unmasked address |
            | address show address     |
            | address notification     |
            | address continue         |

    @CCH037
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Check the select all box in the not preapproved section of the terms and conditions section
        Given a user with the following criteria
            | criteria                           |
            | credit card holder not preapproved |
        And the user navigates to the "non preapproved credit card" section
        When the user continues from the offer page without benefits to "continue from the delivery address"
        Then the user sees the following items in the screen:
            | item                     |
            | terms header             |
            | terms description        |
            | terms credit history     |
            | terms contract           |
            | terms domicile           |
            | terms documents header   |
            | terms documents pdfs     |
            | terms documents checkbox |
            | terms continue           |

    @CCH038
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Please refer to the your data section and complete the requested information
        Given a user with the following criteria
            | criteria                        |
            | credit card holder outdated rfc |
        And the user navigates to the "credit card holder" section
        When the user performs "select rfc checkbox" with "normal"
        Then the user sees the following items in the screen:
            | item                        |
            | fiscal data checkbox active |

    @CCH039
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View privacy notice information
        Given a user with the following criteria
            | criteria                        |
            | credit card holder outdated rfc |
        And the user navigates to the "credit card holder" section
        When the user performs "view privacy notice from fiscal data" with "normal"
        Then the user sees the following items in the screen:
            | item                      |
            | modals header             |
            | modals btn close          |
            | modals help modal content |
            | modals primary text       |
            | modals secondary text     |

    @CCH040
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View error message per maximum credit line
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "enter maximum amount in the offer information" with "normal"
        Then the user sees the following items in the screen:
            | item                            |
            | modals input notification error |

    @CCH041
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View error message for minimum credit line
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        When the user performs "enter minimum amount in the offer information" with "normal"
        Then the user sees the following items in the screen:
            | item                            |
            | modals input notification error |

    @CCH042
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View error message for minimum RFC character count
        Given a user with the following criteria
            | criteria                        |
            | credit card holder outdated rfc |
        And the user navigates to the "credit card holder" section
        When the user performs "enter rfc with less than 10 characters in the fiscal data" with "normal"
        Then the user sees the following items in the screen:
            | item                               |
            | rfc error minimum characters error |

    @CCH043
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View error message for minimum homoclave character count
        Given a user with the following criteria
            | criteria                        |
            | credit card holder outdated rfc |
        And the user navigates to the "credit card holder" section
        When the user performs "enter homoclave with less than 3 characters in the fiscal data" with "normal"
        Then the user sees the following items in the screen:
            | item                               |
            | rfc error minimum characters error |
            | minimum characters homoclave error |

    @CCH044
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Exit the informational modal medium of the cat
        Given a user with the following criteria
            | criteria               |
            | credit card holder oro |
        And the user navigates to the "credit card holder" section
        And the user performs "view cat information from the offer information" with "normal"
        When the user exits the credit card holder section from "exit close from modals"
        Then the user sees the following items in the screen:
            | item                       | value   |
            | offer fees variable rate   |         |
            | offer fees cat without iva |         |
            | offer see conditions       | visible |
            | offer continue             |         |

    @CCH045
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: View summary screen not preapproved
        Given a user with the following criteria
            | criteria                           |
            | credit card holder not preapproved |
        And the user navigates to the "non preapproved credit card" section
        When the user continues from the offer page without benefits to "continue from the terms and conditions"
        Then the user sees the following items in the screen:
            | item                      |
            | all completed multi step  |
            | request card summary step |

    @CCH046
    @vbank
    @MX
    @web @ios @android
    @web-done
    @spherica
    @backend(test)
    Scenario: Complete the hiring process not preapproved
        Given a user with the following criteria
            | criteria                           |
            | credit card holder not preapproved |
        And the user navigates to the "non preapproved credit card" section
        And the user continues from the offer page without benefits to "request card"
        When the user enters the OTP in the credit card holder section
        Then the user sees the following items in the screen:
            | item                         |
            | receipt header               |
            | receipt btn close            |
            | receipt content success      |
            | date list simple             |
            | credit card list simple      |
            | deadline payment list simple |
            | court date list simple       |
            | domiciliation list simple    |
            | charge account list simple   |
            | delivery address list simple |
            | receipt notification message |
            | view documents               |
            | share receipt                |

    @CCH047
    @MX @web @ios @android @smokeTest
    @vbank @backend(test) @web-done @vbank-modified
    Scenario: Credit card holder old - happy path
        Given a user with the following criteria
            | criteria               |
            | credit card holder otp |
        And the user navigates to the "credit card holder old" section
        When the user request card from credit card offer screen
        Then the user sees the following items in the screen
            | item             |
            | head success     |
            | information card |
            | document icon    |
            | card number      |
            | payment type     |
            | savings account  |
            | address shipment |
            | information cc   |
            | infrmation email |
            | exit button      |

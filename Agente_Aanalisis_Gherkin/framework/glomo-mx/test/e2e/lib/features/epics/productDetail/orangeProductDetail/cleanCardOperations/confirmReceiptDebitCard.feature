@ConfirmReceiptDebitCard
Feature: ConfirmReceiptDebitCard

    @CRDC001
    @MX
    @vbank
    @backend(test)
    @web-done
    @web @android @ios
    @smokeTest
    Scenario: Access to confirmation of receipt of a clean card - successful confirmation
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | debit card confirmation     |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the sms key "12345678" is entered
        And the user accesses the link confirm receipt
        And the user accesses to native scan reader
        When the user scans the qr code of the "debit card confirmation"
        Then the user sees a "full height" modal with the following elements:
            | item          | value                |
            | header        | Tarjeta recibida     |
            | hero image    |                      |
            | title         | Confirmación exitosa |
            | description   |                      |
            | accept button |                      |

    @CRDC002
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @tmpExclude @JIRA.GLOMOMX-186671
    Scenario: Access to confirmation of receipt of clean card - QR code scanned is invalid
        Given a user with the following criteria
            | criteria                    |
            | debit card pending delivery |
            | debit card confirmation     |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the sms key "12345678" is entered
        And the user accesses the link confirm receipt
        And the user accesses to native scan reader
        When the user scans the qr code of the "debit card confirmation invalid"
        Then the user sees a "full height" modal with the following elements:
            | item          | value               |
            | header        | Error               |
            | hero image    |                     |
            | message       | El Qr es incorrecto |
            | description   |                     |
            | accept button |                     |
            | cancel button |                     |

    @CRDC003
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Access to confirmation of receipt of clean card - We had a problem
        Given a user with the following criteria
            | criteria                |
            | debit card confirmation |
        And the user accesses to the "pending delivery virtual tdd" "debit" card product detail
        And the user accesses the entry point consult and confirm with "delivered"
        And the sms key "12345678" is entered
        And the user accesses the link confirm receipt
        And the user accesses to native scan reader
        When the user scans the qr code of the "debit card confirmation"
        Then the user sees a "full height" modal with the following elements:
            | item          | value               |
            | header        | Error               |
            | hero image    |                     |
            | message       | Tuvimos un problema |
            | description   |                     |
            | accept button |                     |
            | cancel button |                     |

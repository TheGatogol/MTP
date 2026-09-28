@ReuseTransfer
Feature: Reuse Transfer

    @RET001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    Scenario: The user reuse a previous transfer from dashboard
        Given a user with the following criteria
            | criteria    |
            | accounts    |
        And the user accesses to transfer from dashboard and selects a origin "account own"
        And the user selects a destinatary from "reuse operations"
        And the user select an "internal" operation from transactions list
        When the user completes the reuse transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |

    @RET002
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario Outline: The user reuse a previous transfer from dashboard - <reused_movemnt>
        Given a user with the following criteria
            | criteria  |
            | accounts  |
        And the user accesses to transfer from account detail and selects a origin "main account"
        And the user selects a destinatary from "reuse operations"
        And the user select an "<transfer_type>" operation from transactions list
        When the user completes the reuse transfer process with otp code
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation number        |
        Examples:
            | reused_movemnt | transfer_type |
            | interbank      | interbank     |
            | internal       | internal      |
            | account detail | internal      |

    @RET003
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user reuse a previous own transfer from account detail
        Given a user with the following criteria
            | criteria       |
            | accounts       |
            | reuse tranfers |
        And the user accesses to transfer from account detail and selects a origin "main account"
        And the user selects a destinatary from "reuse operations"
        And the user select an "own" operation from transactions list
        When the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |

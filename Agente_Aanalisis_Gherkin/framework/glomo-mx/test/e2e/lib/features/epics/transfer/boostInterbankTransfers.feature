@transfers @boostInterbankTransfer
Feature: Boost Interbank Transfers

    @BIT001
    @MX @web @android @ios
    @backend(test) @vbank @web-done @smokeTest
    Scenario: Validation of new contact on message boost interbank transfers
        Given a user with the following criteria
            | criteria                  |
            |interbank transfer landing |
        And the user accesses the Login Screen
        And the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "save new contact boost interbank transfers" account by entering the destination number
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | message boost interbank transfers |

    @BIT002
    @smokeTest
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: Link redirect of message boost interbank transfers
        Given a user with the following criteria
            | criteria                  |
            |interbank transfer landing |
        And the user accesses the Login Screen
        And the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "save new contact boost interbank transfers" account by entering the destination number
        When the user accesses on link boost message interbank transfers
        Then the user sees the following items in the screen
            | item                                  |
            | header page                           |
            | movements sent button                 |
            | movements received button             |
            | make an international transfer button |

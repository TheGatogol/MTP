@suspecedTransactionsDirectDebit
Feature: Suspected Transactions Direct Debit

    @STD001
    @MX @web @android @ios
    @backend(test) @vbank
    @tmpExclude @JIRA.GLOMOMX-254311 @smokeTest
    Scenario: Confirm notification detail screen
        Given a user with the following criteria
            | criteria                   |
            | user suspected transaction |
        And the user accesses attempted "confirm" notification
        When the user "confirms" subscription the movement
        Then the user sees the following items in the screen
            | item           |
            | confirm header |
            | confirm close  |
            | confirm share  |

    @STD002
    @MX @web @android @ios
    @backend(test) @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Reject close notification detail screen
        Given a user with the following criteria
            | criteria                   |
            | user suspected transaction |
        And the user accesses attempted "confirm" notification
        When the user "cancel" subscription the movement
        Then the user sees the following items in the screen
            | item                |
            | reject header       |
            | reject close button |

    @STD003
    @MX @web @android @ios
    @backend(test) @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Validate Domiciliation button close no reply
        Given a user with the following criteria
            | criteria                   |
            | user suspected transaction |
        And the user accesses attempted "confirm" notification
        When the user confirm "exit" half modal page
        Then the user accesses the "dashboard" screen

    @STD004
    @MX @web @android @ios
    @backend(test) @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario: Validate Domiciliation button close / continue exit the transaction
        Given a user with the following criteria
            | criteria                   |
            | user suspected transaction |
        And the user accesses attempted "confirm" notification
        When the user confirm "continue" half modal page
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | exit close     |
            | confirm button |
            | reject button  |

    @STD005
    @MX @web @android @ios
    @backend(test) @vbank
    @tmpExclude @JIRA.GLOMOMX-254311
    Scenario Outline: Validate "<button>" in the detail screen
        Given a user with the following criteria
            | criteria                   |
            | user suspected transaction |
        And the user accesses attempted "confirm" notification
        When the user "<button>" debit the movement
        Then the user accesses the "dashboard" screen

        Examples:
            | button   |
            | confirms |
            | rejects  |

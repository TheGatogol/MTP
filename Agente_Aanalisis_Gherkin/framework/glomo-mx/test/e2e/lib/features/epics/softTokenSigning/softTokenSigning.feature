@softToken
Feature: Soft Token Signing

    @STOKEN001
    @web @android @ios
    @web-done @smokeTest
    @MX @backend(qa) @vbank
    Scenario: Access to Soft Token screen
        Given a user with the following criteria
            | criteria   |
            | soft token |
        And the user accesses to additional card detail
        When the user activate digital purchase
        Then the user sees the following items in the screen
            | item                     |
            | digital purchase title   |
            | digital purchase info    |
            | cancel modal             |
            | exit modal               |

    @STOKEN002
    @web @android @ios
    @web-done
    @MX @backend(qa) @vbank @alternate-scenarios-smoke
    Scenario Outline: Exit Soft Token screen by <action>
        Given a user with the following criteria
            | criteria   |
            | soft token |
        And the user accesses to additional card detail
        When the user cancel digital purchase activation by "<action>"
        Then the user sees the following items in the screen
            | item                                |
            | inactive additional security module |
            | digital purchase                    |
            | card image                          |

        Examples:
            | action        |
            | cancel button |
            | x icon        |

    @STOKEN003
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(qa) @vbank @alternate-scenarios-smoke
    Scenario: Token Blocked Screen
        Given a user with the following criteria
            | criteria            |
            | soft token blocked  |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        When the user will transfer to an "internal identified" account by entering the destination number
        And the user introduces amount and concept in transfer process
        Then the user sees a modal with the following elements:
            | item          |
            | accept button |
            | description   |
            | close button  |

    @STOKEN004
    @web @android @ios
    @web-done
    @MX @backend(qa) @vbank @alternate-scenarios-smoke
    Scenario: Exit Token Blocked Screen by close icon
        Given a user with the following criteria
            | criteria            |
            | soft token blocked  |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "internal identified" account by entering the destination number
        And the user introduces amount and concept in transfer process
        When the user closes the modal
        Then the user accesses the "product detail account" screen

    @STOKEN005
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(qa) @vbank @alternate-scenarios-smoke
    Scenario: Exit Token Blocked Screen by close button
        Given a user with the following criteria
            | criteria            |
            | soft token blocked  |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "internal identified" account by entering the destination number
        And the user introduces amount and concept in transfer process
        When the user exit from the error screen
        Then the user accesses the "product detail account" screen

    @STOKEN006
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311
    @MX @backend(qa) @vbank @alternate-scenarios-smoke
    Scenario: Branches from Token Blocked screen
        Given a user with the following criteria
            | criteria            |
            | soft token blocked  |
        And the user accesses to transfer from "account detail"
        And the user selects a destinatary from "new recipient"
        And the user will transfer to an "internal identified" account by entering the destination number
        And the user introduces amount and concept in transfer process
        When the user access to atm locator from modal
        Then the user accesses the "atm locator" screen

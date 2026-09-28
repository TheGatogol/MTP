@operationJustification
Feature: Operation Justification

    @JOP001
    @backend(test) @vbank @MX
    @ios @android @native
    @android-done @ios-done
    @manual @JIRA.GLOMOMX-180582
    Scenario Outline: Login <intervals> of receiving the notification
        Given a user with the following criteria
            | criteria                |
            | operation justification |
        When the user accesses to In App operations information
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | message            |
            | description info   |
            | accept button      |
        Examples:
            | intervals                |
            | after 37 days            |
            | between 43 and 47 days   |
            | between 51 and 54 days   |
            | between 55 and 60 days   |

    @JOP003
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done @smokeTest
    @backend-smoke
    Scenario: Modal means of invitation to branch
        Given a user with the following criteria
            | criteria                |
            | operation justification |
        And the user accesses center notification
        And the user open a operations information notification
        When the user access a operations information notification
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | exit button         |
            | title modal         |
            | description modal   |
            | footer button       |

@applicationFeedback @feedback
Feature: Application Feedback

    @FA001
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    @smokeTest
    @backend-smoke
    @manual @JIRA.GLOMOMX-251386
    Scenario: Access to feedback
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        When the user accesses to the Application Feedback screen
        Then the user sees the following items in the screen
            | item                   |
            | header                 |
            | Feedback Exit Button   |
            | Feedback External Page |

    @FA002
    @MX
    @vbank @backend(test)
    @ios @android @web
    @manual @JIRA.GLOMOGL-26754
    @JIRA.GLOMOMX-251386
    Scenario: Access to feedback and leave the feedback process
        Given a user with the following criteria
            | criteria        |
            | active feedback |
        And the user accesses to dashboard
        And the user accesses to the Application Feedback screen
        When the user leaves the feedback process
        Then the user accesses the "About" screen

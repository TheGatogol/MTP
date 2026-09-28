@Single-APP
Feature: Single APP

    @SIA001
    @ios @android @native
    @MX @vbank @backend(test) @smokeTest
    @manual @JIRA.GLOMOGL-30634
    Scenario: The user sees the profile selector on the sidebar
        Given a user with the following criteria
            | criteria                              |
            | natural person with business activity |
        And the user accesses to dashboard
        And the user accesses to the sidebar
        And the user goes to changes profile
        When the user exits profile selector
        Then the user does not see the following items in the screen
            | item           |
            | profiles title |

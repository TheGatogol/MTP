@logoutSessionExpiration
Feature: Logout Session Expiration

    @LSE001
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @manual @JIRA.GLOMOGL-26754
    @smokeTest
    Scenario: User's session expires after five minutes of inactivity
        Given a user with the following criteria
            | criteria       |
            |active user     |
        And the user accesses to dashboard
        When there is an inactivity of five minutes
        Then the user accesses the "login" screen

    @LSE002
    @web @ios @android
    @MX
    @backend(test)
    @web-done
    @vbank
    @manual @JIRA.GLOMOGL-26754
    Scenario Outline: User's session expires after five minutes of inactivity in any page <page>
        Given a user with the following criteria
            | criteria       |
            | active user    |
        And the user accesses to dashboard
        And the user accesses to "<page>" item located in the sidebar
        When there is an inactivity of five minutes
        Then the user accesses the "login" screen

        Examples:
            | page                |
            | Security Menu       |
            | Profile             |

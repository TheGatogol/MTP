@codiOperations @codiSettings
Feature: CoDi operative - codiSettings

    @CODISETT002
    @MX @web @ios @android @web-done
    @backend(test) @vbank @smokeTest
    Scenario: CoDi Settings main menu - enrolled with another bank
        Given a user with the following criteria
            | criteria          |
            | another bank codi |
        When the user accesses to "CoDi" settings
        Then the user sees the following items in the screen
            | item                 | value   |
            | title                |         |
            | back button          |         |
            | app info             |         |
            | bank info            |         |
            | notification message |         |
            | info icon            |         |
            | notification text    |         |
            | set app button       | enabled |

    @CODISETT003
    @MX @web @ios @android
    @backend(test) @vbank @manual @JIRA.GLOMOMX-180972
    Scenario: CoDi Settings main menu - change default app
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to "CoDi" settings
        When the user accesses to "change default app" settings
        Then the user sees a modal with the following elements:
            | item          |
            | hero image    |
            | title         |
            | description   |
            | accept button |
            | cancel button |

    @CODISETT004
    @MX @web @ios @android
    @backend(test) @vbank @manual @JIRA.GLOMOMX-180972
    Scenario: CoDi Settings main menu - exit change default app
        Given a user with the following criteria
            | criteria    |
            | enroll codi |
        And the user accesses to "CoDi" settings
        And the user accesses to "change default app" settings
        When the user closes the modal
        Then the user sees the following items in the screen
            | item                 | value   |
            | title                |         |
            | back button          |         |
            | app info             |         |
            | bank info            |         |
            | notification message |         |
            | info icon            |         |
            | notification text    |         |
            | set app button       | enabled |

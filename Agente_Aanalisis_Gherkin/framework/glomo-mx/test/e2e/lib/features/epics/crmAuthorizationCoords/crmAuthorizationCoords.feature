@inAppCrmGeo
Feature: In App Crm Geolocation

    @AGC002
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario: User accepts geolocation permissions.
        Given a user with the following criteria
            | criteria                |
            | in app crm campaign geo |
        And the user accesses the geolocation permission screen for collection purposes
        When the user accepts geolocation permission
        Then the user sees the following items in the screen
            | item                 |
            | header success       |
            | close button success |
            | check                |
            | success text         |
            | date                 |

    @AGC003
    @backend(test) @vbank @MX
    @ios @android @native
    @smokeTest
    @manual @JIRA.GLOMOMX-180582
    Scenario Outline: User closes the success screen with the <button> option
        Given a user with the following criteria
            | criteria                |
            | in app crm campaign geo |
        And the user accesses the geolocation permission screen for collection purposes
        And the user accepts geolocation permission
        When the user exits the screen using the "<button>" option
        Then the user sees the following items in the screen
            | item                    |
            | Opportunities operative |
            | More operatives         |
            | help button             |
            | header                  |
        Examples:
            | button |
            | top    |
            | bottom |

    @AGC004
    @backend(test) @vbank @MX
    @ios @android @native
    @manual @JIRA.GLOMOMX-180582
    Scenario Outline: User closes In App screen with the <button> option
        Given a user with the following criteria
            | criteria                |
            | in app crm campaign geo |
        And the user accesses the geolocation permission screen for collection purposes
        When the user exits the screen using the "<button>" option
        Then the user sees the following items in the screen
            | item                    |
            | Opportunities operative |
            | More operatives         |
            | help button             |
            | header                  |
        Examples:
            | button |
            | top    |
            | bottom |

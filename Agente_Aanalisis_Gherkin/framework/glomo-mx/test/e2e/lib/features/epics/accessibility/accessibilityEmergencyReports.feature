@accessibility-suite @emergencyReports
Feature: Accessibility - Emergency Reports

    @ARIA_ER001
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Access to the emergency reports screen
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        When the user goes to "emergency reports" using deeplink navigation
        Then the screen's accessibility is analysed

    @ARIA_ER002
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @alternate-scenarios-smoke
    Scenario Outline: Access to the emergency reports menu screen - <emergency>
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "<emergency>" screen
        Then the screen's accessibility is analysed

        Examples:
            | emergency |
            | card      |
            | vehicle   |

    @ARIA_ER003
    @MX
    @web
    @vbank @android @ios
    @smokeTest
    @backend(test)
    Scenario Outline: Access to the emergency reports faqs screen - <emergency>
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "<emergency>" screen
        When the user access to "faqs" screen
        Then the screen's accessibility is analysed

        Examples:
            | emergency |
            | card      |
            | vehicle   |

    @ARIA_ER004
    @MX
    @web
    @vbank @android @ios
    @backend(test) @vbank-modified
    @alternate-scenarios-smoke
    Scenario: Visible modal services error
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        When the user goes to "emergency reports" using deeplink navigation
        Then the screen's accessibility is analysed

    @ARIA_ER005
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Visible modal change vehicle
        Given a user with the following criteria
            | criteria            |
            | emergency reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle" screen
        When the user access to report "change" screen
        Then the screen's accessibility is analysed

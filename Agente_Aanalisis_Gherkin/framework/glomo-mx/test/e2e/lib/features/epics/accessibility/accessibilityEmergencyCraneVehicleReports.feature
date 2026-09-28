@accessibility-suite @emergencyCraneVehicleReports
Feature: Accessibility - Emergency Crane Vehicle Reports

    @ARIA_ECR001
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Access to the emergency crane vehicle reports screen
        Given a user with the following criteria
            | criteria                          |
            | emergency crane vehicle reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle crane" menu from "vehicle" screen
        Then the screen's accessibility is analysed

    @ARIA_ECR002
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @smokeTest
    Scenario: Access to the emergency crane vehicle reports successs screen
        Given a user with the following criteria
            | criteria                          |
            | emergency crane vehicle reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "create report"
        Then the screen's accessibility is analysed

    @ARIA_ECR003
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Access to the emergency crane vehicle reports in progress error screen
        Given a user with the following criteria
            | criteria                          |
            | emergency crane vehicle reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle crane" for select "create report"
        Then the screen's accessibility is analysed

@accessibility-suite @emergencyCarEmergencyVehicleGlassReports @emergencyCarEmergencyVehicleGlassReportsAccessibility
Feature: Accessibility - Emergency Car Emergency Vehicle Glass Reports

    @ARIA_CRI001
    @MX @vbank
    @backend(test)
    @web
    Scenario: Successful Vehicle Glass Report - Screen Validation
        Given a user with the following criteria
            | criteria                  |
            | emergency glass reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "create report"
        Then the screen's accessibility is analysed

    @ARIA_CRI002
    @MX @vbank
    @backend(test)
    @web
    Scenario: Resume Vehicle Glass Report - Screen Validation
        Given a user with the following criteria
            | criteria                  |
            | emergency glass reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "resume"
        Then the screen's accessibility is analysed

    @ARIA_CRI003
    @MX @vbank
    @backend(test)
    @web
    Scenario: See Privacy Notice Vehicle Glass Report - Screen Validation
        Given a user with the following criteria
            | criteria                  |
            | emergency glass reports   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle glass" for select "privacy notice"
        Then the screen's accessibility is analysed

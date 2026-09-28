@accessibility-suite @emergencyVehicleCrashReports @emergencyVehicleCrashReportsAccessibility
Feature: Accessibility - Emergency Vehicle Crash Reports

    @ARIA_VC001
    @MX @vbank
    @backend(test)
    @web
    Scenario: Vehicle Crash - Screen Validation
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle crash" menu from "vehicle" screen
        Then the screen's accessibility is analysed

    @ARIA_VC002
    @MX @vbank
    @backend(test)
    @web
    Scenario: Emergency Services Vehicle Crash - Screen Validation
        Given a user with the following criteria
           | criteria                  |
           | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle crash" menu from "vehicle" screen
        When the user accepts "accept location" action
        Then the screen's accessibility is analysed

    @ARIA_VC003
    @MX @vbank
    @backend(test)
    @web
    Scenario: Successful Vehicle Crash Report - Screen Validation
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        And the user access to "vehicle crash" menu from "vehicle" screen
        And the user accepts "accept location" action
        And the user accepts "accept services" action
        When the user accepts "report crash" action
        Then the screen's accessibility is analysed

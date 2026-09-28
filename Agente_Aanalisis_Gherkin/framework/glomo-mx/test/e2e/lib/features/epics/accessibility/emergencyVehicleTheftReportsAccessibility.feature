@accessibility-suite @emergencyVehicleTheftReportsAccessibility
Feature: Accessibility - Emergency Vehicle Theft Reports

    @ARIA_VT001
    @MX @vbank
    @backend(test)
    @web
    Scenario: Vehicle Theft - Screen Validation
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle theft" menu from "vehicle" screen
        Then the screen's accessibility is analysed

    @ARIA_VT002
    @MX @vbank
    @backend(test)
    @web
    Scenario: Successful Vehicle Theft Report - Screen Validation
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "create report"
        Then the screen's accessibility is analysed

    @ARIA_VT003
    @MX @vbank
    @backend(test)
    @web
    Scenario: Vehicle Theft Report In Progress - Screen Validation
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "create report"
        Then the screen's accessibility is analysed

    @ARIA_VT004
    @MX @vbank
    @backend(test)
    @web
    Scenario: Vehicle Theft Report Change Location - Screen Validation
        Given a user with the following criteria
            | criteria                  |
            | emergency vehicle reports |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle theft" for select "change geolocation"
        Then the screen's accessibility is analysed

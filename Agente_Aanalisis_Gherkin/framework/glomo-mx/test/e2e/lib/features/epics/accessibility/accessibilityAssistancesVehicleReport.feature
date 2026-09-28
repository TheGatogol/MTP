@accessibility-suite @emergencyAssistancesVehicleReport
Feature: Accessibility - Emergency Assistances Vehicle Report

    @ARIA_EAR001
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Access to the emergency assistances vehicle report screen
        Given a user with the following criteria
            |        criteria                 |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to "vehicle assistances" menu from "vehicle" screen
        Then the screen's accessibility is analysed

    @ARIA_EAR002
    @MX
    @web
    @vbank @android @ios
    @backend(test)
    @alternate-scenarios-smoke
    Scenario: Access to the modal success emergency assistances vehicle report screen
        Given a user with the following criteria
            |        criteria                 |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "all assists"
        Then the screen's accessibility is analysed

    @ARIA_EAR003
    @MX
    @web
    @vbank @android @ios
    @smokeTest
    @backend(test)
    Scenario: Access to the modal in progress emergency assistances vehicle report screen
        Given a user with the following criteria
            |        criteria                 |
            | emergency assistances vehicle   |
        And the user accesses to dashboard
        And the user goes to "emergency reports" using deeplink navigation
        When the user access to report "vehicle assistances" for select "all assists"
        Then the screen's accessibility is analysed

@homeMainCardInvestment
Feature: Home Main Card Investment

    @MCIN001
    @vbank
    @smokeTest
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Tap on the investment fund card
        Given a user with the following criteria
            | criteria                |
            | futura user |
        And the user accesses to dashboard
        And the user goes to next the "1" position in main card
        When the user accesses to fund product detail
        Then the user sees the following items in the screen
            | item                      |
            | fund contract             |
            | fund list                 |
            | fund operations buttons   |

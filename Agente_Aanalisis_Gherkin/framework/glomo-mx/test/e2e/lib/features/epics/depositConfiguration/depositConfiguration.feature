@depositConfiguration
Feature: Deposit Configuration

    @DDC001
    @web
    @vbank
    @MX @backend(test)
    @android
    @web-done
    @smokeTest
    Scenario: Deposit Configuration happy path
        Given a user with the following criteria
            | criteria          |
            | deposits purchase |
        And the user accesses to dashboard
        And the user select deposit "0089in0326"
        And the user select deposit detail
        And the user selects deposit configuration
        And the user selects renovation configuration
        When the user accesses deposit configuration review
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | amount      |
            | button exit |

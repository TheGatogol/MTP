@offerTdcModal
Feature: Journey Tdd + Tdc

    @OTMP002
    @MX
    @vbank
    @backend(test)
    @web @smokeTest
    @web-done
    Scenario: The user close to offer TDC modal page
        Given a user with the following criteria
            | criteria                 |
            | offer preapproved tdc    |
        When the user accesses to dashboard
        And the user goes to "screen offer tdc modal" using deeplink navigation
        And the user closes the offerTdcmodal
        Then the user accesses the "Dashboard" screen

    @OTMP003
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    Scenario: The user accesses the contract
        Given a user with the following criteria
            | criteria                 |
            | offer preapproved tdc    |
        When the user accesses to dashboard
        And the user goes to "screen offer tdc modal" using deeplink navigation
        And the user accesses the contract
        Then the user accesses the "coming soon" screen

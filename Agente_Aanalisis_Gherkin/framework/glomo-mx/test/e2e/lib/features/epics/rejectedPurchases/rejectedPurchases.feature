@rejectedPurchases
Feature: Rejected Purchases

    @PCR002
    @ios @android @web
    @MX @vbank
    @backend(test)
    @smokeTest @web-done @backend-smoke
    Scenario: Payment details rejected - temporary block
        Given a user with the following criteria
            | criteria                         |
            | push notifications rejection tdc |
        And the user accesses center notification
        When the user accesses "rejected due to temporary block" detail notification
        Then the user sees the following items in the screen
            | item                           |
            | notification title             |
            | notification header            |
            | notification description       |
            | notification actions           |
            | notification date              |

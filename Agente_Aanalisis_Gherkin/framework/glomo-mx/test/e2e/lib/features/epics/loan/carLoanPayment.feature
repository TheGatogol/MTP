@carLoanPayment
Feature: Car Loan Payment

    @CLP001
    @smokeTest
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: The user tap a reactive push notification and is redirected to car loan payment page
        Given a user with the following criteria
            | criteria              |
            | car loan payment push |
        And the user accesses to dashboard
        And the user goes to "screen car loan payment" using deeplink navigation
        And the user selects "other amount" on car loan payment
        And the user enters amount of "1"
        When the user completes the car loan payment process
        Then the user sees the following items in the screen
            | item            |
            | import loan     |
            | info success    |
            | date success    |
            | button clouse   |

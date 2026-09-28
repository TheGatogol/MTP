@requestMoney
Feature: Request Money

    @REM001
    @MX @backend(test)
    @web @ios @android @vbank @web-done
    @backend-smoke
    Scenario: Operation "Request my money"
        Given a user with the following criteria
            | criteria      |
            | request money |
        When the user accesses to dashboard
        And the user accesses the money request operation
        And the user accesses to all the slides and sends message
        Then the user sees the "product detail account" screen

    @REM002
    @MX @backend(test) @smokeTest
    @web @ios @android @vbank @web-done
    @backend-smoke
    Scenario: Operation of the "Close" button (Screen with textbox)
        Given a user with the following criteria
            | criteria      |
            | request money |
        And the user accesses to dashboard
        And the user accesses the money request operation
        And the user accesses to all the slides and goes to the request money page
        When the user close operative
        Then the user sees the "product detail account" screen

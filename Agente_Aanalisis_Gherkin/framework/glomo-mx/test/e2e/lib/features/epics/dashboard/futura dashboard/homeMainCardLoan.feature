@homeMainCardLoan
Feature: Home Main Card Loan

    @MCL001
    @ios @android
    @MX
    @vbank
    @backend(test)
    @smokeTest
    @web @web-done
    @backend-smoke
    Scenario Outline: Validate the Main Card Loan section when you have <loan_type>
        Given a user with the following criteria
            | criteria    |
            | futura user |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                   |
            | main card loan title   |
            | main card loan product |
            | main card loan amount  |
            | main card loan pending |
            | main card loan buttons |
        Examples:
            | loan_type               |
            | Immediate Personal Loan |
            | Car Loan                |
            | Housing Loan            |

    @MCL002
    @ios @android
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate the Main Card Loan section when you have two loans
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user goes to next the "1" position in main card
        Then the user sees the following items in the screen
            | item                   |
            | main card loan title   |
            | main card loan product |
            | main card loan amount  |
            | main card loan pending |
            | main card loan buttons |

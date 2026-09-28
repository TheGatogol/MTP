@minimumPaymentClarifications
Feature: Minimum Payment Clarifications

    @MPC001
    @web @android @ios
    @MX
    @vbank
    @web-done
    @backend(test)
    @smokeTest
    @backend-smoke
    Scenario: Details of this payment at the cut off
        Given a user with the following criteria
            | criteria                   |
            | credit card                |
            | credit card with interests |
        And the user accesses to the "operative" "credit" card product detail
        When the user accesses the minimum payment clarifications
        Then the user sees the following items in the screen
            | item              |
            | panel             |
            | capital button    |
            | commission button |
            | interest button   |
            | iva button        |
            | icon help         |
            | amount text       |

    @MPC002
    @web @android @ios
    @MX
    @vbank
    @web-done
    @backend(test)
    @backend-smoke
    Scenario: Payment tooltip to avoid generating interest
        Given a user with the following criteria
            | criteria                   |
            | credit card                |
            | credit card with interests |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses the minimum payment clarifications
        When the user accesses to payment to avoid accruing interest help screen
        Then the user sees the following items in the screen
            | item          |
            | modal header  |
            | modal title   |
            | modal exit    |
            | modal content |

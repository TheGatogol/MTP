@dashboardDeposits
Feature: Dashboard Deposits

    @DD001 @vbank
    @MX @web @android @ios
    @smokeTest
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Only one product with <currency> currency in deposits module
        Given a user with the following criteria
            | criteria           |
            | dashboard deposits |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item         | currency   |
            | header       |            |
            | greeting     |            |
            | help button  |            |
            | sidebar      |            |
            | title        |            |
            | alias        | <currency> |
            | amount       | <currency> |
            | number       | <currency> |
            | label amount | <currency> |
        Examples:
            | currency |
            | MXN      |

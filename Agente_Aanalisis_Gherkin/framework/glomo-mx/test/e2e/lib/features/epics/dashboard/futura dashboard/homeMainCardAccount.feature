@homeMainCardAccount
Feature: Home Main Card Account

    @MCA003
    @ios @android @smokeTest
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Display the Transaction List screen
        Given a user with the following criteria
            | criteria    |
            | futura user |
        When the user accesses all "account" movements from main card
        Then the user sees the following items in the screen
            | item               |
            | date movements     |
            | amount movements   |
            | category movements |

    @MCA004
    @ios @android
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Functionality of the View income and expenses link in the "Recent transactions" section
        Given a user with the following criteria
            | criteria                  |
            | futura user               |
        When the user accesses dashboard detail PFM "mainCard"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | income tab title    |
            | expenses tab title  |
            | movements tab title |

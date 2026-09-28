@genericOffers
Feature: Generic Offers

    @OGE002
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done
    Scenario: The user accesses the promissory note offer
        Given a user with the following criteria
            | criteria       |
            | dynamic offers |
        When the user goes to the offers section
        And the user enters the opportunity "investing in promissory"
        Then the user sees the following items in the screen
            | item           |
            | telephone icon |
            | sticky summary |
            | help message   |
            | icon safe      |
            | money label    |

    @OGE003
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @smokeTest
    Scenario: The user accesses the investment fund offer
        Given a user with the following criteria
            | criteria       |
            | dynamic offers |
        When the user goes to the offers section
        And the user enters the opportunity "investment funds"
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | start process button      |
            | offer description         |
            | minimum investment amount |

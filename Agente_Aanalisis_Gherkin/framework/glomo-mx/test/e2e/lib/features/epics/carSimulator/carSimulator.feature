@carSimulator
Feature: Sustainable Car Simulator

    @SCS001
    @MX
    @vbank
    @backend(test)
    @web @backend-smoke
    @web-done
    @android
    @ios
    Scenario: The user accesses non pre approved car loan offer from the product section
        Given a user with the following criteria
            | criteria                                       |
            | sustainability non preapproved car loan offer  |
        And the user accesses to sustainability section
        And the user accesses to the car simulator section
        When the user accesses to non pre approved car certificate "main" screen
        Then the user accesses the "car non pre approved loan offer" screen

    @SCS002
    @MX
    @vbank
    @backend(test)
    @web @backend-smoke
    @web-done
    @android
    @ios
    Scenario: The user accesses pre approved car loan offer from the product section
        Given a user with the following criteria
            | criteria                       |
            | sustainability preapproved car |
        And the user accesses to sustainability section
        And the user accesses to the car simulator section
        When the user accesses to the car loan offer from "car simulator"
        Then the user accesses the "car pre approved loan offer" screen

    @SCS003
    @MX
    @vbank
    @backend(test)
    @web @backend-smoke
    @web-done
    @android
    @ios
    @smokeTest
    Scenario: The user sees right home simulator operatives availability
        Given a user with the following criteria
            | criteria                                  |
            | sustainability preapproved car loan offer |
        And the user accesses to sustainability section
        When the user accesses to the car simulator section
        Then the car simulator has the following operatives with their corresponding status
            | products       | available |

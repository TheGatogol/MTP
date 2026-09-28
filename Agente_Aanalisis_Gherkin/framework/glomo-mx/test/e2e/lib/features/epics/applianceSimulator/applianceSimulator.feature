@applianceSimulator
Feature: Sustainable Appliance Simulator

    @APS001
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    Scenario: The user access loan through products home simulator
        Given a user with the following criteria
            | criteria                    |
            | sustainability product loan |
        And the user accesses to Sustainability carbon footprint section
        And the user accesses to gas detail
        And the user accesses to the appliance simulator section
        When the user selects pre approved loan offer from products card
        Then the user sees the "pre-approved loan offer spherica" screen

    @APS002
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    Scenario: The user access credit card through products home simulator
        Given a user with the following criteria
            | criteria                              |
            | sustainability product credit card    |
        And the user accesses to Sustainability carbon footprint section
        And the user accesses to gas detail
        And the user accesses to the appliance simulator section
        When the user selects "credit card holder" card
        Then the user sees the "credit card holder" screen

    @APS003
    @MX
    @vbank
    @backend(test)
    @web
    @web-done
    @android
    @ios
    Scenario: The user access increment line of credit through products home simulator
        Given a user with the following criteria
            | criteria                             |
            | sustainability increment line credit |
        And the user accesses to Sustainability carbon footprint section
        And the user accesses to gas detail
        And the user accesses to the appliance simulator section
        When the user selects "increase your line of credit" card
        Then the user sees the "increase card limit" screen

    @APS004
    @MX
    @vbank
    @backend(test)
    @web
    @web-done @smokeTest
    @android
    @ios
    Scenario: The user access bill payment through products home simulator
        Given a user with the following criteria
            | criteria                              |
            | sustainability product bill payments  |
        And the user accesses to Sustainability carbon footprint section
        And the user accesses to gas detail
        And the user accesses to the appliance simulator section
        When the user accepts the onboarding bill payments dashboard
        Then the user sees the "bill payments dashboard" screen

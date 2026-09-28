@solarPanelsSimulator
Feature: Sustainable Panels Simulator

    @SPS001
    @MX
    @vbank
    @backend(test)
    @web-done @smokeTest
    @web @android @ios
    Scenario: The user accesses panels simulator and return to previous screen
        Given a user with the following criteria
            | criteria               |
            | sustainability panels  |
        And the user accesses to Sustainability carbon footprint section
        And the user accesses to light detail
        And the user accesses to the panels simulator section
        When the user goes back to previous page
        Then the user sees the "carbon footprint section" screen

    @SPS002
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: The user accesses pre approved panels loan offer from the product section
        Given a user with the following criteria
            | criteria                                            |
            | sustainability preapproved panels loan offer update |
        And the user accesses to Sustainability carbon footprint section
        And the user accesses to light detail
        And the user accesses to the panels simulator section
        When the user accesses the pre approved panels loan offer from panels simulator
        Then the user sees the following items in the screen
            | item               |
            | header offer page  |

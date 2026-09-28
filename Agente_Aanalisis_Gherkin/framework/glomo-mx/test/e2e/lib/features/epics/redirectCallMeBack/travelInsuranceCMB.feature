@redirectCallMeBack
Feature: Redirect Call Me Back Travel Insurance

    @CMBTI001
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done
    @smokeTest
    Scenario: The user with assistance manager accesses to account travel insurance operation screen
        Given a user with the following criteria
            | criteria        |
            | travel insurance|
        When the user goes to the travel insurance operation
        Then the user sees the following items in the screen
            | item             | value   |
            | telephone icon   |         |
            | sticky button    | call me |

@redirectCallMeBack
Feature: Redirect Call Me Back  Oc Meta Segura

    @CMBOM001
    @web @ios @android
    @backend(test) @vbank
    @MX @smokeTest
    @web-done
    Scenario: The user with assistance manager accesses to account oc meta segura offer screen
        Given a user with the following criteria
            | criteria                       |
            | remote banking metasegura user |
        When the user accesses to the metasegura offer detail
        Then the user sees the following items in the screen
            | item             | value   |
            | telephone icon   |         |
            | sticky button    | call me |

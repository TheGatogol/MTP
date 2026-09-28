@redirectCallMeBack
Feature: Redirect Call Me Back Dynamic Life Insurance

    @CMBDL001
    @web @ios @android
    @backend(test) @vbank
    @MX
    @web-done @smokeTest
    Scenario: When a user with assistance manager accesses to Dynamic Life Insurance screen
        Given a user with the following criteria
            | criteria               |
            | remote cmb user        |
        When the user accesses to dynamic life insurance offer
        Then the user sees the following items in the screen
            | item             | value   |
            | telephone icon   |         |
            | sticky button    | call me |

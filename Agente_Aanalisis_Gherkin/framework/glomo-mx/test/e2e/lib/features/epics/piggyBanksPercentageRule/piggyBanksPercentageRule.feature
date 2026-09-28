@piggyBanksPercentageRule
Feature: Piggy Banks Percentage Rule

    @PGP001
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @smokeTest
    @backend-smoke
    Scenario Outline: Create piggy bank percentage rule with <cards> TDC - Happy Path
        Given a user with the following criteria
            | criteria                                        |
            | piggy banks percentage rule <cards> credit card |
        And the user accesses to dashboard
        And the user goes to "piggy bank percentage rule" using deeplink navigation
        When the user creates piggy bank percentage rule
        Then the user sees the following items in the screen
            | item                  |
            | success header        |
            | success exit button   |
            | success checkmark     |
            | success title         |
            | success amount        |
            | success container     |
            | success notification  |
        Examples:
            | cards     |
            | one       |
            | multiple  |

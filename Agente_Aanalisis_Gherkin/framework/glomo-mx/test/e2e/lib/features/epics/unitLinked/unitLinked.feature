@unitLinked
Feature: Unit Linked

    @UL001
    @MX @smokeTest
    @backend(test)
    @backend-smoke
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @web @android @ios
    Scenario: Happy Path Edit Alias - Unit Linked
        Given a user with the following criteria
            | criteria    |
            | unit linked |
        And the user accesses to unit linked
        And the user accesses the unit linked edit alias
        When the user clears and updates the alias with "Nuevo Alias"
        Then the user sees in "Unit Linked Detail" screen correctly updated "Nuevo Alias" alias

    @UL002
    @MX
    @backend-smoke
    @vbank @web-done
    @web @android @ios @backend(test)
    @alternate-scenarios-smoke
    Scenario: Abort edit alias - Unit Linked
        Given a user with the following criteria
            | criteria    |
            | unit linked |
        And the user accesses to unit linked
        And the user accesses the unit linked edit alias
        When the user goes back to previous page
        Then the user accesses the "unit linked" screen

    @UL003
    @MX
    @backend-smoke
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @web @android @ios @backend(test)
    @alternate-scenarios-smoke
    Scenario: Back edit alias - Unit Linked
        Given a user with the following criteria
            | criteria    |
            | unit linked |
        And the user accesses to unit linked
        And the user accesses the unit linked edit alias
        When The user modifies the alias to "unit linked" and cancels the alias editing
        Then the user sees the following items in the screen
            | item             |
            | accept btn modal |
            | cancel btn modal |

    @UL004
    @MX
    @backend-smoke
    @vbank @web-done
    @web @android @ios @backend(test)
    @alternate-scenarios-smoke
    Scenario: Invalid entry edit alias - Unit Linked
        Given a user with the following criteria
            | criteria    |
            | unit linked |
        And the user accesses to unit linked
        And the user accesses the unit linked edit alias
        When The user modifies the alias to "@#`.," and cancels the alias editing
        Then the user sees save button disabled on the screen

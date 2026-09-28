@orangeEditAlias @editAlias
Feature: Orange Edit Alias

    @OEA001
    @web @android @ios
    @MX
    @vbank
    @web-done
    @backend(test)
    @smokeTest
    @backend-smoke
    @manual @JIRA.GLOMOMX-277630
    Scenario: Access edit alias operative
        Given a user with the following criteria
            | criteria        |
            | edit alias card |
        When the user accesses to the "operative" "credit" card product detail
        And the user accesses the edit alias
        And the user updates the alias with the new alias "Orange Card"
        And the user "saves" the new alias
        And the user accesses the "Orange Card Detail" screen
        Then the user sees in "Orange Card Detail" screen correctly updated "Orange Card" alias

    @OEA002
    @web @android @ios
    @MX
    @vbank
    @web-done
    @backend(test)
    @backend-smoke
    Scenario: Abort edit alias
        Given a user with the following criteria
            | criteria        |
            | edit alias card |
        When the user accesses to the "operative" "credit" card product detail
        And the user accesses the edit alias
        And the user goes back to previous page
        Then the user accesses the "Orange Card Detail" screen

@BalloonEditAlias @editAlias
Feature: Balloon Edit Alias TDD

    @EAD001
    @web @android @ios
    @MX
    @vbank
    @web-done
    @backend(test)
    @smokeTest
    @manual @JIRA.GLOMOMX-277630
    Scenario: Happy Path
        Given a user with the following criteria
            | criteria        |
            | edit alias card |
        When the user accesses to the "operative" "debit" card product detail
        And the user accesses the edit alias
        And the user updates the alias with the new alias "new alias tdd"
        And the user "saves" the new alias
        And the user accesses the "Balloon Card Detail" screen
        Then the user sees correctly updated "new alias tdd" alias

    @EAD002
    @web @android @ios
    @MX
    @vbank
    @web-done
    @backend(test)
    @backend-smoke
    Scenario: Cancel Edit Alias
        Given a user with the following criteria
            | criteria        |
            | edit alias card |
        When the user accesses to the "operative" "debit" card product detail
        And the user accesses the edit alias
        And the user goes back to previous page
        Then the user accesses the "Balloon card detail" screen

    @EAD003
    @web-done
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @backend-smoke
    Scenario: Back Edit Alias
        Given a user with the following criteria
            | criteria        |
            | edit alias card |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the edit alias
        When The user modifies the alias to "equity" and cancels the alias editing
        Then the user sees the following items in the screen
            | item             |
            | accept btn modal |
            | cancel btn modal |

    @EAD004
    @web-done
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    @backend-smoke
    Scenario: Invalid Edit Alias
        Given a user with the following criteria
            | criteria        |
            | edit alias card |
        When the user accesses to the "operative" "debit" card product detail
        And the user accesses the edit alias
        And the user updates the alias with the new alias "user test"
        And the user "cleans" the new alias
        Then the user sees the following items in the screen
            | item                 |
            | save button disabled |

    @EAD005
    @web-done
    @web @android @ios
    @MX
    @vbank
    @backend(test)
    Scenario: Error modifying alias
        Given a user with the following criteria
            | criteria        |
            | edit alias card |
        When the user accesses to the "operative" "debit" card product detail
        And the user accesses the edit alias
        And the user updates the alias with the new alias "pruebas test"
        And the user "saves" the new alias
        Then the user sees the following items in the screen
            | item                 |
            | error connection btn |

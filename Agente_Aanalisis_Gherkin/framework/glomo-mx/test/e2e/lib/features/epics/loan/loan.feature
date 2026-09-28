@loanDetail
Feature: Loan Detail

    @LD002
    @web @android @ios
    @vbank @backend(test)
    @MX
    @smokeTest
    @web-done
    @backend-smoke
    Scenario Outline: Loan detail edit alias - <loan>
        Given a user with the following criteria
            | criteria        |
            | loan edit alias |
        And the user accesses to loan
        And the user accesses to edit alias
        And the user updates the alias with the new alias "<loanAlias>"
        And the user "saves" the new alias
        When the user accesses the "Loan Detail" screen
        Then the user sees in "Loan Detail" screen correctly updated "<loanAlias>" alias

        Examples:
            | loan      | loanAlias         |
            | auto      | Example Auto      |
            | mortage   | Example Mortage   |
            | personal  | Example Personal  |

    @LD003
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    @backend-smoke
    Scenario Outline: Loan detail more info - <loan>
        Given a user with the following criteria
            | criteria      |
            | loan          |
        And the user accesses to loan
        When the user accesses to more infomation loan
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | credit type               |
            | alias                     |
            | contract number           |
            | contract number copy      |
            | account clabe             |
            | account clabe copy        |
            | account clabe tooltip     |
            | hiring date               |
            | expiration date           |
            | capital suscriber         |
            | currency                  |
            | conditions title          |
            | paid receipts             |
            | pending receipts          |
            | total receipts            |
            | pay frequency             |

        Examples:
            | loan      |
            | auto      |
            | mortage   |
            | personal  |

    @LD004
    @web @android @ios
    @vbank @backend(test)
    @MX
    @web-done
    Scenario: Loan detail backend error
        Given a user with the following criteria
            | criteria      |
            | loan          |
        When the user accesses to loan
        Then the user sees an error modal with the following elements:
            | item                  |
            | header                |
            | close button          |
            | hero image            |
            | description           |
            | accept button         |
            | cancel button         |

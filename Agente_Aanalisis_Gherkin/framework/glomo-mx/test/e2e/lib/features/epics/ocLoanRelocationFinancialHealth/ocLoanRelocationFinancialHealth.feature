@ocLoanRelocationFinancialHealth

Feature: Oc Loan Relocation Financial Health

    @RSF001
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done @smokeTest
    Scenario: Successful payroll loan origination - with insurance
        Given a user with the following criteria
            | criteria                               |
            | loan relocation financial health offer |
        And the user accesses to loan relocation financial health offer
        And the user performs the "continue offer" action for financial health repositioning
        And the user performs the "accept all" action for financial health repositioning
        When the user performs the "confirm offer" action for financial health repositioning
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | title text        |
            | description text  |
            | amount text       |
            | ticket detail     |
            | amount text       |
            | message email     |
            | iva notification  |

    @RSF002
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Successful payroll loan origination - without insurance
        Given a user with the following criteria
            | criteria                                        |
            | loan relocation financial health without insure |
        And the user accesses to loan relocation financial health offer
        And the user performs the "continue offer" action for financial health repositioning
        And the user performs the "whithout life insurance" action for financial health repositioning
        When the user performs the "confirm offer" action for financial health repositioning
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | title text        |
            | description text  |
            | amount text       |
            | ticket detail     |
            | amount text       |
            | message email     |
            | iva notification  |

    @RSF003
    @web @ios @android
    @backend(test) @vbank
    @MX @web-done
    Scenario: Review terms and complete the application
        Given a user with the following criteria
            | criteria                               |
            | loan relocation financial health offer |
        And the user accesses to loan relocation financial health offer
        And the user performs the "continue offer" action for financial health repositioning
        And the user performs the "accept all" action for financial health repositioning
        When the user performs the "conditions offer edit" action for financial health repositioning
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | title text        |
            | description text  |
            | amount text       |
            | ticket detail     |
            | amount text       |
            | message email     |
            | iva notification  |

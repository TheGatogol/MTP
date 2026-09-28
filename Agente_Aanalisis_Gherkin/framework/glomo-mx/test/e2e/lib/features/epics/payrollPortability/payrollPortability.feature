@payrollPortability
Feature: Payroll Portability

    @PPORTA002
    @smokeTest
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    Scenario: Payroll Portability - Happy path
        Given a user with the following criteria
            | criteria                      |
            | payroll portability operative |
        When the user accesses the "account payroll portability" screen
        And the user start payroll portability process
        And the user signs payroll operation on account operative
        Then the user sees the following items in the screen
            | item                   |
            | operation date         |
            | new payroll title      |
            | new payroll number     |
            | old payroll title      |
            | old payroll number     |
            | operation number title |
            | folio                  |
            | info icon message      |

    @PPORTA003
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    Scenario: Payroll Portability - Wrong birth date
        Given a user with the following criteria
            | criteria                      |
            | payroll portability operative |
        When the user accesses the "account payroll portability" screen
        And the user start account payroll portability process
        And the user "rejects" his birth date on account operative
        Then the user sees the following items in the screen
            | item                   |
            | wrong image            |
            | wrong birth date title |
            | wrong birth date text  |

    @PPORTA004
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    Scenario: Payroll Portability -  Payroll portability in progress
        Given a user with the following criteria
            | criteria                      |
            | payroll portability operative |
        When the user accesses the "account payroll portability" screen
        And the user start payroll portability process
        And the user signs payroll operation with payroll in progress on account operative
        Then the user sees the following items in the screen
            | item                                  |
            | payroll portability in progress alert |

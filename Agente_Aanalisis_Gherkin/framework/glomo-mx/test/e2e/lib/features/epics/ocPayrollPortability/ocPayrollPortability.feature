@ocPayrollPortability
Feature: OC Payroll Portability

    @OCPPO001
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    @backend-smoke
    Scenario: OC Payroll Portability -  The user accesses to payroll portability screen
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        When the user goes to the payroll portability operation
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | panel info image      |
            | considerations title  |
            | considerations list   |
            | benefits title        |
            | benefits list         |
            | start process button  |

    @OCPPO002
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    Scenario Outline: OC Payroll Portability - Happy path with <account_type> account
        Given a user with the following criteria
            | criteria    |
            | <criteria>  |
        And the user goes to the payroll portability operation
        And the user request the payroll portability offer with the "<account_type>" account
        When the user signs oc payroll portability operation
        Then the user sees the following items in the screen
            | item                   | value            |
            | operation date         |                  |
            | new payroll title      |                  |
            | new payroll number     | <new_payroll>    |
            | old payroll title      |                  |
            | old payroll number     | <old_payroll>    |
            | operation number title |                  |
            | folio                  |                  |
            | info icon message      |                  |
        Examples:
            | criteria                           | account_type | new_payroll | old_payroll |
            | payroll portability one account    | unique       | •1735       | •4323       |
            | payroll portability multi accounts | any          | •5367       | •4323       |

    @OCPPO003
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @smokeTest
    Scenario: OC Payroll Portability - Wrong birth date
        Given a user with the following criteria
            | criteria                           |
            | payroll portability multi accounts |
        And the user goes to the payroll portability operation
        And the user start oc payroll portability process
        When the user "rejects" his birth date
        Then the user sees the following items in the screen
            | item                   |
            | wrong image            |
            | wrong birth date title |
            | wrong birth date text  |

    @OCPPO004
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @manual @JIRA.GLOMOMX-222098
    Scenario: OC Payroll Portability -  Payroll portability in progress
        Given a user with the following criteria
            | criteria                        |
            | payroll portability one account |
        And the user goes to the payroll portability operation
        And the user request the payroll portability offer with the "unique" account
        When the user signs oc payroll portability operation with payroll in progress
        Then the user sees the following items in the screen
            | item                                  |
            | payroll portability in progress alert |

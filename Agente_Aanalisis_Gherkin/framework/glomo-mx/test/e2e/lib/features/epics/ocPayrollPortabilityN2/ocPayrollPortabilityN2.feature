@ocPayrollPortabilityN2
Feature: OC One Click N2

    @OCN001
    @web @ios @android
    @MX @backend(test) @vbank @web-done
    @alternate-scenarios-smoke
    Scenario Outline: The user access to proceedings from <case>
        Given a user with the following criteria
            | criteria                         |
            | payroll portability one click n2 |
        When the user accesses proceedings from "opportunities"
        Then the user sees the following items in the screen
            | item                |
            | title modal         |
            | identity validation |
            | kyc validation      |
            | confirm information |
        Examples:
            | case          |
            | normal card   |
            | priority card |

    @OCN002
    @web
    @web-done
    @backend(test)
    @MX @vbank
    @ios @android
    Scenario: The user sees oc payroll portability n2 offer on the dashboard
        Given a user with the following criteria
            | criteria                         |
            | payroll portability one click n2 |
        When the user accesses proceedings from "nbo"
        Then the user sees the following items in the screen
            | item                |
            | title modal         |
            | identity validation |
            | kyc validation      |
            | confirm information |

    @OCN003
    @smokeTest
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    Scenario: OC Payroll Portability - Happy path with any account
        Given a user with the following criteria
            | criteria                         |
            | payroll portability one click n2 |
        When the user accesses to the oc payroll portability n2
        And the user start payroll portability process
        And the user signs payroll operation on account operative
        And the user closes the success portability
        Then the user sees the "dashboard" screen

    @OCN004
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done
    Scenario: OC Payroll Portability - Verify offer removal from the Opportunities screen after a successful portability
        Given a user with the following criteria
            | criteria                         |
            | payroll portability one click n2 |
        When the user accesses to the oc payroll portability n2
        And the user start payroll portability process
        And the user signs payroll operation on account operative
        And the user closes the success portability
        And the user accesses contract product section
        Then the user sees the following items in the screen
            | item  | value                  | visibility  |
            | offer | payroll-portability-oc | not visible |

@payrollPortabilityN2
Feature: Payroll Portability N2

    @PPOR001
    @ios @android @web
    @backend(test) @MX @vbank
    @web-done @smokeTest
    Scenario Outline: Validate Payroll Portability N2 <type_status>
        Given a user with the following criteria
            | criteria               |
            | payroll portability n2 |
            | <type_status>          |
        When the user accesses the payroll portability n2
        Then the user sees the following items in the screen
            | item                    | value    |
            | header title            |          |
            | panel info              |          |
            | module button           |          |
            | continue button disable | <status> |

        Examples:
            | type_status          | status  |
            | enabled portability  | disable |
            | disabled portability | enable  |

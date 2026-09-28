@payrollaccountlink
Feature: Onboarding - Payroll Account

    @VCE001
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    @smokeTest @no-spherica
    Scenario: Link with company
        Given a user with the following criteria
            | criteria             |
            | payroll account link |
            | curp validated       |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "success" screen
        When the user closes the success screen with "page button"
        Then the user accesses the "product detail account" screen

    @VCE002
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    Scenario: Exit terms and conditions and privacy notice
        Given a user with the following criteria
            | criteria             |
            | payroll account link |
            | curp validated       |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user closes the page information
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | link terms and conditions      |
            | link advice of privacy         |
            | check box terms and conditions |
            | check box advice of privacy    |
            | continue button                |

    @VCE003
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    Scenario: Exit success screen
        Given a user with the following criteria
            | criteria             |
            | payroll account link |
            | curp validated       |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "success" screen
        When the user closes the success screen with "header button"
        Then the user accesses the "product detail account" screen

    @VCE004
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    @alternate-scenarios-smoke
    Scenario: Link Not my company
        Given a user with the following criteria
            | criteria             |
            | payroll account link |
            | curp validated       |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user indicates that company sent is incorrect
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | info message to change payroll |
            | request change link            |
            | send company code button       |

    @VCE005
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    @alternate-scenarios-smoke
    Scenario: Change data from the summary
        Given a user with the following criteria
            | criteria             |
            | payroll account link |
            | curp validated       |
        And the user accesses to payroll "account" screen
        And the user accesses to payroll "benefits" screen
        When the user decides to edit "terms and conditions" from summary section
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | link terms and conditions      |
            | link advice of privacy         |
            | check box terms and conditions |
            | check box advice of privacy    |
            | continue button                |

    @VCE006
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    @alternate-scenarios-smoke
    Scenario: Exit the process
        Given a user with the following criteria
            | criteria             |
            | payroll account link |
            | curp validated       |
        And the user accesses to payroll "account" screen
        When the user views the screen "payroll account link"
        Then the user accesses the "product detail account" screen

    @VCE007
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    @alternate-scenarios-smoke
    Scenario: Close button
        Given a user with the following criteria
            | criteria             |
            | payroll account link |
            | curp validated       |
        And the user accesses to payroll "account" screen
        When the user views the screen "payroll account"
        Then the user accesses the "product detail account" screen

    @VCE008
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    @vbank-modified
    Scenario: Continue the process
        Given a user with the following criteria
            | criteria             |
            | payroll account link |
            | curp validated       |
        And the user accesses to payroll "account" screen
        When the user accesses to payroll "benefits" screen
        Then the user sees the following items in the screen
            | item                           |
            | input company code             |
            | info message to change payroll |
            | request change link            |
            | send company code button       |

    @VCE009
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    Scenario: Curp unvalidated
        Given a user with the following criteria
            | criteria                    |
            | payroll account link active |
            | curp unvalidated            |
        When the user tries to access to payroll account link main screen
        Then the user closes the modal from "modal"

    @VCE010
    @MX @vbank @backend(test)
    @web @android @ios @web-done
    @alternate-scenarios-smoke @backend-smoke
    Scenario: Enter from the product detail
        Given a user with the following criteria
            | criteria             |
            | payroll account link |
            | curp validated       |
        When the user accesses to payroll "account" screen
        Then the user navigates to payroll "main" screen

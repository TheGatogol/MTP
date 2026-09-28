@ocPayrollAdvance
Feature: OC Payroll Advance

    @OPA002
    @web
    @web-done
    @MX @vbank @backend(test)
    @smokeTest
    Scenario: The user successfully completes a payroll advance process
        Given the user "5529391074" and "password00"
        When the user accesses to the payroll advance operation "without callme back"
        And the user accepts payroll terms
        And the user confirms the sms key to finalize the payroll advance
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | hiring date |
            | amount      |
            | image doc   |
            | list info   |
            | exit button |

    @OPA003
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: The user changes the suggested amount
        Given the user "5529391074" and "password00"
        When the user accesses to the payroll advance operation "without callme back"
        And the user modifies the suggested amount for an amount of "200"
        Then the user sees the following items in the screen
            | item              | value |
            | header            |       |
            | detail offer step |       |
            | sticky            | 100   |

    @OPA004
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: The user sees help information
        Given the user "5529391074" and "password00"
        When the user accesses to the payroll advance operation "without callme back"
        And the user open tooltip commission information
        Then the user sees a modal with the following elements:
            | item          |
            | cat header    |
            | icon help     |
            | information   |
            | accept button |

    @OPA005
    @web
    @web-done
    @MX @vbank @backend(test)
    Scenario: The user has comission promotion
        Given the user "5529391074" and "password00"
        When the user accesses to the payroll advance operation "without callme back"
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | detail offer step |
            | continue button   |
            | header image      |
            | amount input      |
            | benefits          |
            | comparative table |

    @OPA006
    @web @android @ios
    @web-done
    @MX @vbank @backend(test)
    Scenario: The user enters the authorization link to consult my credit history
        Given a user with the following criteria
            | criteria             |
            | user payroll monthly |
        And the user accesses to the payroll advance operation "without callme back"
        And the user accepts amount
        When the user enters the credit history link
        And the user enters the credit history link again and understood it
        Then the user sees the following items in the screen
            | item             |
            | tag terms        |
            | history credit   |
            | contract advance |
            | checkbox credit  |
            | checkbox terms   |
            | checkbox payment |

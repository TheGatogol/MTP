@pfm @pfmSavingTools
Feature: PFM Saving Tools

    @STO001
    @web
    @MX
    @backend(test) @vbank
    @web-done
    @smokeTest
    Scenario: PFM Dashboard - Complete
        Given a user with the following criteria
            | criteria               |
            | pfm futura             |
        When the user accesses dashboard detail PFM "footer"
        Then the user sees the following items in the screen
            | item                                 |
            | Header                               |
            | Header settings access               |
            | PFM period dates                     |
            | Income title                         |
            | Income aggregated amount             |
            | Incomes progress chart               |
            | Expenses title                       |
            | Expenses aggregated amount           |
            | Expenses progress chart              |
            | Expenses title                       |
            | Expenses view more access            |
            | Goals title                          |
            | Goals product summary cards          |
            | Investments title                    |
            | Investments product summary cards    |

    @STO002
    @web
    @web-done
    @backend(test) @vbank @spherica
    @MX
    Scenario: PFM Dashboard Validate when there is positive savings
        Given a user with the following criteria
            | criteria              |
            | pfm spherica user     |
        When the user accesses dashboard detail PFM "footer"
        And the user go to past period card
        Then the user sees the following items in the screen
            | item                  |
            | past period title     |
            | past period amount    |
            | past period text      |
            | tools container text  |
            | tools plan card       |
            | tools plan card text  |

    @STO003
    @ios @android @web
    @MX @smokeTest
    @backend(test) @vbank @spherica
    @web-done
    Scenario: PFM Dashboard Validate when there is no info in the selected period
        Given a user with the following criteria
            | criteria                  |
            | pfm spherica saving tools |
        When the user accesses dashboard detail PFM "footer"
        And the user go to saving tools options
        Then the user sees the following items in the screen
            | item                      |
            | tools container text      |
            | tools plan card           |
            | tools plan card text      |
            | tools invest card         |
            | tools invest card text    |

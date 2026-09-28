@mortgagePayment
Feature: Mortgage Payment

    @CRTH001
    @web @ios @android
    @MX @backend(test)
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario Outline: Mortgage Payment - The User Pays The Current Amount with an account in <currency>
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "<currency>" money
        When the user accesses to pay credit with the option "amount receipt" and continue
        Then the user pay the credit with "first account"
        Examples:
            | currency |
            | mxn      |
            | vsm      |

    @CRTH002
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment - the user changes the withdrawal account
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "amount receipt" and continue
        When the user selects an "first account" and then change "type of account" but selects "change"
        Then Then the user pay the credit with "last account"

    @CRTH003
    @web @ios @android
    @MX @backend(test)
    @web-done
    @vbank
    @smokeTest
    Scenario: Mortgage Payment- The User Changes Type Of Payment
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "amount receipt"
        And the user select payment type "amount receipt"
        When the user selects an "first account" and then change "type of payment" but selects "change"
        Then the user sees the following items in the screen
            | item                    |
            | icon message            |
            | text warning message    |
            | button continue message |

    @CRTH004
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment- The user changes the amount entered
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "other amount"
        And the user enters "less than the receipt" an amount and continue but decides choose other amount
        When the user enters "other amount" an amount and continue
        Then the user pay the credit with "first account"

    @CRTH005
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment-The user only has 1 account to pay
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "mxn" money
        When the user accesses to pay credit with the option "amount receipt" and continue
        Then the user pay the credit with "first account"

    @CRTH006
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment - The User Pays The Current Amount with an account in udi
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "udi" money
        When the user accesses to pay credit with the option "amount receipt" and continue
        Then the user pay the credit with "first account"

    @CRTH007
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment - The user pays in mxn with a smaller amount
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        When the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "other amount"
        And the user enters "less than the receipt" an amount and continue
        Then the user pay the credit with "first account"

    @CRTH008
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment- The user pays in UDI with another amount
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        When the user accesses to credit loan with "udi" money
        And the user accesses to pay credit with the option "other amount"
        And the user enters "other amount" an amount and continue
        Then the user pay the credit with "first account"

    @CRTH009
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment -The user makes a Payment of full installment amount
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        When the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "other amount"
        And the user enters "equal amount receipt" an amount and continue
        Then the user pay the credit with "first account"

    @CRTH010
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment - The user pays an amount greater than the receipt
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        When the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "other amount"
        And the user enters "greater than the receipt" an amount and continue
        Then the user pay the credit with "first account"

    @CRTH011
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario Outline: Mortgage Payment - The user pays off the mortgage with account in <currency>
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "<currency>" money
        When the user accesses to pay credit with the option "mortgage liquidation" and continue
        Then the user pay the credit with "first account"

        Examples:
            | currency |
            | mxn      |
            | udi      |

    @CRTH012
    @web @ios @android
    @MX @backend(test)
    @web-done
    @vbank
    @alternate-scenarios-smoke
    Scenario: Mortgage Payment- The user closes the screen
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "amount receipt" and continue
        When the user return to mortgage detail
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | pay credit button |
            | alias button      |
            | more info         |
            | payment detail    |
            | granted credit    |

    @CRTH013
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment - The user chooses Other amount when the payments are up to date
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        When the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "other amount"
        And the user enters "other amount" an amount and continue
        Then the user pay the credit with "first account"

    @CRTH014
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment - The user pays off the debt
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "mxn" money
        When the user accesses to pay credit with the option "amount receipt" and continue
        Then the user pay the credit with "first account"

    @CRTH015
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment -The user only pays off the overdue debt
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        When the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "other amount"
        And the user enters "amount equal to overdue bills" an amount and continue
        Then the user pay the credit with "first account"

    @CRTH016
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment - The user chooses another amount to pay off the debt with a larger amount
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        When the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "other amount"
        And the user enters "amount greater than overdue bills" an amount and continue
        Then the user pay the credit with "first account"

    @CRTH017
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment - The User without mail Pays The Current Amount
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "mxn" money
        When the user accesses to pay credit with the option "amount receipt" and continue
        Then the user pay the credit with "first account"

    @CRTH018
    @web @ios @android
    @MX @backend(test)
    @web-done
    @!vbank
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-167706
    Scenario: Mortgage Payment - The User without mail pays the current amount but changes accounts
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "amount receipt" and continue
        When the user selects an "first account" and then change "type of account" but selects "change"
        Then Then the user pay the credit with "last account"

    @CRTH019
    @MX @backend(test) @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario Outline: Mortgage Payment- the user enters a value <ammount> in the ammount
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "mxn" money
        And the user accesses to pay credit with the option "other amount"
        When the user inputs "<ammount>" an amount
        Then the user sees the following items in the screen
            | item                                     | value    |
            | exit other amount                        |          |
            | title other amount                       |          |
            | subtitle other amount                    |          |
            | subtitle detail payment other amount     |          |
            | input text amount                        |          |
            | text exceeds amount                      |          |
            | button choose other payment other amount |          |
            | input amount                             |          |
            | error message amount                     |          |
            | button x input amount                    |          |
            | button continue other amount             | disabled |
        Examples:
            | ammount                  |
            | less than 1              |
            | greater than the receipt |

    @CRTH020
    @web @ios @android
    @MX @backend(test)
    @web-done
    @vbank
    @alternate-scenarios-smoke
    Scenario: Mortgage Payment - The user enters a value less than 1 UDI
        Given a user with the following criteria
            | criteria                |
            | mortgage credit payment |
        And the user accesses to credit loan with "udi" money
        And the user accesses to pay credit with the option "other amount"
        When the user inputs "less than 1" an amount
        Then the user sees the following items in the screen
            | item                                     | value    |
            | exit other amount                        |          |
            | title other amount                       |          |
            | subtitle other amount                    |          |
            | subtitle detail payment other amount     |          |
            | input text amount                        |          |
            | text exceeds amount                      |          |
            | button choose other payment other amount |          |
            | input amount                             |          |
            | error message amount                     |          |
            | button x input amount                    |          |
            | button continue other amount             | disabled |

    @CRTH021
    @web @ios @android
    @MX @backend(test)
    @web-done
    @vbank
    @alternate-scenarios-smoke
    Scenario: Mortgage Payment - The user does not have a balance
        Given a user with the following criteria
            | criteria                         |
            | account without balance mortgage |
        And the user accesses to credit loan with "mxn" money
        When the user accesses to pay credit with the option "amount receipt" and continue
        Then the user sees the following items in the screen
            | item                  |
            | error icon message    |
            | error message         |
            | error message account |

@loanPayment
Feature: Loan Payment

    @LOP001
    @MX @backend(test)
    @!vbank
    @ios @android @web
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-167706
    Scenario: Make the loan payment from the receipt amount option
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | set loan         |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        And the user enter continue reciept button
        When the user select account and enter pay
        Then the user sees the following items in the screen
            | item             |
            | label loan       |
            | date loan        |
            | import loan      |
            | operation folio  |
            | button exit loan |

    @LOP002
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    @smokeTest
    Scenario: Validate the close button on the payment detail screen
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | only account     |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        And the user enter link detail
        When the user enter close detail button
        Then the user sees the following items in the screen
            | item                     |
            | exit import receipt      |
            | see detail               |
            | import receipt           |
            | continue button receipt  |
            | choose type payment link |

    @LOP003
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: Validate the close button on the payment concept screen
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | only account     |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        And the user enter link detail
        And the user enter help button
        When the user enter close concept button
        Then  the user sees the following items in the screen
            | item                  |
            | help button           |
            | payment to capital    |
            | interest payment      |
            | receipt amount detail |
            | close button detail   |

    @LOP004
    @MX @backend(test)
    @!vbank
    @ios @android @web
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-167706
    Scenario: Make payment by changing the type of payment
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | set loan         |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        And the user change type payment
        And the user accesses to "other amount" pay
        And the user ingrese amount of "1"
        And the user enter on the calculate payment and continue
        When the user select account and enter pay
        Then the user sees the following items in the screen
            | item             |
            | label loan       |
            | date loan        |
            | import loan      |
            | operation folio  |
            | button exit loan |

    @LOP005
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: Validate link see all from the modal change withdrawal account
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | set loan         |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        And the user enter continue reciept button
        When the user enter all accounts
        Then the user sees the following items in the screen
            | item                 |
            | header accounts      |
            | account exit button  |
            | account close button |

    @LOP006
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: View retirement account section with only one account
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | only account     |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        When the user enter continue reciept button
        Then the user sees the following items in the screen
            | item                        |
            | button exit pay loan        |
            | receipt                     |
            | retirement account          |
            | continue button one account |

    @LOP007
    @MX @backend(test)
    @!vbank
    @ios @android @web
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-167706
    Scenario: Make loan payment from option other amount
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | set payment      |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "1"
        And the user enter on the calculate payment and continue
        When the user select account and enter pay
        Then the user sees the following items in the screen
            | item             |
            | label loan       |
            | date loan        |
            | import loan      |
            | operation folio  |
            | button exit loan |

    @LOP008
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    @smokeTest
    Scenario: From another amount screen- calculate pay covering the current receipt
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | only account     |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "3,293.90"
        When the user enter on the calculate payment button
        Then the user sees the following items in the screen
            | item                    |
            | exit other detail       |
            | amount pay other        |
            | message covered receipt |
            | continue button other   |
            | change amount link      |

    @LOP009
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    @smokeTest
    Scenario: Validate loan detail when there are pending receipts
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | overdue payment  |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "10"
        And the user enter on the calculate payment and continue
        When the user select account loan
        Then the user sees the following items in the screen
            | item                 |
            | button exit pay loan |
            | import pay           |
            | import pending       |
            | account summary      |
            | button pay           |

    @LOP010
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: From another amount screen- change amount
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | only account     |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "10"
        And the user enter on the calculate payment button
        When the user select change the amount entered
        Then the user sees the following items in the screen
            | item                           | value    |
            | exit other amount              |          |
            | input                          |          |
            | calculate payment              | disabled |
            | choose type payment link other |          |

    @LOP011
    @MX @backend(test)
    @!vbank
    @ios @android @web
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-167706
    Scenario: Make loan payment from option loan settlement
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | no account       |
        And the user accesses to pay credit
        And the user accesses to "loan settlement" pay
        And the user enter continue settlement button
        When the user select account and enter pay
        Then the user sees the following items in the screen
            | item             |
            | label loan       |
            | date loan        |
            | import loan      |
            | operation folio  |
            | button exit loan |

    @LOP012
    @MX @backend(test)
    @!vbank
    @ios @android @web
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-167706
    Scenario: Make payment with fee reduction option
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | set payment      |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "1"
        And the user enter on the calculate payment button
        And the user enter on the continue button radio
        When the user select account and enter pay
        Then the user sees the following items in the screen
            | item             |
            | label loan       |
            | date loan        |
            | import loan      |
            | operation folio  |
            | button exit loan |

    @LOP013
    @MX @backend(test)
    @!vbank
    @ios @android @web
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOMX-167706
    Scenario: Make payment with term reduction option
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | set payment      |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "1"
        And the user enter on the calculate payment button
        And he user select term reduction option and continue
        When the user select account and enter pay
        Then the user sees the following items in the screen
            | item             |
            | label loan       |
            | date loan        |
            | import loan      |
            | operation folio  |
            | button exit loan |

    @LOP014
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Validate loan settlement link when the payment of the current receipt was made
        Given a user with the following criteria
            | criteria           |
            | loan payment       |
            | payment personal   |
            | no current payment |
        And the user accesses to pay credit
        When the user accesses to "loan settlement" pay
        Then the user sees the following items in the screen
            | item                        |
            | button exit settlement      |
            | pay import settlement       |
            | message settlement          |
            | button continue settlement  |
            | link choose type settlement |

    @LOP015
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Show loan settlement option disabled
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | overdue payment  |
        When the user accesses to pay credit
        Then the user sees the following items in the screen
            | item            | value    |
            | loan settlement | disabled |

    @LOP016
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario Outline: Validate when the user enters an "<case>" in the input
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | only account     |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        When the user ingrese amount of "<amount>"
        Then the user sees the following items in the screen
            | item                |
            | message error input |

        Examples:
            | amount  | case                         |
            | 4000   | amount higher than receipt   |
            | 210000 | amount greater than the debt |

    @LOP017
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Show error message the accounts do not cover the amount to be settled
        Given a user with the following criteria
            | criteria           |
            | loan payment       |
            | payment personal   |
            | insuficient amount |
        And the user accesses to pay credit
        And the user accesses to "loan settlement" pay
        When the user enter continue settlement button
        Then the user sees the following items in the screen
            | item                                   |
            | message insuficient amount all account |

    @LOP018
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Show error message when attempts are exceeded when accounts fail
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | no account       |
        And the user accesses to pay credit
        And the user accesses to "loan settlement" pay
        And the user enter continue settlement button
        When the user retries the operation "3" times
        Then the user sees the following items in the screen
            | item                  |
            | icon messages account |
            | text message account  |
            | link call             |

    @LOP019
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Show account with insufficient balance
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | set loan         |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        When the user enter continue reciept button
        Then the user sees the following items in the screen
            | item                       | value    |
            | account                    | disabled |
            | message insuficient amount |          |

    @LOP020
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done @alternate-scenarios-smoke
    Scenario: Validate the "X" button on the receipt amount screen
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | set loan         |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        When the user enter exit
        Then the user sees the following items in the screen
            | item            | value  |
            | header          |        |
            | loan detail     |        |
            | mortage number  |        |
            | pendign debt    |        |
            | receipt payment |        |
            | other amount    |        |
            | loan settlement | enable |

    @LOP021
    @MX @backend(test)
    @!vbank
    @ios @android @web
    @alternate-scenarios-smoke
    @manual @JIRA.GLOMOGL-23888
    Scenario: Pay off loan when up to date
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | loan settlement  |
        And the user accesses to pay credit
        And the user accesses to "loan settlement" pay
        And the user enter continue settlement button
        When the user select account and enter pay
        Then the user sees the following items in the screen
            | item            |
            | import loan     |
            | operation folio |
            | info success    |
            | date success    |
            | button clouse   |

    @LOP022
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Pay pending bills
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | pending receipts |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        And the user enter continue reciept button
        When the user select account and enter pay
        Then the user sees the following items in the screen
            | item            |
            | import loan     |
            | operation folio |
            | info success    |
            | date success    |
            | button clouse   |

    @LOP023
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario: Pay another amount when you have pending bills
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | no receipts      |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "1"
        And the user enter on the calculate payment and continue
        When the user select account and enter pay
        Then the user sees the following items in the screen
            | item            |
            | import loan     |
            | operation folio |
            | info success    |
            | date success    |
            | button clouse   |

    @LOP024
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: The user does not have sufficient balance in their accounts
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | pending receipts |
        And the user accesses to pay credit
        And the user accesses to "receipt amount" pay
        When the user enter continue reciept button
        Then the user sees the following items in the screen
            | item                       | value    |
            | account                    | disabled |
            | message insuficient amount |          |

    @LOP025
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: Validate alert when entering 0 pesos
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | pending receipts |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        When the user ingrese amount of "0"
        Then the user sees the following items in the screen
            | item                |
            | message error input |

    @LOP026
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: Error within the request
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | loan settlement  |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "29500"
        And the user enter on the calculate payment button
        When the user opts for deadline reduction and proceeds
        Then the user sees an error modal with the following elements:
            | item          |
            | header        |
            | description   |
            | accept button |
            | cancel button |

    @LOP027
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: Validate button change amount from summary screen
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | loan settlement  |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "10"
        And the user enter on the calculate payment button
        When the user starts quota cut, picks account and adjusts "amount"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | exchange title      |
            | change button       |
            | keep changes button |

    @LOP028
    @MX @backend(test)
    @vbank
    @ios @android @web
    @web-done
    Scenario: Validate change account button from summary screen
        Given a user with the following criteria
            | criteria         |
            | loan payment     |
            | payment personal |
            | loan settlement  |
        And the user accesses to pay credit
        And the user accesses to "other amount" pay
        And the user ingrese amount of "10"
        And the user enter on the calculate payment button
        When the user starts quota cut, picks account and adjusts "account"
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | exchange title              |
            | change button account       |
            | keep changes button account |

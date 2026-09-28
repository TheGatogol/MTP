@financeTransactionMultipurchase
Feature: Finance Transaction Multipurchase to installment with fee

    @FTMP001
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 1.1.1.1
    Scenario: Access to Finance Transaction Multipurchase for the first time - Onboarding
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | First time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the user sees the following items in the screen
            | item                          |
            | Header                        |
            | Onboarding Modal Description  |
            | Onboarding Modal Enter button |

    @FTMP002
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #happypath #UX 1.1.1.1.1
    Scenario Outline: Complete successfully process of Finance Transaction Multipurchase - <months> months
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | first time access                 |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes finance transaction multipurchase process for "<months>" months
        When the user confirms finance multipurchase simulation
        Then the user sees the following items in the screen
            | item                       | value   |
            | header                     |         |
            | operation status           |         |
            | operation date             |         |
            | monthly payment            |         |
            | deferred amount            |         |
            | <months> months fee amount | <state> |
            | total amount due           |         |
            | card image                 |         |
            | card alias                 |         |
            | card pan4                  |         |
            | number of months           |         |
            | start payment date         |         |
            | operation type             |         |
            | folio                      |         |
            | infobox message 1          |         |
            | infobox message 2          |         |
            | share receipt              |         |
            | exit                       |         |

        @smokeTest
        Examples:
            | months | state |
            | 3      |       |

        Examples:
            | months | state     |
            | 6      |           |
            | 9      | invisible |
            | 12     | invisible |
            | 18     | invisible |

    @FTMP003
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 1.1.1.2.1
    Scenario: Complete successfully process of one purchase
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes selection of "1" transaction multipurchase
        And the user finishes finance transaction multipurchase process for "3" months
        When the user confirms finance multipurchase simulation
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | operation status    |
            | operation date      |
            | monthly payment     |
            | deferred amount     |
            | 3 months fee amount |
            | total amount due    |
            | card image          |
            | card alias          |
            | card pan4           |
            | number of months    |
            | start payment date  |
            | operation type      |
            | folio               |
            | infobox message 1   |
            | infobox message 2   |
            | share receipt       |
            | exit                |

    @FTMP004
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 2
    Scenario: Finance Transaction Multipurchase - Loading of all transactions
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | more than 7 transactions          |
        And the user accesses to the "multipurchase more than 7 transactions" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        When the user shows more transactions
        Then the user sees more transactions

    @FTMP005
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 2.1
    Scenario: Finance Transaction Multipurchase - Show more transactions invisible
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | less than 7 transactions          |
        And the user accesses to the "multipurchase less than 7 transactions" "credit" card product detail
        When the user accesses to finance transaction multipurchase
        Then the user sees the following items in the screen
            | item                      | value     |
            | header                    |           |
            | card image                |           |
            | card number               |           |
            | deferred balance title    |           |
            | deferred amount value     |           |
            | main description          |           |
            | infobox                   |           |
            | transaction list          |           |
            | total deferred amount     |           |
            | show more button          | invisible |
            | purchases continue button | disabled  |

    @FTMP006
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 3 & 3.2
    Scenario: Summary behaviour - Edit selection of finance transactions multipurchase
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes finance transaction multipurchase process for "3" months
        When the user edits selection finance transaction multipurchase
        Then the user sees the following items in the screen
            | item                             |
            | card image                       |
            | card number                      |
            | deferred balance title           |
            | deferred amount value            |
            | monthly due title                |
            | monthly due amount               |
            | transaction selection            |
            | months number                    |
            | start payment date               |
            | total deferred amount            |
            | open terms and conditions button |
            | purchases continue button        |

    @FTMP007
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 3.4
    Scenario: Summary behaviour - Edit selection of deferred months
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes finance transaction multipurchase process for "3" months
        When the user edits selection of deferred months in "9" months
        Then the user sees the following items in the screen
            | item                             | value   |
            | card image                       |         |
            | card number                      |         |
            | deferred balance title           |         |
            | deferred amount value            |         |
            | monthly due amount               |         |
            | transaction selection            |         |
            | months selection                 |         |
            | months number                    |         |
            | start payment date               |         |
            | fixed annual interest rate       |         |
            | total interest exclusive of tax  |         |
            | total debt amount                |         |
            | check terms and conditions       | uncheck |

    @FTMP008
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 3.5
    Scenario: Summary behaviour - Consults terms and conditions in summary
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes finance transaction multipurchase process for "9" months
        When the user consults the terms and conditions of summary
        Then the user sees the following items in the screen
            | item                                 | value    |
            | check terms and conditions           | enabled  |
            | continue terms and conditions button | enabled  |

    @FTMP009
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 4.1
    Scenario: Summary behaviour - Leave terms and conditions in summary
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes finance transaction multipurchase process for "3" months
        When the user leaves the process
        Then the user accesses the "Orange Card Detail" screen

    @FTMP010
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 3.6
    Scenario: Summary behaviour - Leave operative with the process completed
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes finance transaction multipurchase process for "3" months
        And the user confirms finance multipurchase simulation
        When the user leaves the process
        Then the user accesses the "Orange Card Detail" screen

    @FTMP011
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 5.1
    Scenario: Tooltips - Participating purchases
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        When the user opens "participate purchases" tooltip
        Then the user sees a "big" modal with the following elements:
            | item              |
            | description       |
            | Understood button |

    @FTMP012
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 5.4, 5.5
    Scenario Outline: Tooltips - <tooltip> - <numberOfMonths> months
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user selects finance transaction multipurchase process for "<numberOfMonths>" months
        When the user opens "<tooltip>" tooltip
        Then the user sees a "<size>" modal with the following elements:
            | item              |
            | description       |
            | Understood button |
        Examples:
            | numberOfMonths | tooltip                    | size  |
            | 3              | deferred fee               | big   |
            | 6              | deferred fee               | big   |
            | 9              | fixed annual interest rate | big   |
            | 9              | starts to pay              | small |
            | 9              | cat x.xx excluding fee     |  big  |

    @FTMP013
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7
    Scenario: Errors - The information on the screen does not load
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | error 500 access multipurchase    |
        And the user accesses to the "multipurchase active" "credit" card product detail
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the user sees a "big" modal with the following elements:
            | item              |
            | description       |
            | retry button      |
            | exit button       |

    @FTMP014
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.1
    Scenario: Errors - The information on the screen does not load - Retry 3 times
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | error 500 access multipurchase    |
        And the user accesses to the "multipurchase active" "credit" card product detail
        And the user attempts to access to finance transaction multipurchase for the first time
        When the user retries "3" more times
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | call bbva button |
            | exit button      |

    @FTMP015
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.2
    Scenario: Error in process of financing multipurchase
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | error financing multipurchase     |
        And the user accesses to the "error financing multipurchase" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes selection of "1" transaction multipurchase
        And the user finishes finance transaction multipurchase process for "3" months
        When the user attempts to confirm finance multipurchase simulation
        Then the user sees a "small" modal with the following elements:
            | item              |
            | description       |
            | retry button      |
            | exit button       |

    @FTMP016
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.2
    Scenario: Error in process of financing multipurchase - Retry 3 times
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | Error Financing Multipurchase     |
        And the user accesses to the "error financing multipurchase" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes selection of "1" transaction multipurchase
        And the user finishes finance transaction multipurchase process for "3" months
        And the user accepts finance multipurchase simulation
        When the user retries "3" more times with otp
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | call bbva button |
            | exit button      |

    @FTMP017
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.3
    Scenario: Error in multipurchase transaction selection
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | Error Selecting Multipurchase     |
        And the user accesses to the "error selecting multipurchase" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        When the user completes selection of "1" transaction multipurchase
        Then the user sees a "big" modal with the following elements:
            | item              |
            | description       |
            | retry button      |
            | exit button       |

    @FTMP018
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.3
    Scenario: Error in multipurchase transaction selection - Retry 3 times
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | Error Selecting Multipurchase     |
        And the user accesses to the "error selecting multipurchase" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user completes selection of "1" transaction multipurchase
        When the user retries "3" more times
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | call bbva button |
            | exit button      |

    @FTMP019
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.4
    Scenario: Error - User has no movements to put to installments
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | without transactions              |
        And the user accesses to the "without transactions" "credit" card product detail
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | understood button |

    @FTMP020
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.5
    Scenario: Error - User has insufficient debt to finance
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | not enought debt to finance       |
        And the user accesses to the "not enought debt to finance" "credit" card product detail
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | understood button |

    @FTMP021
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.6
    Scenario: Error - User has an active promotion therefore the financing is disabled.
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | active finance promotion          |
        And the user accesses to the "active finance promotion" "credit" card product detail
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | understood button |

    @FTMP022
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.7
    Scenario: Error - User surpassed the credit limit
        Given a user with the following criteria
            | criteria                  |
            | Finance Transaction Multipurchase |
            | surprassed credit limit   |
        And the user accesses to the "surprassed credit limit" "credit" card product detail
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | understood button |

    @FTMP023
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.8
    Scenario: Error - User has due payments
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | overdue financing payments        |
        And the user accesses to the "overdue financing payments" "credit" card product detail
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | understood button |

    @FTMP024
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.9
    Scenario: Error - The user is in a personal finance plan
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | personal finance plan             |
        And the user accesses to the "personal finance plan" "credit" card product detail
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | understood button |

    @FTMP025
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.10
    Scenario: Error - The user has a balance less than 1000
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | insufficient balance              |
        And the user accesses to the "insufficient balance" "credit" card product detail
        When the user attempts to access to finance transaction multipurchase for the first time
        Then the user sees a "big" modal with the following elements:
            | item             |
            | description      |
            | understood button |

    @FTMP026
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.11
    Scenario: Error - User cannot select more than 10 purchases per financement
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | more than 7 transactions          |
        And the user accesses to the "multipurchase more than 7 transactions" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user shows more transactions
        When the user selects "11" transaction multipurchase
        Then the user sees a "small" modal with the following elements:
            | item             |
            | description      |
            | understood button |

    @FTMP027
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.12
    Scenario: Error - Failed to load pagination
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | Error pagination                  |
        And the user accesses to the "error pagination" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        When the user shows more transactions and uploads all purchases
        Then the user sees the following items in the screen
            | item         |
            | description  |
            | retry button |

    @FTMP028
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.12.1
    Scenario: Error - Failed to load pagination - Retry access
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | Error pagination                  |
        And the user accesses to the "error pagination" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        And the user shows more transactions and uploads all purchases
        When the user retries "3" more times to show more transactions
        Then the user sees the following items in the screen
            | item             |
            | description      |
            | Call bbva button |

    @FTMP029
    @ios @android @web @web-done
    @MX @artichoke @vbank
    #UX 7.13
    Scenario: Error - User selects and surpass the deferrable balance
        Given a user with the following criteria
            | criteria                          |
            | Finance Transaction Multipurchase |
            | surpass deferrable balance        |
        And the user accesses to the "surpass deferrable balance" "credit" card product detail
        And the user accesses to finance transaction multipurchase
        When the user selects "2" transaction multipurchase
        Then the user sees a "small" modal with the following elements:
            | item              |
            | description       |
            | understood button |

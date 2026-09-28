@checks @checksDeposit @checksDepositsList
Feature: Checks Deposits (List&Searching)

    @CDL002
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario Outline: Accesses Checks Deposits List screen and has 2 checks deposited <status> the same day
        Given a user with the following criteria
            | criteria                       |
            | digital checks                 |
            | account in pesos               |
            | has 2 check deposited <status> |
        When the user accesses the checks deposit list screen
        Then the user sees the following items in the screen
            | item                           | value |
            | Title                          |       |
            | Back button                    |       |
            | Text                           |       |
            | Last deposited checks title    |       |
            | Same date with <status> checks | 2     |
            | Add floating button            |       |

        Examples:
            | status   |
            | charged  |
            | rejected |

    @CDL003
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Accesses Checks Deposits List screen and has 2 checks deposited different days
        Given a user with the following criteria
            | criteria                             |
            | digital checks                       |
            | account in pesos                     |
            | has 2 check deposited different days |
        When the user accesses the checks deposit list screen
        Then the user sees the following items in the screen
            | item                        | value |
            | Title                       |       |
            | Back button                 |       |
            | Text                        |       |
            | Last deposited checks title |       |
            | Check Item                  | 2     |
            | Add floating button         |       |

    @CDL004
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Accesses Checks Deposits List screen and has no checks deposited
        Given a user with the following criteria
            | criteria                |
            | account in pesos        |
            | no digital checks       |
            | has no checks deposited |
        When the user accesses the checks deposit list screen
        Then the user sees the following items in the screen
            | item                |
            | Title               |
            | Back button         |
            | no items asset      |
            | Text Bottom         |
            | Add floating button |

    @CDL005
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Goes back in the checks deposits list screen
        Given a user with the following criteria
            | criteria                |
            | account in pesos        |
            | no digital checks       |
            | has no checks deposited |
        And the user accesses the checks deposit list screen
        When the user goes back to previous page
        Then the user accesses the "Checks Section" screen

    @CDL006
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Accesses Checks Deposits List screen and has 5 checks deposited
        Given a user with the following criteria
            | criteria              |
            | digital checks        |
            | account in pesos      |
            | has 6 check deposited |
        When the user accesses the checks deposit list screen
        Then the user sees the following items in the screen
            | item                        | value |
            | Title                       |       |
            | Back button                 |       |
            | Text                        |       |
            | Last deposited checks title |       |
            | Check Item                  | 5     |
            | Add floating button         |       |
            | View more link              |       |

    @CDL007
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: User views more checks in partial checks list screen and has 6 checks
        Given a user with the following criteria
            | criteria              |
            | digital checks        |
            | account in pesos      |
            | has 6 check deposited |
        And the user accesses the checks deposit list screen
        When the user views all checks
        Then the user sees the following items in the screen
            | item                        | value |
            | Title                       |       |
            | Back button                 |       |
            | Order button                |       |
            | Check Item                  | 6     |
            | Filter floating button      |       |

    @CDL008
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Accesses filter check deposits list options screen
        Given a user with the following criteria
            | criteria              |
            | digital checks        |
            | account in pesos      |
            | has 6 check deposited |
        And the user accesses the checks deposit list screen
        When the user filters the checks
        Then the user sees the following items in the screen
            | item                    | value        |
            | Title                   |              |
            | Close button            |              |
            | Date title              |              |
            | Date selector           | not selected |
            | from date picker        | empty date   |
            | to date picker          | today        |
            | Amount title            |              |
            | from amount             | empty amount |
            | to amount               | empty amount |
            | Status title            |              |
            | All status radio button | selected     |
            | Deposited radio button  | not selected |
            | Rejected radio button   | not selected |
            | Filter button           | disabled     |
            | Delete filter button    | disabled     |

    @CDL009
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    @smokeTest
    Scenario Outline: Edits the filter period <date_selector> from <from_date> to <to_date> from <from_amount> to <to_amount> and status <status> in the filter check deposits list options screen
        Given a user with the following criteria
            | criteria               |
            | digital checks         |
            | account in pesos       |
            | has 6 check deposited  |
        And the user accesses the filter check deposits list options screen
        When the user edits a filter with period "<date_selector>" from date "<from_date>" to date "<to_date>" from amount "<from_amount>" to amount "<to_amount>" status "<status>"
        Then the user sees the following items in the screen
            | item                    | value   |
            | Filter button           | enabled |
            | Delete filter button    | enabled |

        Examples:
            | date_selector | from_date   | to_date | from_amount  | to_amount    | status         |
            | selected      | empty date  | today   | empty amount | empty amount | all            |
            | not selected  | date        | today   | empty amount | empty amount | all            |
            | not selected  | empty date  | date    | empty amount | empty amount | all            |
            | not selected  | empty date  | today   | amount       | empty amount | all            |
            | not selected  | empty date  | today   | empty amount | amount       | all            |
            | not selected  | empty date  | today   | empty amount | empty amount | other than all |

    @CDL010
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Filters by status in the filter check deposits list options screen and there are results
        Given a user with the following criteria
            | criteria                                                    |
            | digital checks                                              |
            | account in pesos                                            |
            | has 1 check deposited in accepted status out of more than 5 |
        And the user accesses the filter check deposits list options screen
        When the user filters by accepted status
        Then the user sees the following items in the screen
            | item                   |
            | Title                  |
            | Back button            |
            | Order button           |
            | Check Date             |
            | Check ID               |
            | Check Item charged     |
            | Check Amount           |
            | Filter floating button |

    @CDL011
    @web @web-done
    @MX @vbank @backend(test)
    @ios @android
    Scenario: Filters by date in the filter check deposits list options screen and there are results
        Given a user with the following criteria
            | criteria                                               |
            | digital checks                                         |
            | account in pesos                                       |
            | has 2 checks deposited the same day out of more than 5 |
        And the user accesses the filter check deposits list options screen
        When the user filters by last month
        Then the user sees the following items in the screen
            | item                          | value |
            | Title                         |       |
            | Back button                   |       |
            | Filtered labels               |       |
            | Order button                  |       |
            | Same date with charged checks | 2     |
            | Filter floating button        |       |

    @CDL012
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    @smokeTest
    Scenario: Filters by from amount in the filter check deposits list options screen and there are results
        Given a user with the following criteria
            | criteria                                                              |
            | digital checks                                                        |
            | account in pesos                                                      |
            | has 1 check deposited of at least a minimum amount out of more than 5 |
        And the user accesses the filter check deposits list options screen
        When the user filters by from amount
        Then the user sees the following items in the screen
            | item                   | value      |
            | Title                  |            |
            | Back button            |            |
            | Filtered labels        | from label |
            | Order button           |            |
            | Check Item             | 1          |
            | Filter floating button |            |

    @CDL013
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    @manual @JIRA.GLOMOMX-249381
    Scenario: Filters in the filter check deposits list options screen and there are no results
        Given a user with the following criteria
            | criteria               |
            | digital checks         |
            | account in pesos       |
            | has 6 check deposited  |
        And the user accesses the filter check deposits list options screen
        When the user filters with no results
        Then the user sees the following items in the screen
            | item                   |
            | Title                  |
            | Back button            |
            | Filtered labels        |
            | no items asset         |
            | no items text          |
            | Filter floating button |

    @CDL014
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario Outline: Orders by <type_order> date in the the checks list screen
        Given a user with the following criteria
            | criteria                             |
            | digital checks                       |
            | account in pesos                     |
            | has 2 check deposited different days |
        And the user accesses the checks deposit list screen
        When the user orders by "<type_order>" date
        Then the user sees the following items in the screen
            | item                   | value        |
            | Title                  |              |
            | Back button            |              |
            | Order button           |              |
            | Check Items ordered by | <type_order> |

        Examples:
            | type_order |
            | descending |
            | ascending  |

    @CDL015
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario Outline: Deletes the filter period <date_selector> from <from_date> to <to_date> from <from_amount> to <to_amount> and status <status> in the filter check deposits list options screen
        Given a user with the following criteria
            | criteria              |
            | digital checks        |
            | account in pesos      |
            | has 6 check deposited |
        And the user accesses the filter check deposits list options screen
        And the user edits a filter with period "<date_selector>" from date "<from_date>" to date "<to_date>" from amount "<from_amount>" to amount "<to_amount>" status "<status>"
        When the user deletes the filter
        Then the user sees the following items in the screen
            | item                    | value        |
            | Title                   |              |
            | Close button            |              |
            | Date title              |              |
            | Date selector           | not selected |
            | from date picker        | empty date   |
            | to date picker          | today        |
            | Amount title            |              |
            | from amount             | empty amount |
            | to amount               | empty amount |
            | Status title            |              |
            | All status radio button | selected     |
            | Deposited radio button  | not selected |
            | Rejected radio button   | not selected |
            | Filter button           | disabled     |
            | Delete filter button    | disabled     |

        Examples:
            | date_selector | from_date   | to_date | from_amount  | to_amount    | status         |
            | selected      | empty date  | today   | empty amount | empty amount | all            |
            | not selected  | date        | today   | empty amount | empty amount | all            |
            | not selected  | empty date  | today   | amount       | empty amount | all            |
            | not selected  | empty date  | today   | empty amount | amount       | all            |
            | not selected  | empty date  | today   | empty amount | empty amount | other than all |

    @CDL016
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Deletes a filter label in the filtered check deposits list screen
        Given a user with the following criteria
            | criteria               |
            | digital checks         |
            | account in pesos       |
            | has 6 check deposited  |
        And the user accesses the filter check deposits list options screen
        When the user deletes a filter label
        Then the user sees the following items in the screen
            | item                        | value |
            | Empty filter tags           |       |
            | Check Item                  | 6     |

    @CDL017
    @MX @vbank @web-done @backend(test)
    @ios @android @web
    Scenario: Invalid to amount in the filter check deposits list options screen
        Given a user with the following criteria
            | criteria               |
            | digital checks         |
            | account in pesos       |
            | has 6 check deposited  |
        And the user accesses the filter check deposits list options screen
        When the user enters a lower to amount than the from amount
        Then the app shows an error message in the check filter "to amount" input

    @CDL018
    @MX @vbank @web-done @backend(test)
    @web @ios @android
    Scenario: User accesses photo collection with N2 account and shows error at account level
        Given a user with the following criteria
            | criteria                      |
            | account in pesos              |
            | level n4 account and level n2 |
        And the user accesses to checks operatives with checks management active
        When the user accesses to checks deposit option and accepts terms and conditions
        Then the user sees the following items in the screen
            | item                      |
            | title                     |
            | header                    |
            | back button               |
            | short description deposit |

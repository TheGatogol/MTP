@promotionsAdvancedPayments
Feature: Promotions Advanced Payments

    @PAP001
    @web @ios @android @smokeTest
    @MX @vbank @backend(test) @web-done
    Scenario Outline: Validate advanced payment for promotion with <type>
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the user reaches to "<type>" payment
        When the user pays promotion advanced
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | check icon     |
            | text success   |
            | amount section |
            | share button   |
        Examples:
            | type            |
            | monthly payment |
            | other amount    |
            | total amount    |

    @PAP002
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario Outline: Validate when there is no <case>
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | <user>                       |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        When the user exits promotions advanced payments when "<user>"
        Then the user sees the following items in the screen
            | item                         | value   |
            | header                       |         |
            | OnOff action                 | enable  |
            | Generate digital card action | <value> |
            | Card image                   | enable  |
            | Pan number                   | enable  |
        Examples:
            | case            | user                     | value  |
            | Promotion       | promotion not applicable | enable |
            | Minimum payment | minimum not applicable   | enable |

    @PAP003
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario Outline: Validate advanced payment for promotion with change <change>
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the user reaches to "monthly payment" payment
        When the user changes of "<change>" and pay promotion advanced
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | check icon     |
            | text success   |
            | amount section |
            | share button   |
        Examples:
            | change    |
            | promotion |
            | amount    |
            | account   |

    @PAP004
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: View accounts screen
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        When the user accesses to show more accounts
        Then the user sees the following items in the screen
            | item               |
            | panel              |
            | account            |
            | account list       |

    @PAP005
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    Scenario: Validate when leaving the promotions advance payments screen
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the user reaches to "monthly payment" payment
        When the user exits promotions advanced payments when "on the summary screen"
        Then the user sees the following items in the screen
            | item                         | value   |
            | header                       |         |
            | OnOff action                 | enable  |
            | Generate digital card action | enable  |
            | Card image                   | enable  |
            | Pan number                   | enable  |

    @PAP006
    @web @android @ios
    @vbank
    @MX @backend(test)
    @web-done
    Scenario: Validate continue from the promotions advance payments screen
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the user reaches to "monthly payment" payment
        When the user "Continue the process" promotions advanced payments screen
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | back button           |
            | edit button promotion |
            | edit button amount    |
            | edit button account   |

    @PAP007
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Retry 3 times for failed operation
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | promotions payment error     |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the user reaches to "total amount" payment
        When the user pays promotion advanced
        Then the user sees the following items in the screen
            | item         |
            | header       |
            | back button  |
            | retry icon   |
            | retry text   |
            | retry button |

    @PAP008
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Validate that the operation has not been completed successfully
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | promotions payment error     |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the user reaches to "total amount" payment
        And the user pays promotion advanced
        When the user retries "2" more times
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | back button           |
            | error icon            |
            | error text            |
            | button call bbva line |

    @PAP009
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario Outline: Validate when <amount> is entered
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        When the user enters import "<amount>" in amount pay step
        Then the user sees the following items in the screen
            | item           |
            | panel          |
            | monthly amount |
            | total amount   |
            | other amount   |
            | error message  |
        Examples:
            | amount |
            | 0      |
            | 14000  |

    @PAP010
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Validate when an amount greater than the account balance is entered
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        When the user deposits an amount greater than his balance
        Then the user sees the following items in the screen
            | item           |
            | panel          |
            | monthly amount |
            | total amount   |
            | other amount   |
            | error message  |

    @PAP011
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: The client has more than 5 promotions
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        And the user accesses to show more promotions
        And the user reaches to "other amount" payment
        When the user pays promotion advanced
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | check icon     |
            | text success   |
            | amount section |
            | share button   |

    @PAP012
    @web @ios @android
    @MX @vbank @backend(test) @web-done
    Scenario: Validate error when an account has insufficient funds
        Given a user with the following criteria
            | criteria                     |
            | Credit card                  |
            | promotions advanced payments |
            | account                      |
            | insufficient balance         |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to promotions advanced payments
        When the user reaches to "total amount" payment
        Then the user sees the following items in the screen
            | item                    |
            | panel                   |
            | retirement account      |
            | account                 |
            | information message     |

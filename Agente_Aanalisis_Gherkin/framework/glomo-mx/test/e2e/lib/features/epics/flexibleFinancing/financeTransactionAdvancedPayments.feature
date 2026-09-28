@financeTransactionAdvancedPayments
Feature: Finance Transaction Advanced Payments

    @ADP001
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user accesses the advance payments section
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | offers detail card |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses the "no deferrals" section
        Then the user sees the following items in the screen
            | item                   |
            | onboarding header      |
            | onboarding close       |
            | onboarding image       |
            | onboarding title       |
            | onboarding description |
            | onboarding understood  |

    @ADP002
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user makes an advance payment
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the user chooses a movement "continue" "0"
        When the user selects an account and continue
        Then the user sees the following items in the screen
            | item                            |
            | successful payment icon         |
            | successful payment status       |
            | successful payment amount       |
            | successful payment date         |
            | successful payment share button |

    @ADP003
    @ios @android @web @web-done
    @smokeTest
    @MX @backend(test) @vbank
    Scenario: The user changes the monthly payments of the advance
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the user chooses a movement "modifies monthly payment" "0"
        When the user selects an account and continue
        Then the user sees the following items in the screen
            | item                              |
            | successful payment status         |
            | successful payment icon           |
            | successful payment amount         |
            | successful payment date           |
            | successful payment share button   |

    @ADP004
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user changes the advance amount
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the user chooses a movement "chooses another amount" "500"
        When the user selects an account and continue
        Then the user sees the following items in the screen
            | item                            |
            | successful payment icon         |
            | successful payment status       |
            | successful payment amount       |
            | successful payment date         |
            | successful payment share button |

    @ADP005
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user enters a smaller amount in the other amount field
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And  the user chooses a movement "chooses another amount" "1"
        When the user selects an account and continue
        Then the user sees the following items in the screen
            | item                            |
            | successful payment icon         |
            | successful payment status       |
            | successful payment amount       |
            | successful payment date         |
            | successful payment share button |

    @ADP006
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user enters and liquidates deferrals
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | deferral completed |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "settle deferrals" and continue
        When the user selects an account and continue
        Then the user sees the following items in the screen
            | item                            |
            | successful payment icon         |
            | successful payment status       |
            | successful payment amount       |
            | successful payment date         |
            | successful payment share button |

    @ADP007
    @ios @android @web @web-done
    @smokeTest
    @MX @backend(test) @vbank
    Scenario: The user pay the overdue account balance
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        And the user enters the amount "2705" and continues
        When the user selects an account and continue
        Then the user sees the following items in the screen
            | item                            |
            | successful payment icon         |
            | successful payment status       |
            | successful payment amount       |
            | successful payment date         |
            | successful payment share button |

    @ADP008
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user pays the minimum balance due
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        And the user enters the amount "1" and continues
        When the user selects an account and continue
        Then the user sees the following items in the screen
            | item                              |
            | successful payment icon           |
            | successful payment status         |
            | successful payment amount         |
            | successful payment date           |
            | successful payment share button   |

    @ADP009
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user make monthly payment
        Given a user with the following criteria:
            | criteria        |
            | financing line  |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "monthly payment" section
        And the user observes the payment and continues
        When the user selects an account and continue
        Then the user sees the following items in the screen
            | item                            |
            | successful payment icon         |
            | successful payment status       |
            | successful payment amount       |
            | successful payment date         |
            | successful payment share button |

    @ADP010
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user sees all purchases made to anticipate
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        When the user selects "advance payment" and continue
        Then the user sees the following items in the screen
            | item               |
            | modal title        |
            | modal close button |
            | purchase name      |
            | modal amount       |
            | modal months       |

    @ADP011
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user enters the overdue balance help section
        Given a user with the following criteria:
            | criteria        |
            | financing line  |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects a purchase and continues
        When the user selects an account and continue
        Then the user sees the following items in the screen
            | item                            |
            | successful payment icon         |
            | successful payment status       |
            | successful payment amount       |
            | successful payment date         |
            | successful payment share button |

    @ADP012
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user enters the help section
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        When the user enters the section to help with overdue balance
        Then the user sees the following items in the screen
            | item             |
            | modal title help |
            | modal close help |
            | modal icon help  |
            | modal info help  |

    @ADP013
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The client closes the advance payment process
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the user chooses a movement "modifies monthly payment" "0"
        When the user tries to close the advance payments
        Then the user sees the following items in the screen
            | item                    |
            | modal warning text      |
            | modal warning icon      |
            | modal warning icon exit |
            | modal warning exit      |
            | modal warning link      |

    @ADP014
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: User changes difference in summary screen
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the user chooses a movement "modifies monthly payment" "0"
        When the user enters to change the deferrals
        Then the user sees the following items in the screen
            | item               |
            | modal title        |
            | modal close button |
            | purchase name      |
            | modal amount       |
            | modal months       |

    @ADP015
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user changes the payment type from the summary screen
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        And the user chooses a movement "modifies monthly payment" "0"
        When the user changes the payment type to the settlement option
        Then the user sees the following items in the screen
            | item                 |
            | change payment type  |
            | title screen summary |
            | amount change text   |

    @ADP016
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The client sees that you have no active deferrals
        Given a user with the following criteria:
            | criteria           |
            | financing line     |
            | deferral completed |
        And the user accesses to the "operative" "debit" card product detail
        When the user enters advance payments
        Then the user sees the following items in the screen
            | item                     |
            | modal title error        |
            | modal close button error |
            | modal icon error         |
            | modal text error         |
            | modal button error       |

    @ADP017
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user enters a larger amount
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | late payments  |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "pay overdue balance" section
        When the user enters a larger amount "5000"
        Then the user sees the following items in the screen
            | item                      |
            | multistep header          |
            | warning message           |
            | type icon overdue step    |

    @ADP018
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user exceeds by entering the total amount for the month
        Given a user with the following criteria:
            | criteria        |
            | financing line  |
            | monthly payment |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses the "monthly payment" section
        Then the user sees the following items in the screen
            | item                       |
            | header monthly error       |
            | button monthly error       |
            | icon monthly error         |
            | close button monthly error |

    @ADP019
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: The user enters the summary screen
        Given a user with the following criteria:
            | criteria       |
            | financing line |
            | many movements |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses the "anticipate payments" section
        And the user selects "advance payment" and continue
        When the user chooses a movement "continue" "0"
        Then the user sees the following items in the screen
            | item                 |
            | change payment type  |
            | change deferral      |
            | change monthly       |
            | title screen summary |

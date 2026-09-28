@debitLineCancel @flexibleFinancing
Feature: Finance Line Cancellation

    @DLC001
    @MX
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank @smokeTest
    Scenario Outline: Successful cancellation financing line <option>
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
            | <option>                 |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        And the user selects "date pay" reason and cancel line
        When the user fills the otp correctly
        Then the user sees the following items in the screen
            | item                   | value    |
            | header secondary       |          |
            | close header secondary |          |
            | icon voucher           |          |
            | title voucher          |          |
            | date voucher           |          |
            | account voucher        |          |
            | operation type voucher |          |
            | contract voucher       |          |
            | reason voucher         |          |
            | operation folio        |          |
            | email                  | <status> |
            | to share button        |          |

        Examples:
            | option        | status      |
            | with email    |             |
            | without email | not visible |

    @DLC002
    @MX
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario Outline: Select reason <reason> and continue in cancellation line process
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        When the user selects "<reason>" reason and continues
        Then the user sees the following items in the screen
            | item                   |
            | header secondary       |
            | close header secondary |
            | title prefilled        |
            | account prefilled      |
            | limit amount prefilled |
            | info text prefilled    |
            | title detail reasons   |
            | reason selected        |
            | change reason          |
            | title text selected    |
            | detail text selected   |
            | product name selected  |
            | limit amount selected  |
            | info detail selected   |
            | continue selected      |

        Examples:
            | reason             |
            | date pay           |
            | high commission    |
            | low limit          |
            | complicate process |
            | other              |

    @DLC003
    @MX
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Access to cancel of line and keep the line
        Given a user with the following criteria
            | criteria              |
            | financial line active |
        And the user accesses to Financing Cancel of Debit line
        When the user keeps the line
        Then the user sees the "Flexible Financing Dashboard" screen

    @DLC004
    @MX
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Try exit from cancellation reason section
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        And the user selects "date pay" reason
        When the user closes the screen and keeps
        Then the user sees the following items in the screen
            | item                          |
            | title half modal              |
            | close half modal              |
            | icon half modal               |
            | description half modal        |
            | exit half modal               |
            | continue operation half modal |

    @DLC005
    @MX
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Try exit of cancellation reason section and continues
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        And the user selects "date pay" reason
        When the user closes the screen and continues with operation
        Then the user sees the following items in the screen
            | item                   |
            | header secondary       |
            | close header secondary |
            | title prefilled        |
            | account prefilled      |
            | limit amount prefilled |
            | info text prefilled    |
            | title detail reasons   |
            | text detail reasons    |
            | reasons list           |
            | continue reasons       |

    @DLC006
    @MX
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Exit to cancellation reason section
        Given a user with the following criteria
            | criteria                 |
            | financial line active    |
            | without outstanding debt |
        And the user accesses to Financing Cancel of Debit line
        And the user continues from onboarding
        And the user selects "date pay" reason
        When the user closes the screen and keeps
        Then the user sees the "financing dashboard" screen

    @DLC007
    @MX
    @web @android @ios @web-done
    @backend(test)
    @vbank
    Scenario: Anticipate payment to cancel of line page with outstanding debt
        Given a user with the following criteria
            | criteria              |
            | financial line active |
            | delinquent charges    |
        And the user attempts to access to Financing Cancel of Debit line
        When the user anticipates payment
        Then the user sees the "advance payment" screen

    @DLC008
    @MX
    @web @android @ios @web-done
    @backend(test)
    @vbank
    Scenario: Payment due balance in cancel of line page with delinquent charges
        Given a user with the following criteria
            | criteria       |
            | financing line |
            | late payments  |
        And the user attempts to access to Financing Cancel of Debit line
        When the user pays the balance due
        Then the user sees the "overdue payment" screen

    @DLC009
    @MX
    @web @android @ios @web-done
    @backend(artichoke)
    @vbank
    Scenario: Exit of cancel of line page with delinquent charges
        Given a user with the following criteria
            | criteria              |
            | financial line active |
            | delinquent charges    |
        And the user attempts to access to Financing Cancel of Debit line
        When the user closes the modal
        Then the user sees the "flexible financing dashboard" screen

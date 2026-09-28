@cardPaymentsPlans @paymentPlanFixed
Feature: Payment Plan Fixed

    @PPF002
    @MX @vbank @web-done @backend(test)
    @web @android @ios @backend-smoke
    Scenario: Access to offers with payment plan fixed and sees the terms and conditions
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "payment plan fixed"
        When the user accesses payment plan terms and conditions
        Then the user sees the following items in the screen
            | item                 |
            | terms and conditions |
            | term check one       |
            | term check two       |
            | heading terms        |
            | notification terms   |
            | pdf one              |

    @PPF003
    @MX @vbank @web-done @backend(test)
    @web @android @ios @backend-smoke
    Scenario: Access to offers with payment plan fixed and sees and confirm the terms and conditions
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "payment plan fixed"
        When the user select and confirm payment plan terms and conditions
        Then the user sees the following items in the screen
            | item                |
            | authorize offer     |
            | authorize offer btn |

    @PPF004
    @MX @vbank @web-done @backend(test)
    @web @android @ios @backend-smoke
    Scenario: Access to offers with payment plan fixed and show exit modal
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "payment plan fixed"
        When the user to exit the payment offer detail
        Then the user sees the following items in the screen
            | item                             |
            | warning help modal title         |
            | warning help modal icon          |
            | warning help modal content       |
            | warning help modal accept button |
            | warning help modal cancel link   |

    @PPF005
    @MX @vbank @web-done @backend(test) @smokeTest
    @web @android @ios
    Scenario: Access to offers with payment plan fixed and authorize offer binding
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "payment plan fixed"
        And the user authorize payment plan offer
        When the user completes the binding of the payment plan
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | panel info                  |
            | list simple plan type       |
            | list simple card associate  |
            | list simple plan balance    |
            | list simple term            |
            | list simple initial payment |
            | list simple deadline        |
            | list simple interest rate   |
            | list simple monthly payment |
            | notification message        |
            | default button              |

    @PPF006
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with payment plan fixed and offer is not available
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        When the user selects payment plan offer "offer payment plan fixed not available"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | microillustration   |
            | description         |
            | offer not available |
            | understand button   |

    @PPF007
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with payment plan fixed and offer out of schedule
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        When the user selects payment plan offer "offer payment plan fixed out of schedule"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | microillustration     |
            | description           |
            | offer out of schedule |
            | understand button     |

    @PPF008
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with payment plan fixed, error on service
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        When the user selects payment plan offer "error payment plan fixed on offer"
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | microillustration |
            | description       |
            | error on service  |
            | understand button |

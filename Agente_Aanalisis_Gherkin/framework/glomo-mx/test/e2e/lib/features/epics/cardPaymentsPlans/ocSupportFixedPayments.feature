@cardPaymentsPlans @supportFixedPayments
Feature: Support Fixed Payments

    @SFP002
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with support for fixed card payments and sees the terms and conditions
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "support fixed payments"
        When the user accesses payment plan terms and conditions
        Then the user sees the following items in the screen
            | item                 |
            | terms and conditions |
            | term check one       |
            | term check two       |
            | heading terms        |
            | notification terms   |
            | pdf one              |

    @SFP003
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with support for fixed card payments and sees and confirm the terms and conditions
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "support fixed payments"
        When the user select and confirm payment plan terms and conditions
        Then the user sees the following items in the screen
            | item                |
            | authorize offer     |
            | authorize offer btn |

    @SFP004
    @MX @vbank @web-done @backend(test) @smokeTest
    @web @android @ios
    Scenario: Access to offers with support for fixed card payments and authorize offer binding
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "support fixed payments"
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

    @SFP005
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with support for fixed card payments and offer is not available
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        When the user selects payment plan offer "offer support fixed payments not available"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | microillustration   |
            | description         |
            | offer not available |
            | understand button   |

    @SFP006
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with support for fixed card payments and offer out of schedule
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        When the user selects payment plan offer "offer support fixed payments out of schedule"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | microillustration     |
            | description           |
            | offer out of schedule |
            | understand button     |

    @SFP007
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with support for fixed card payments, error on service
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        When the user selects payment plan offer "error support fixed payments on offer"
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | microillustration |
            | description       |
            | error on service  |
            | understand button |

    @SFP008
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with support for fixed card payments, dashboard navigation
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user accesses to dashboard
        When the user selects payment plan offer "support fixed payments"
        Then the user sees the following items in the screen
            | item                                 |
            | support fixed payments offer header  |
            | support fixed payments offer summary |
            | support fixed payments offer banner  |
            | support fixed payments offer amount  |

    @SFP009
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with support for fixed card payments and show exit modal
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user accesses to dashboard
        And the user selects payment plan offer "support fixed payments"
        When the user to exit the payment offer detail
        Then the user sees the following items in the screen
            | item                             |
            | warning help modal title         |
            | warning help modal icon          |
            | warning help modal content       |
            | warning help modal accept button |
            | warning help modal cancel link   |

@cardPaymentsPlans @paymentPlanRestructure
Feature: Payment Plan Restructure

    @PPR002
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with payment plan for restructuring and sees the terms and conditions
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "payment plan for restructuring"
        When the user accesses payment plan terms and conditions
        Then the user sees the following items in the screen
            | item                 |
            | terms and conditions |
            | term check one       |
            | term check two       |
            | heading terms        |
            | notification terms   |
            | pdf one              |

    @PPR003
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with payment plan for restructuring and sees and confirm the terms and conditions
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "payment plan for restructuring"
        When the user select and confirm payment plan terms and conditions
        Then the user sees the following items in the screen
            | item                |
            | authorize offer     |
            | authorize offer btn |

    @PPR004
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with payment plan for restructuring and show exit modal
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "payment plan for restructuring"
        When the user to exit the payment offer detail
        Then the user sees the following items in the screen
            | item                             |
            | warning help modal title         |
            | warning help modal icon          |
            | warning help modal content       |
            | warning help modal accept button |
            | warning help modal cancel link   |

    @PPR005
    @MX @vbank @web-done @backend(test) @smokeTest
    @web @android @ios
    Scenario: Access to offers with payment plan for restructuring and authorize offer binding
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        And the user selects payment plan offer "payment plan for restructuring"
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

    @PPR006
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with payment plan for restructuring and offer is not available
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        When the user selects payment plan offer "offer payment plan for restructuring not available"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | microillustration   |
            | description         |
            | offer not available |
            | understand button   |

    @PPR007
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with payment plan for restructuring and offer out of schedule
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        When the user selects payment plan offer "offer payment plan for restructuring out of schedule"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | microillustration     |
            | description           |
            | offer out of schedule |
            | understand button     |

    @PPR008
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with payment plan for restructuring, error on service
        Given a user with the following criteria
            | criteria                 |
            | card payment plans offer |
        When the user selects payment plan offer "error payment plan for restructuring on offer"
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | microillustration |
            | description       |
            | error on service  |
            | understand button |

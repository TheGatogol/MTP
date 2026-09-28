@loansPaymentsPlans @ocLoanPaymentPlanDecreaseLoan
Feature: Loan Payment Plan Decrease Loan

    @LPPDL002
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with loan decrease loan payment plan and sees the terms and conditions
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        And the user selects payment plan offer "decrease loan"
        When the user accesses payment plan terms and conditions
        Then the user sees the following items in the screen
            | item                 |
            | terms and conditions |
            | term check one       |
            | term check two       |
            | heading terms        |
            | notification terms   |
            | pdf one              |

    @LPPDL003
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with loan decrease loan payment plan and confirm the terms and conditions
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        And the user selects payment plan offer "decrease loan"
        When the user select and confirm payment plan terms and conditions
        Then the user sees the following items in the screen
            | item                |
            | authorize offer     |
            | authorize offer btn |

    @LPPDL004
    @MX @vbank @web-done @backend(test) @smokeTest
    @web @android @ios
    Scenario: Access to offers with loan decrease loan and authorize offer binding
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        And the user selects payment plan offer "decrease loan"
        And the user authorize payment plan offer
        When the user completes the binding of the payment plan
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | panel info                      |
            | list simple plan type           |
            | list simple card associate      |
            | list simple plan balance        |
            | list simple term                |
            | list simple decrease percentage |
            | list simple initial payment     |
            | list simple deadline            |
            | list simple monthly payment     |
            | notification message            |
            | default button                  |

    @LPPDL005
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with loan decrease loan payment plan and offer is not available
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        When the user selects payment plan offer "decrease loan not available"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | microillustration   |
            | description         |
            | offer not available |
            | understand button   |

    @LPPDL006
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with loan decrease loan payment plan and offer out of schedule
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        When the user selects payment plan offer "decrease loan not out of schedule"
        Then the user sees the following items in the screen
            | item                  |
            | header                |
            | microillustration     |
            | description           |
            | offer out of schedule |
            | understand button     |

    @LPPDL007
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with loan decrease loan payment plan, error on service
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        When the user selects payment plan offer "decrease loan not available error on offer"
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | microillustration |
            | description       |
            | error on service  |
            | understand button |

    @LPPDL008
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Access to offers with decrease loan payment plan and show exit modal
        Given a user with the following criteria
            | criteria                  |
            | decrease loan plans offer |
        And the user selects payment plan offer "decrease loan"
        When the user to exit the payment offer detail
        Then the user sees the following items in the screen
            | item                             |
            | warning help modal title         |
            | warning help modal icon          |
            | warning help modal content       |
            | warning help modal accept button |
            | warning help modal cancel link   |

@equityFundWithdrawal
Feature: Equity Fund Withdrawal

    @EFW002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user accesses the fund withdrawal screen, in the simulation step
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        When the user accesses in the "simulation step" section of equity fund withdrawal
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | simulation          |
            | simulation input    |
            | simulation info box |
            | simulation button   |

    @EFW003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user accesses the fund withdrawal screen, in the confirm simulation step
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        When the user accesses in the "confirm simulation step" section of equity fund withdrawal
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | simulation container info |
            | simulation success info   |
            | simulation confirm button |

    @EFW004
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user accesses the fund withdrawal screen, in the summary step
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        When the user accesses in the "summary step" section of equity fund withdrawal
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | simulation collapsed info   |
            | simulation collapsed amount |
            | summary button              |

    @EFW005
    @MX
    @backend(test)
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @web @android @ios
    Scenario: The user accesses the fund withdrawal screen, in the confirm step
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        When the user accesses in the "confirm step" section of equity fund withdrawal
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | header otp          |
            | title otp           |
            | input otp           |
            | continue button otp |

    @EFW006
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user accesses the fund withdrawal success page
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        When the user accesses in the "confirm step" section of equity fund withdrawal
        And the user completes the equity fund withdrawal process with "78009454" otp code
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | success        |
            | header section |
            | body section   |
            | exit button    |

    @EFW007
    @MX @smokeTest
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user sees blocked contract error modal on fund withdrawal
        Given a user with the following criteria
            | criteria                |
            | equity contract blocked |
        And the user accesses to dashboard
        And the user accesses to equity fund detail
        And the user accesses equity funds withdrawal
        When the user accesses in the "confirm simulation step" section of equity fund withdrawal
        Then the user sees a modal with the following elements:
            | item          |
            | title         |
            | description   |
            | accept button |

    @EFW008
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios @tmpExclude @JIRA.GLOMOMX-174596
    Scenario: The user clicks on change the withdrawal amount of the total sale
        Given a user with the following criteria
            | criteria               |
            | equity fund withdrawal |
        And the user accesses to equity fund
        When the user chooses "total" sale
        And the user changes withdrawal amount
        Then the user sees the following items in the screen
            | item               |
            | title amount       |
            | description amount |
            | input amount       |
            | icon amount        |
            | message amount     |

    @EFW009
    @MX
    @backend(test)
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @web @android @ios
    Scenario: The user cancels the process of inserting amount
        Given a user with the following criteria
            | criteria               |
            | equity fund withdrawal |
        And the user accesses to equity fund
        And the user chooses "partial" sale
        When the user enters the amount "20" to withdraw from the fund
        And the user cancels the process of entering amount
        Then the user sees a modal with the following elements:
            | item           |
            | paragraph icon |
            | description    |
            | accept button  |
            | cancel button  |

    @EFW010
    @MX
    @backend(test)
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @web @android @ios
    Scenario: The user makes the partial sale of the fund
        Given a user with the following criteria
            | criteria               |
            | equity fund withdrawal |
        And the user accesses to equity fund
        And the user chooses "partial" sale
        When the user enters the amount "50" to withdraw from the fund
        And the user makes the withdrawal of the "partial" sale
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | investment date   |
            | investment amount |
            | review message    |

    @EFW011
    @MX
    @backend(test)
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @web @android @ios
    Scenario: The user makes the total sale of the fund
        Given a user with the following criteria
            | criteria               |
            | equity fund withdrawal |
        And the user accesses to equity fund
        When the user chooses "total" sale
        And the user makes the withdrawal of the "total" sale
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | investment date   |
            | investment amount |
            | review message    |

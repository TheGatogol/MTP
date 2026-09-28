@equityFundContributions
Feature: Equity Fund Contributions

    @EFC002
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user accesses the fund contribution screen, in the simulation step
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        When the user accesses in the "simulation step" section of equity fund contributions
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | simulation container info |
            | simulation success info   |
            | simulation confirm button |

    @EFC003
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user accesses the fund contribution screen, in the summary step
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        When the user accesses in the "summary step" section of equity fund contributions
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | info box                    |
            | simulation collapsed info   |
            | simulation collapsed amount |
            | summary button              |

    @EFC004
    @MX
    @backend(test)
    @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @web @android @ios
    Scenario: The user accesses the fund contribution screen, in the confirm step
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        When the user accesses in the "confirm step" section of equity fund contributions
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | header otp          |
            | title otp           |
            | input otp           |
            | continue button otp |

    @EFC005
    @MX @smokeTest
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user accesses the fund contribution success page
        Given a user with the following criteria
            | criteria               |
            | equity fund operations |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        When the user accesses in the "confirm step" section of equity fund contributions
        And the user completes the equity fund contributions process with "80978008" otp code
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | success        |
            | header section |
            | body section   |
            | exit button    |

    @EFC006
    @MX
    @backend(test)
    @vbank @web-done
    @web @android @ios
    Scenario: The user sees blocked contract error modal
        Given a user with the following criteria
            | criteria                |
            | equity contract blocked |
        And the user accesses to equity fund detail
        And the user accesses equity funds contributions
        When the user accesses in the "simulation step" section of equity fund contributions
        Then the user sees a modal with the following elements:
            | item          |
            | title         |
            | description   |
            | accept button |

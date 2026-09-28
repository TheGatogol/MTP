@customerContracts
Feature: Customer Contracts

    @CCS001
    @smokeTest
    @web @ios @android @MX
    @vbank @backend(test) @web-done
    @backend-smoke
    Scenario: The user accesses the contracts screen
        Given a user with the following criteria
            | criteria           |
            | customer contracts |
        And the user accesses to profile screen
        When the user accesses to profile contracts list
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | title                     |
            | contracts list            |
            | terms and conditions      |
            | digital services contract |
            | single digital contract   |

    @CCS002
    @web @ios @android @MX
    @vbank @backend(test) @web-done
    @backend-smoke
    Scenario: The user accesses the contracts screen and return to profile screen
        Given a user with the following criteria
            | criteria           |
            | customer contracts |
        And the user accesses to profile screen
        When the user accesses to profile contracts list
        And the user returns to profile screen
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | personal info title |
            | change avatar       |

    @CCS003
    @web @ios @android @MX
    @!vbank
    @manual @JIRA.GLOMOGL-20657
    Scenario Outline: The user sees the pdf of <document>
        Given a user with the following criteria
            | criteria           |
            | customer contracts |
        And the user accesses to profile screen
        And the user accesses to profile contracts list
        When the user opens the "<document>" PDF
        Then the user sees the following items in the screen
            | item  |
            | exits |
            | share |
        Examples:
            | document                  |
            | digital services contract |
            | terms and conditions      |
            | payroll portability       |
            | blue card                 |
            | single digital contract   |

    @CCS004
    @web @ios @android @MX
    @vbank @backend(test) @web-done
    Scenario: The user accesses the error view of contracts list
        Given a user with the following criteria
            | criteria           |
            | customer contracts |
        And the user accesses to profile screen
        When the user accesses to profile contracts list
        Then the user sees the following items in the screen
            | item               |
            | retry button error |
            | exit button error  |

    @CCS005
    @web @ios @android @MX
    @!vbank
    @manual @JIRA.GLOMOGL-20657
    Scenario: The user sees the message error to open PDF
        Given a user with the following criteria
            | criteria           |
            | customer contracts |
        And the user accesses to profile screen
        When the user accesses to profile contracts list
        And the user consult file with level up
        And the user accesses to "contratos digitales" document screen
        Then the user sees the following items in the screen
            | item               |
            | retry button error |
            | exit button error  |

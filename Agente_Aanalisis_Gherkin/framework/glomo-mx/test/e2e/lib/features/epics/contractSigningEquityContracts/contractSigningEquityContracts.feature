@contractSigningEquityContracts
Feature: Contract Signing Equity Contracts

    @CSEC001
    @vbank
    @MX
    @web @ios @android
    @web-done
    @smokeTest
    @backend(test)
    Scenario: Equity contract signature success trade execution
        Given a user with the following criteria
            | criteria                                           |
            | contract signing equity contracts execution trades |
        And the user accesses center notification
        And the user accesses to contract signing equity contracts
        And the user performs the action "confirm operation" in associated equity contracts
        When the user confirms the OTP code in associated equity contracts
        Then the user sees the following items in the screen
            | item                           |
            | header successful              |
            | close button successful        |
            | icon successful                |
            | text successful                |
            | product name successful        |
            | account associated successful  |
            | contract number successful     |
            | operation number successful    |
            | date and time successful       |

    @CSEC002
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: Close success screen
        Given a user with the following criteria
            | criteria                                           |
            | contract signing equity contracts execution trades |
        And the user accesses center notification
        And the user accesses to contract signing equity contracts
        And the user performs the action "confirm operation" in associated equity contracts
        And the user confirms the OTP code in associated equity contracts
        When the user closes the success modal
        Then the user sees the "dashboard" screen

    @CSEC004
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: Cancel operation from summary screen
        Given a user with the following criteria
            | criteria                                           |
            | contract signing equity contracts execution trades |
        And the user accesses center notification
        And the user accesses to contract signing equity contracts
        When the user performs the action "close operative" in associated equity contracts
        Then the user sees the following items in the screen
            | item                     |
            | modal exit header        |
            | modal exit close button  |
            | modal exit title         |
            | modal exit body          |
            | modal exit accept button |
            | modal exit link button   |

    @CSEC005
    @vbank
    @MX
    @web @ios @android
    @web-done
    @backend(test)
    Scenario: Validate error when formalizing the contract
        Given a user with the following criteria
            | criteria                                           |
            | contract signing equity contracts execution trades |
        And the user accesses center notification
        And the user accesses to contract signing equity contracts
        When the user performs the action "confirm operation" in associated equity contracts
        Then the user sees the following items in the screen
            | item                      |
            | retry modal header        |
            | retry modal close button  |
            | retry modal message       |
            | retry modal accept button |
            | retry modal cancel button |

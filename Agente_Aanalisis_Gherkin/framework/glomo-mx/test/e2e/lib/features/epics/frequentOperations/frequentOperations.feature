@frequentOperations
Feature: Frequent Operations

    @FEFO001
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    @smokeTest
    Scenario Outline: The user has a pending frequent operation of type <operation_type>
        Given a user with the following criteria
            | criteria                    |
            | frequent operations pending |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                       | value            |
            | frequent operation message | <operation_type> |
        Examples:
            | operation_type                           |
            | interbank transfer                       |
            | own transfer                             |
            | external credit card payment             |
            | interbank transfer last amount           |
            | own transfer last amount                 |
            | external credit card payment last amount |
            | multiple operations                      |

    @FEFO002
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario Outline: The user tries to perform a frequent operation with <balance>
        Given a user with the following criteria
            | criteria                      |
            | frequent operations <balance> |
        And the user accesses to dashboard
        When the user opens the notification card
        Then the user sees the following items in the screen
            | item                                      |
            | frequent operation modal header           |
            | frequent operation modal microilustration |
            | frequent operation modal title            |
            | frequent operation modal description      |
            | frequent operation modal accept button    |
            | frequent operation modal cancel button    |
        Examples:
            | balance                |
            | enough balance         |
            | no balance in accounts |
            | insufficient balance   |

    @FEFO003
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user tries to perform a frequent operation without balance
        Given a user with the following criteria
            | criteria                                 |
            | frequent operations insufficient balance |
        And the user accesses to dashboard
        When the user opens the notification card
        Then the user sees the following items in the screen
            | item                                      |
            | frequent operation modal header           |
            | frequent operation modal microilustration |
            | frequent operation modal title            |
            | frequent operation modal description      |
            | frequent operation modal accept button    |

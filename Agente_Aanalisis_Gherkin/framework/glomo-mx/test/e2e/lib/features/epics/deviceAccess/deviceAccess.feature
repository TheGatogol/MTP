@deviceAccess
Feature: Device Access

    @DAC001
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web @smokeTest
    Scenario: The user reactivates your mobile services by ivr
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user reactivates his account
        When the user requests the call
        Then the user sees a modal with the following elements:
            | item           |
            | header         |
            | container icon |
            | title          |
            | description    |
            | message        |

    @DAC002
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario: The user reactivates your mobile services by biometrics
        Given a user with the following criteria
            | criteria                 |
            | verification card number |
        And the user reactivates his account
        And the user inserts card number
        When the user accesses to verification page
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | title verification        |
            | start verification button |
            | list bullet               |

    @DAC003
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario: The user reactivates your mobile services by biometrics and ivr
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user reactivates his account
        And the user inserts card number
        And the user taps verification
        When the user accesses additional verification and completes the BBVA reactivation process
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | verification description |
            | timer                    |
            | footer Description       |

    @DAC004
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario: The user attempts to exit the flow
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user reactivates his account
        When the user exit modal
        Then the user sees a modal with the following elements:
            | item           |
            | paragraph icon |
            | main text      |
            | accept button  |
            | cancel button  |

    @DAC005
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario: The user enters a card not associated with the user
        Given a user with the following criteria
            | criteria             |
            | customer card number |
        And the user accesses to reactivate BBVA process with an non associated BBVA card to user
        When the user continues process
        Then the user sees a modal with the following elements:
            | item          |
            | header        |
            | title         |
            | description   |
            | accept button |

    @DAC006
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario Outline: The user reactivates account <case>
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | <status>             |
        And the user reactivates his account
        And the user inserts card number
        When the user accesses to device access page
        Then the user sees a modal with the following elements:
            | item          |
            | close button  |
            | title         |
            | description   |
            | accept button |

        Examples:
            | status           | case           |
            | status operative | invalid number |
            | status expired   | card expired   |
            | status blocked   | card blocked   |

    @DAC007
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario Outline: The user reactivates device <status>
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | <status>             |
        When the user reactivates his account
        Then the user sees the following items in the screen
            | item               |
            | exit header button |
            | input card         |
            | continue button    |
        Examples:
            | status    |
            | status pa |
            | status pe |
            | status s4 |

    @DAC008
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Validate when user stays in flow
        Given a user with the following criteria
            | criteria             |
            | customer card number |
            | status c4            |
        When the user accesses to reactives his c4 status
        Then the user sees a modal with the following elements:
            | item          |
            | description   |
            | accept button |

    @DAC009
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Validate when user stays in flow 2
        Given a user with the following criteria
            | criteria                 |
            | verification card number |
        And the user reactivates his account
        And the user inserts card number
        When the user exit modal
        Then the user sees a modal with the following elements:
            | item          |
            | description   |
            | accept button |

    @DAC010
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Validate when the user activates with physical token
        Given a user with the following criteria
            | criteria                 |
            | verification card number |
        And the user reactivates his account
        And the user inserts card number
        And the user accesses to device access page
        When the user accesses to dashboard
        Then the user sees a modal with the following elements:
            | item              |
            | header            |
            | dashboard account |

    @DAC011
    @MX @manual @JIRA.GLOMOMX-173502
    @!vbank @backend(test)
    @android @ios @web
    Scenario: Validate when the user activates with mobile token
        Given a user with the following criteria
            | criteria                 |
            | verification card number |
        And the user reactivates his account
        And the user inserts card number
        And the user accesses to device access page
        When The user access dashboard
        Then the user sees a modal with the following elements:
            | item              |
            | header            |
            | dashboard account |

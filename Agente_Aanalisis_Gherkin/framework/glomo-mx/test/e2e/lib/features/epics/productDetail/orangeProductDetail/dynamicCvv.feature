@dynamicCvv
Feature: DynamicCVV

    @DCVV001
    @MX
    @ios @android @web
    @backend(artichoke)
    @vbank
    @smokeTest
    @manual @JIRA.GLOMOGL-31643
    Scenario Outline: Access to Dynamic Cvv - <state> digital card
        Given a user with the following criteria
            | criteria             |
            | digital card <state> |
        When the user accesses the screen of a switched "<state>" digital card
        Then the user sees the following items in the screen
            | item                  | value   |
            | card image            |         |
            | description           |         |
            | PAN number Label      |         |
            | PAN number Value      |         |
            | Expiration Date Label |         |
            | Expiration Date Value |         |
            | Dynamic CVV Label     |         |
            | Dynamic CVV Value     |         |
            | Dynamic CVV Button    | <value> |
            | Copy Pan Button       |         |
            | Switch OffOn          |         |
            | Help Button           |         |

        Examples:
            | state | value   |
            | on    | enable  |
            | off   | disable |

    @DCVV002
    @ios @android @web
    @backend(artichoke)
    @vbank
    @MX
    @manual @JIRA.GLOMOGL-31643
    Scenario: Copy card number
        Given a user with the following criteria
            | criteria     |
            | digital card |
        And the user accesses the screen of a switched "on" digital card
        When the user copies card number
        Then the user sees the following items in the screen
            | item        |
            | green toast |

    @DCVV003
    @MX
    @ios @android @web
    @backend(artichoke)
    @vbank
    @manual @JIRA.GLOMOGL-31643
    Scenario Outline: Turn <endState> digital card - Help Modal Screen
        Given a user with the following criteria
            | criteria                    |
            | digital card <initialState> |
        And the user accesses the screen of a switched "<initialState>" digital card
        When the user turns "<endState>" the digital card
        Then the user sees the following items in the screen
            | item       |
            | help modal |

        Examples:
            | initialState | endState |
            | on           | off      |
            | off          | on       |

    @DCVV004
    @MX
    @ios @android @web
    @backend(artichoke)
    @vbank
    @smokeTest
    @manual @JIRA.GLOMOGL-31643
    Scenario Outline: Successfully turn "<endState>" digital card
        Given a user with the following criteria
            | criteria                    |
            | digital card <initialState> |
        And the user accesses the screen of a switched "<initialState>" digital card
        When the user turns "<endState>" the digital card
        And the user continues the process
        Then the user sees the following items in the screen
            | item              |
            | switch <endState> |
            | green toast       |

        Examples:
            | initialState | endState |
            | on           | off      |
            | off          | on       |

    @DCVV005
    @ios @android @web
    @backend(artichoke)
    @vbank @MX
    @manual @JIRA.GLOMOGL-31643
    Scenario: Active Dynamic CVV
        Given a user with the following criteria
            | criteria        |
            | digital card on |
        And the user accesses the screen of a switched "on" digital card
        When the user actives dynamic CVV
        Then the user sees the following items in the screen
            | item              |
            | Dynamic CVV Label |
            | Dynamic CVV Value |
            | Timer             |

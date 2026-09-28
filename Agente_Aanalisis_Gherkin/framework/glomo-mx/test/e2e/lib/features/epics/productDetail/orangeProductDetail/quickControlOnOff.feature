@quickControlOnOff
Feature: QuickControlOnOff

    @QCON001
    @smokeTest
    @web @web-done
    @vbank @MX
    @backend(test)
    @backend-smoke
    Scenario Outline: Switch "<onOff>" "<card_type>" card
        Given a user with the following criteria
            | criteria       |
            | transactions   |
            | <cardStatus>   |
        And the user accesses the detail of the additional "operative" "<offOn>" card from the associated "operative credit card"
        And the user "successfully" turns "<onOff>" and "<offOn>" additional card
        When the user "basically" turns "<onOff>" additional card
        Then the user sees the following items in the screen
            | item          | value   |
            | <switchOnOff> | visible |

        Examples:
            | card_type | onOff | offOn | switchOnOff | cardStatus |
            | credit    | on    | off   | Switch off  | cards on   |
            | credit    | off   | on    | Switch on   | cards off  |

    @QCON002
    @web @web-done
    @vbank @MX
    @backend(test)
    @backend-smoke
    Scenario Outline: Help of first time turn "<onOff>" "<card_type>" card
        Given a user with the following criteria
            | criteria       |
            | transactions   |
            | <cardStatus>   |
        And the user accesses to the "<offOn>" "<card_type>" card product detail for the first time
        When the user "basically" turns "<onOff>" the card
        Then the user sees the following items in the screen
            | item           |
            | help label     |
            | turn on link   |
            | exit link      |

        Examples:
            | offOn | onOff | card_type | cardStatus |
            |  off  | on    | credit    | cards on   |
            |  on   | off   | credit    | cards off  |

    @QCON003
    @web @web-done
    @vbank @vbank-modified @MX
    @backend(test)
    @backend-smoke
    ### Add cards_v1_cards and financial_overview with update status
    Scenario Outline: Turn "<onOff>" "<card_type>" card from the help screen
        Given a user with the following criteria
            | criteria       |
            | transactions   |
            | <cardStatus>   |
        And the user accesses the detail of the additional "operative" "<offOn>" card from the associated "operative credit card"
        And the user "basically" turns "<onOff>" additional card
        When the user continues the process
        Then the user sees the following items in the screen
            | item                | value                   |
            | <switchOnOff>       | visible                 |
            | switch <onOff>      | invisible               |

        Examples:
            | offOn | onOff      | card_type | switchOnOff | cardStatus |
            |  off  | on         | credit    | switch off  | cards on   |
            |  on   | off        | credit    | switch on   | cards off  |

    @QCON004
    @web @web-done
    @vbank @MX
    @backend(test)
    @backend-smoke
    Scenario Outline: Switch "<onOff>" "<card_type>" card - Exit from the help screen
        Given a user with the following criteria
            | criteria       |
            | transactions   |
            | <cardStatus>   |
        And the user accesses the detail of the additional "operative" "<offOn>" card from the associated "operative credit card"
        And the user "basically" turns "<onOff>" additional card
        When the user exits the help screen
        Then the user sees the following items in the screen
            | item                   | value      |
            | switch on              | <state1>   |
            | switch off             | <state2>   |

        Examples:
            | offOn | onOff | state1    | state2    | card_type | cardStatus |
            | off   | on    | visible   | invisible | credit    | cards on   |
            | on    | off   | invisible | visible   | credit    | cards off  |

    @QCON005
    @web @web-done
    @vbank @MX
    @backend(test)
    @backend-smoke
    Scenario Outline: Switch "<onOff>" "<card_type>" card - Close from the help screen
        Given a user with the following criteria
            | criteria       |
            | transactions   |
            | <cardStatus>   |
        And the user accesses the detail of the additional "operative" "<offOn>" card from the associated "operative credit card"
        And the user "basically" turns "<onOff>" additional card
        When the user exits the help screen
        Then the user sees the following items in the screen
            | item                   | value      |
            | switch on              | <state1>   |
            | switch off             | <state2>   |

        Examples:
            | offOn | onOff | state1    | state2    | card_type | cardStatus |
            | off   | on    | visible   | invisible | credit    | cards on   |
            | on    | off   | invisible | visible   | credit    | cards off  |

    @QCON006
    @MX
    @web
    @web-done
    @vbank
    @backend(test)
    @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Switch "<onOff>" - Green toast disappears after interact with app
        Given a user with the following criteria
            | criteria       |
            | transactions   |
            | <cardStatus>   |
        And the user "successfully" finishes the turn "<onOff>" and "<offOn>" of "<card>" card
        And the user "basically" turns "<onOff>" the card
        When the user interact with the app
        Then the user does not see the following items in the screen
            | item                   |
            | green toast            |

        Examples:
            | card | onOff | offOn| cardStatus |
            | 1200 | off   | on   | cards off  |
            | 1205 | on    | off  | cards on   |

    @QCON007
    @MX
    @web
    @vbank
    @backend(test)
    @manual @JIRA.GLOMOGL-26754
    Scenario Outline: Switch "<onOff>" - Green toast disappears after 3 seconds
        Given a user with the following criteria
            | criteria       |
            | transactions   |
            | <cardStatus>   |
        And the user accesses to the "<offOn>" "<card>" card product detail
        And the user "successfully" turns "<onOff>" the card
        When the user waits more than 3 seconds
        Then the user does not see the following items in the screen
            | item                   |
            | green toast            |

        Examples:
            | card | onOff | offOn | cardStatus |
            | 1200 | off   | on    | cards off  |
            | 1205 | on    | off   | cards on   |

    @QCON008
    @web @web-done
    @backend(test)
    @vbank @MX
    @vbank-modified
    Scenario: Service access error - "debit" card
        Given a user with the following criteria
            | criteria       |
            | transactions   |
            | debit card     |
        And the user "successfully" finishes the turn "off" and "on" of "debit" card
        And the user accesses to the "switch error" "debit" card product detail
        When the user "basically" turns "off" the card
        Then the user sees the following items in the screen
            | item                |
            | retry modal error   |
            | retry action        |
            | cancel modal error  |

    @QCON009
    @web @web-done
    @vbank @vbank-modified @MX
    #update isActive to false (ON_OFF) financial-overview_v0_financial-overview,GET,5
    Scenario Outline: Service access error - Access successfully
        Given a user with the following criteria
            | criteria                 |
            | debit card on            |
            | activations on off error |
        And the user "successfully" finishes the turn "off" and "on" of "<card_type>" card
        And the user accesses to the "switch error" "<card_type>" card product detail
        When the user "success" turns "off" the card
        Then the user sees the following items in the screen
            | item      | value   |
            | switch on | visible |

        @backend(artichoke)
        Examples:
            | card_type |
            | debit     |

    @QCON010
    @web @web-done
    @backend(test)
    @vbank @MX
    @vbank-modified
    Scenario: Exit from error screen
        Given a user with the following criteria
            | criteria       |
            | transactions   |
            | debit card     |
        And the user "successfully" finishes the turn "off" and "on" of "debit" card
        And the user accesses to the "switch error" "debit" card product detail
        And the user "basically" turns "off" the card
        When the user cancels the operation modal
        Then the user does not see the following items in the screen
            | item                   |
            | switch on              |

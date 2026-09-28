@additionalCards
Feature: Additional Cards

    @ADDC001
    @web @ios @android
    @vbank
    @smokeTest
    @MX @backend(artichoke)
    @web-done
    Scenario: Access to additional cards
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses to the "operative" "credit" card product detail
        When the user displays the additional credit cards module
        Then the user sees the following items in the screen
            | item                        |
            | additional credit card list |
            | fold button                 |

    @ADDC002
    @web @ios @android
    @vbank
    @MX @backend(artichoke)
    @web-done
    Scenario: Access to request additional card
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses to the "associable with less than nine additional" "credit" card product detail
        When the user displays the additional credit cards module
        Then the user sees the following items in the screen
            | item                                  |
            | request additional credit card button |

    @ADDC003
    @MX
    @web @ios @android
    @vbank
    @web-done
    Scenario Outline: Request <status> card unavailable
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses to the "<status>" "credit" card product detail
        When the user displays the additional credit cards module
        Then the user does not see the following items in the screen
            | item                                  |
            | request additional credit card button |

        @backend(artichoke)
        Examples:
            | status                                       |
            | associable with more than nine additional    |
            | no associable with less than nine additional |

    @ADDC004
    @MX
    @web @ios @android
    @vbank
    @web-done
    Scenario Outline: Display <cardType> credit card
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses to the "operative" "credit" card product detail
        When the user displays the additional credit cards module
        Then the user sees the following items in the screen
            | item       |
            | <cardType> |

        @backend(artichoke)
        Examples:
            | cardType             |
            | operative additional |
            | blocked additional   |
            | inactive additional  |

    @ADDC005
    @MX
    @web @ios @android
    @vbank
    @backend(artichoke)
    @web-done
    Scenario: Access error to request additional card
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses to the "error additional" "credit" card product detail
        When the user displays the additional credit cards module
        Then the user sees the following items in the screen
            | item                |
            | error message modal |

    @ADDC006
    @MX
    @web @ios @android
    @vbank
    @backend(artichoke)
    @web-done
    Scenario: Access to request additional card - Card without additional cards - Info modal message
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses to the "no additional" "credit" card product detail
        When the user displays the additional credit cards module
        Then the user sees the following items in the screen
            | item               |
            | Info modal message |

    @ADDC007
    @MX
    @web @ios @android
    @vbank
    @web-done
    Scenario Outline: Display <statusDescription> <additionalCardType> credit card
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        When the user accesses the list of the additional "<status>" "<statusDescription>" card from the associated "operative credit card"
        Then the user sees the following items in the screen
            | item                                     |
            | <statusDescription> <additionalCardType> |

        @backend(artichoke)
        Examples:
            | additionalCardType   | statusDescription | status            |
            | operative additional | stolen            | blocked           |
            | operative additional | lost              | blocked           |
            | operative additional | off               | operative         |
            | operative additional | current           | operative         |
            | operative additional | pdt.receipt.s     | operative         |
            | operative additional | pdt.shipment      | operative         |
            | operative additional | pdt.shipment2     | operative         |
            | inactive additional  | pdt.stamp         | pending embossing |
            | inactive additional  | pdt.delivery      | inoperative       |
            | inactive additional  | pdt.delivery2     | operative         |
            | inactive additional  | pdt.receipt.s     | pending delivery  |
            | blocked additional   | tj.stolen         | blocked           |
            | blocked additional   | tj.lost           | blocked           |
            | blocked additional   | expired           | blocked           |
            | blocked additional   | expired2          | inoperative       |

############ Additional Card Product Detail ############################################################################

    @ADDC008
    @MX
    @web @ios @android
    @vbank
    @smokeTest
    @web-done
    Scenario Outline: Access to <additionalCardType> card detail
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        When the user accesses the detail of the additional "<status>" "<statusDescription>" card from the associated "operative credit card"
        Then the user sees the following items in the screen
            | item                                 |
            | <additionalCardType> Security Module |

        @backend(artichoke)
        Examples:
            | additionalCardType               | statusDescription | status      |
            | operative additional             | off               | operative   |
            | blocked additional               | tj.stolen         | blocked     |
            | expired additional               | expired           | blocked     |
            | inactive additional              | pdt.delivery      | inoperative |
            | credit limit exceeded additional | limit exceeded    | operative   |

    @ADDC009
    @MX
    @web @ios @android
    @vbank
    @backend(artichoke)
    @web-done
    Scenario: Access error to additional card detail - Clip card information cannot be loaded
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        When the user accesses the detail of the additional "operative" "transaction error" card from the associated "operative credit card"
        Then the user sees the following items in the screen
            | item            |
            | Clip card error |

############ QuickControl On Off #################################################################

    @ADDC010
    @MX
    @web
    @vbank
    @web-done
    @smokeTest
    Scenario Outline: Verify status of "<switchOnOff>" "<additionalCardType>" card
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        When the user accesses the detail of the additional "<status>" "<statusDescription>" card from the associated "operative credit card"
        Then the user sees the following items in the screen
            | item          | value   |
            | <switchOnOff> | <value> |

        @backend(artichoke)
        Examples:
            | additionalCardType               | statusDescription | switchOnOff | value    | status          |
            | operative additional             | on                | Switch off  | visible  | operative       |
            | operative additional             | off               | Switch on   | visible  | operative       |
            | blocked additional               | on                | Switch off  | disabled | blocked         |
            | blocked additional               | off               | Switch on   | disabled | blocked         |
            | expired additional               | on                | Switch off  | disabled | expired         |
            | expired additional               | off               | Switch on   | disabled | expired         |
            | inactive additional              | on                | Switch off  | disabled | inactive        |
            | inactive additional              | off               | Switch on   | disabled | inactive        |
            | credit limit exceeded additional | on                | Switch off  | visible  | limit exceeded  |
            | credit limit exceeded additional | off               | Switch on   | visible  | limit exceeded  |

    @ADDC011
    @MX
    @web
    @vbank
    @web-done
    Scenario Outline: Switch "<onOff>" "<additionalCardType>" card for the first time
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses the detail of the additional "<status>" "<statusDescription>" card from the associated "operative credit card"
        When the user "basically" turns "<onOff>" additional card
        Then the user sees the following items in the screen
            | item                     |
            | digital purchase title   |
            | digital purchase info    |
            | exit modal               |

        @backend(artichoke)
        Examples:
            | additionalCardType   | statusDescription | onOff | status    |
            | operative additional | on                | off   | operative |
            | operative additional | off               | on    | operative |

    @ADDC012
    @MX
    @web
    @vbank
    @web-done
    Scenario Outline: Successfully switch "<onOff>" "<additionalCardType>" card
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses the detail of the additional "<status>" "<statusDescription>" card from the associated "operative credit card"
        And the user "successfully" turns "<onOff>" and "<statusDescription>" additional card
        When the user "basically" turns "<onOff>" additional card
        Then the user sees the following items in the screen
            | item          | value |
            | <switchOnOff> |       |

        @backend(artichoke)
        Examples:
            | additionalCardType               | statusDescription | switchOnOff | onOff | status         |
            | operative additional             | on                | Switch on   | off   | operative      |
            | operative additional             | off               | Switch off  | on    | operative      |
            | credit limit exceeded additional | on                | Switch on   | off   | limit exceeded |
            | credit limit exceeded additional | off               | Switch off  | on    | limit exceeded |

    @ADDC013
    @MX
    @web
    @vbank
    @web-done
    Scenario Outline: Switch "<onOff>" "<additionalCardType>" card - Exits from the help screen
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses the detail of the additional "<status>" "<statusDescription>" card from the associated "operative credit card"
        And the user "basically" turns "<onOff>" additional card
        When the user exits the help screen
        Then the user sees the following items in the screen
            | item       | value    |
            | switch on  | <state1> |
            | switch off | <state2> |

        @backend(artichoke)
        Examples:
            | statusDescription | onOff | state1    | state2    | additionalCardType   | status    |
            | on                | off   | invisible | visible   | operative additional | operative |
            | off               | on    | visible   | invisible | operative additional | operative |

    @ADDC014
    @MX @backend(artichoke)
    @web
    @vbank
    @web-done
    Scenario Outline: Turn "<onOff>" "<additionalCardType>" card from the help screen
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses the detail of the additional "<status>" "<statusDescription>" card from the associated "operative credit card"
        And the user "basically" turns "<onOff>" additional card
        When the user continues the process
        Then the user sees the following items in the screen
            | item           | value     |
            | <switchOnOff>  | visible   |
            | switch <onOff> | invisible |

        Examples:
            | statusDescription | onOff | additionalCardType   | switchOnOff | status    |
            | off               | on    | operative additional | switch off  | operative |
            | on                | off   | operative additional | switch on   | operative |

    @ADDC015
    @MX
    @web
    @vbank @vbank-modified
    @web-done
    Scenario Outline: Error switch <card_type> card
        Given a user with the following criteria
            | criteria         |
            | additional cards |
            | credit card      |
        And the user accesses the detail of the additional "<status>" "switch error" card from the associated "operative credit card"
        When the user "successfully" turns "<offOn>" additional card
        Then the user sees a modal open

        @backend(artichoke)
        Examples:
            | offOn | card_type            | status    |
            | on    | operative additional | operative |

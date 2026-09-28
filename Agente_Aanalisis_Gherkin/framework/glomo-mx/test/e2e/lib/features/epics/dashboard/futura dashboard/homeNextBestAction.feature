@homeNextBestActions
Feature: Home Next Best Actions

    @HNBA001
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario Outline: Validate an offer card <type_offer>
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user accesses the next best actions
        Then the user sees the following items in the screen
            | item                                   |
            | nba card title <type_offer>            |
            | nba description card                   |
            | item two to fourt on nest best actions |
            | link offer title i am interested       |

        Examples:
            | type_offer                     |
            | Incremento de línea de crédito |
            | Préstamo de nómina             |
            | Tarjeta de crédito             |

    @HNBA002
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate a sustainability card
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user accesses the last card on experiences section
        Then the user sees the following items in the screen
            | item                                     |
            | nba card title sustainability            |
            | nba description card                     |
            | item three to three on next best actions |
            | link offer title learn more              |

    @HNBA003
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    @smokeTest
    Scenario: Validate a relevant facts card
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user accesses the last card on experiences section
        Then the user sees the following items in the screen
            | item                                          |
            | nba card title Seguro de dispositivos         |
            | nba description card                          |
            | item fourt to fourt on nest best actions      |
            | link offer title i am interested              |

    @HNBA004
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Close a card
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user close a card on the next best actions
        Then the user sees the following items in the screen
            | item                                             |
            | nba card title Incremento de línea de crédito    |
            | nba description card                             |
            | item one to two on nest best actions             |
            | link offer title i am interested                 |

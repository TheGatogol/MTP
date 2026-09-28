@homeNextBestPromotion
Feature: Home Next Best Promotion

    @BKMD001
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Promotional cards work from the carousel - swipe
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        When the user accesses the last card on experiences section
        Then the user sees the following items in the screen
            | item                                     |
            | nba card close button                    |
            | nba card title promotion                 |
            | link offer title i am interested         |
            | item fifth of fifth on next best actions |
            | nba previous item button                 |
            | nba next item button                     |

    @BKMD002
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Promotional cards work from the carousel - close
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user accesses the last card on experiences section
        When the user close a card on the next best actions
        Then the user sees the following items in the screen
            | item                                       |
            | nba card close button                      |
            | item one of fourth on next best actions |
            | nba next item button                       |

    @BKMD003
    @vbank
    @ios @android
    @MX
    @backend(test)
    @web @web-done
    @backend-smoke
    @smokeTest
    Scenario: Link i am interested from carousel
        Given a user with the following criteria
            | criteria    |
            | futura user |
        And the user accesses to dashboard
        And the user accesses the last card on experiences section
        When the user access to a promotion card
        Then the user sees the following items in the screen
            | item                                  |
            | promotion detail information          |
            | promotion detail title                |
            | promotion detail description          |
            | promotion detail about promotion link |

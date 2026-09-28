@IntelligentFrequentOperations
Feature: Intelligent Frequent Operations

    @INTFQ001
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user execute successfully a frequent intelligent internal transfer
        Given a user with the following criteria
            | criteria                         |
            | frequent operations own transfer |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent transfer
        When the user accesses to execute the operation success page for "internal transfer"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept own             |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | users email             |
            | share button            |
            | exit button             |

    @INTFQ002
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user change the concept of a frequent intelligent internal transfer
        Given a user with the following criteria
            | criteria                         |
            | frequent operations own transfer |
        And the user accesses to dashboard
        And the user select the card to enter to a frequent transfer
        And the user edit the transfer concept
        When the user accesses to execute the operation success page for "internal transfer"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept own             |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | users email             |
            | share button            |
            | exit button             |

    @INTFQ003
    @MX
    @vbank @backend(test)
    @web @ios @android
    @web-done
    Scenario: The user tries to execute a frequent intelligent internal transfer without enough balance
        Given a user with the following criteria
            | criteria                         |
            | frequent operations own transfer |
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

    @INTFQ004
    @MX
    @vbank @backend(test) @smokeTest
    @web @ios @android
    @web-done
    Scenario: The user execute successfully a frequent intelligent internal transfer from operations list
        Given a user with the following criteria
            | criteria                         |
            | frequent operations own transfer |
        And the user accesses to option "frequent intelligent operations" operative
        And the user accesses to the frequent operation lists
        When the user accesses to execute the operation success page for "internal transfer"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept own             |
            | concept                 |
            | reference               |
            | operation type          |
            | operation number        |
            | users email             |
            | share button            |
            | exit button             |

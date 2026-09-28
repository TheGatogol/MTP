@invitationNonAccountClient
Feature: Invitation Non Account Client

    @INC001
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: The user access from <section> section
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to dashboard
        When the user enter to invitation non account page from "<section>" section
        Then the user sees the following items in the screen
            | item             |
            | text template    |
            | continue button  |
        Examples:
            | section            |
            | transfer           |
            | opportunities      |
            | cardlessWithdrawal |
            | operationsMore     |
            | checkUp            |
            | add                |

    @INC002
    @MX @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: The user access sidebar
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to dashboard
        And the user accesses to the sidebar
        When the user accesses to "Profile" item located in the sidebar
        Then the user sees the following items in the screen
            | item             | value  |
            | edit adress      | hidden |

    @INC003
    @MX @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario: The user access configuration
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to dashboard
        And the user accesses to "configuration" item located in the sidebar
        When the user enter to invitation non account page from "operation configuration" option in configure products
        Then the user sees the following items in the screen
            | item             |
            | text template    |
            | continue button  |

    @INC004
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done
    Scenario Outline: The user access <section> from notifications
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses center notification
        When the user enter to invitation non account page from "<section>" section
        Then the user sees the following items in the screen
            | item             |
            | text template    |
            | continue button  |
        Examples:
            | section                    |
            | check up notifications     |
            | oportunities notifications |

    @INC005
    @MX
    @vbank @backend(test)
    @ios @android @web
    @web-done @smokeTest
    Scenario: The user access pay credit
        Given a user with the following criteria
            | criteria    |
            | monoproduct |
        And the user accesses to dashboard
        And the user accesses to loan
        When the user enter to invitation non account page from "pay loan" section
        Then the user sees the following items in the screen
            | item             |
            | text template    |
            | continue button  |

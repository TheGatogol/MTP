@cardTransactionServicingScheduledDonations
Feature: Card Transaction Servicing Scheduled Donations

    @ADD002
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android @smokeTest
    @spherica @backend-smoke
    Scenario: The user select two hundred on amount step
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | offers         |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        When the user select one hundred on amount step
        Then the user sees the following items in the screen
            | item             |
            | header multistep |
            | destiny step     |
            | origin step      |
            | amount button    |

    @ADD003
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @spherica @backend-smoke
    Scenario: The user changes the card transactions amount
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | offers         |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        When the user writes a card transaction amount
        Then the user sees the following items in the screen
            | item             |
            | header multistep |
            | destiny step     |
            | origin step      |
            | amount button    |

    @ADD004
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @spherica
    Scenario: The user completes the card transaction
        Given a user with the following criteria
            | criteria             |
            | donations user       |
            | complete transaction |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        And the user confirm amount on step
        When the user confirm transaction on step
        Then the user sees the following items in the screen
            | item         |
            | receipt      |
            | button share |

    @ADD005
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @spherica @backend-smoke
    Scenario Outline: The user <multiple> accounts of origin step
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | <multiple>     |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        And the user continue and edit amount step
        When the user "<multiple>" on card transaction
        Then the user sees the following items in the screen
            | item         |
            | destiny step |
        Examples:
            | multiple                   |
            | modify account             |
            | has three accounts         |
            | has three accounts or more |

    @ADD006
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @spherica @backend-smoke
    Scenario: The user select one hundred on amount step
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | offers         |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        When the user continue and edit amount step
        Then the user sees the following items in the screen
            | item             |
            | header multistep |
            | destiny step     |
            | origin step      |
            | amount button    |

    @ADD007
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @spherica @backend-smoke
    Scenario: The user type another mount on amount steps
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | modify amount  |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        When the user writes a card transaction amount
        Then the user sees the following items in the screen
            | item             |
            | header multistep |
            | destiny step     |
            | origin step      |

    @ADD008
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @spherica @backend-smoke
    Scenario: The user go out of the onboarding screen
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | offers         |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        When the user exit from card transaction onboarding
        Then the user accesses the "contract product section" screen

    @ADD009
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @spherica @backend-smoke
    Scenario: The user go out of card transaction without information
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | offers         |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        And the user continue and edit amount step
        When the user "exit" from card transaction offer
        Then the user accesses the "contract product section" screen

    @ADD010
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @spherica @backend-smoke
    Scenario: The user exits the flow after completing the information.
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | offers         |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        And the user continue and edit amount step
        When the user "exit" from card transaction offer
        Then the user accesses the "contract product section" screen

    @ADD011
    @MX @backend(test)
    @vbank
    @web @web-done
    @ios @android
    @spherica @backend-smoke
    Scenario: The user continue the flow after completing the information.
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | offers         |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        And the user accesses to the step of the card transaction servicing scheduled donations offer
        And the user continue and edit amount step
        When the user "continue" from card transaction offer
        Then the user sees the following items in the screen
            | item          |
            | destiny step  |
            | origin step   |
            | amount button |

    @ADD012
    @MX @backend(test)
    @vbank
    @web @web-done @vbank-modified
    @ios @android
    @spherica
    Scenario Outline: The <element> on card transaction
        Given a user with the following criteria
            | criteria       |
            | donations user |
            | offers         |
        And the user accesses contract product section
        And the user accesses to the card transaction servicing scheduled donations offer detail
        When the user accesses to the step of the card transaction servicing scheduled donations offer
        Then the user sees the following items in the screen
            | item          |
            | origin step   |
            | button group  |
            | amount button |
        Examples:
            | element                |
            | amounts deshabilited   |
            | account without amount |

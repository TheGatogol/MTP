@rewards @pointsTransferExecution
Feature: Points transfer Execution

    @PTE001
    @smokeTest
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Show the points transfer success receipt when all points are transferred
        Given a user with the following criteria
            | criteria         |
            | account          |
            | multi product    |
            | card with points |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer all "total points" to target card
        When the user finishes the points transfer process
        Then the user sees the following items in the screen
            | item                          | value |
            | header                        |       |
            | success operation icon        |       |
            | success operation information |       |
            | operation date                |       |
            | source card information       |       |
            | target card information       |       |
            | points transferred            |       |
            | operation type description    |       |
            | operation number              |       |
            | exit button                   |       |

    @PTE002
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Show the points transfer success receipt when points specific are transferred
        Given a user with the following criteria
            | criteria         |
            | account          |
            | multi product    |
            | card with points |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "500" points to target card
        When the user finishes the points transfer process
        Then the user sees the following items in the screen
            | item                          | value |
            | header                        |       |
            | success operation icon        |       |
            | success operation information |       |
            | operation date                |       |
            | source card information       |       |
            | target card information       |       |
            | points transferred            | 500   |
            | operation type description    |       |
            | operation number              |       |
            | exit button                   |       |

    @PTE003
    @ios @android @web
    @MX @backend(test) @vbank
    @web-done @vbank-modified
    Scenario: Show the error modal when points transfer fails
        Given a user with the following criteria
            | criteria         |
            | account          |
            | multi product    |
            | card with points |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "1" points to target card
        When the user attempts finish the points transfer process
        Then the user sees a "small" type error modal

    @PTE004
    @vbank-modified
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    Scenario: Close the error modal half
        Given a user with the following criteria
            | criteria         |
            | account          |
            | multi product    |
            | card with points |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "1" points to target card
        When the user attempts finish the points transfer process
        Then the user cancels the operation modal

    @PTE005
    @MX
    @ios @android @web @web-done
    @vbank
    @backend-smoke @smokeTest
    @backend(test)
    Scenario Outline: Exit the final receipt of points transfer <description>
        Given a user with the following criteria
            | criteria         |
            | account          |
            | multi product    |
            | card with points |
        And the user accesses to Rewards Landing
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "1" points to target card
        When the user finishes the points transfer process
        Then the user goes back to reward after using the different exit actions "<action>"

        Examples:
            | description                                    | action      |
            | when the header button is clicked              | icon header |

    @PTE006
    @MX
    @ios @android @web @web-done
    @vbank
    @backend(test) @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Exit process transfer points
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
            | account          |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user accesses to "back" points
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | product        |
            | button primary |
            | image card     |

    @PTE007
    @MX
    @ios @android @web
    @vbank
    @backend(test) @alternate-scenarios-smoke @web-done
    @backend-smoke
    Scenario: Continue process transfer points
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
            | account          |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "1" points to target card
        And the user changes to step "points to transfer" and confirm points
        When the user finishes the points transfer process
        Then the user sees the following items in the screen
            | item                          | value |
            | header                        |       |
            | success operation icon        |       |
            | success operation information |       |
            | operation date                |       |
            | source card information       |       |
            | target card information       |       |
            | points transferred            | 300   |
            | operation type description    |       |
            | operation number              |       |
            | exit button                   |       |

    @PTE008
    @MX
    @ios @android @web @web-done
    @vbank
    @backend(test) @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Change credit card to transfer points
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
            | account          |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "1" points to target card
        When the user changes to step "target card" and keep the card change
        Then the user sees the following items in the screen
            | item                      | value    |
            | header                    |          |
            | source card information   |          |
            | points transfer area      | enabled  |
            | confirm button            |          |

    @PTE009
    @MX
    @ios @android @web
    @vbank
    @backend(test) @alternate-scenarios-smoke @web-done
    @backend-smoke
    Scenario: Validate modal error
        Given a user with the following criteria
            | criteria            |
            | card without points |
            | multi product       |
            | account             |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user uses use my points
        And the user accesses to "modal" points
        When the user accepts the modal
        Then the user sees the following items in the screen
            | item           |
            | header         |
            | subHeader      |
            | product        |
            | button primary |
            | image card     |

    @PTE010
    @MX
    @ios @android @web @web-done
    @vbank
    @backend(test) @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Share points transfer voucher
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
            | account          |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "1" points to target card
        When the user finishes the points transfer process
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | success operation icon        |
            | success operation information |
            | exit button                   |

    @PTE011
    @MX
    @ios @android @web @web-done
    @vbank
    @backend(test) @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Transfer points
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | two product      |
            | account          |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user uses use my points
        And the user accesses to "transfer" points
        And the user transfer "1" points to target card
        When the user finishes the points transfer process
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | success operation icon        |
            | success operation information |
            | exit button                   |

    @PTE012
    @MX
    @ios @android @web @web-done
    @vbank
    @backend(test) @alternate-scenarios-smoke
    @backend-smoke
    Scenario: Transfer insufficient points
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
            | account          |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user fills amount of "20000" to transfer to target card
        Then the user sees the following items in the screen
            | item                           | value    |
            | information error              |          |

    @PTE013
    @MX
    @ios @android @web
    @vbank
    @backend(test) @alternate-scenarios-smoke @web-done
    @backend-smoke
    Scenario: See all card
        Given a user with the following criteria
            | criteria         |
            | card with points |
            | multi product    |
            | cards            |
        And the user accesses to dashboard
        And the user accesses to "Rewards Landing" item located in the sidebar
        And the user uses use my points
        And the user accesses to "transfer" points
        When the user accesses all cards
        Then the user sees the following items in the screen
            | item              |
            | header title      |
            | close button      |
            | card amount label |
            | card amount       |

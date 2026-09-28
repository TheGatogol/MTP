@contractProductSection
Feature: contractProductSection

    @CPS002
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done @vbank-modified @smokeTest
    Scenario: The user sees funds offer and deposits offer (static offers)
        Given a user with the following criteria
            | criteria                             |
            | contract product section with offers |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | static offers      |
            | main banner        |
            | main banner button |

    @CPS003
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done @vbank-modified
    Scenario: The user sees normal offers then static offers and finally non preapproved offers
        Given a user with the following criteria
            | criteria                            |
            | contract product section all offers |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item          | value |
            | header        |       |
            | main offer    | 0TDC  |
            | static offers |       |
            | npa offer     | 00CB  |

    @CPS004
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done @vbank-modified
    Scenario: The user sees non preapproved credit card offer in main banner, then static offers and other npa offers
        Given a user with the following criteria
            | criteria                            |
            | contract product section npa offers |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item           | value |
            | header         |       |
            | npa main offer | 0SKY  |
            | static offers  |       |
            | npa offer      | 00CB  |

    @CPS005
    @MX @vbank
    @ios @android @web
    @backend(test)
    @web-done @vbank-modified
    Scenario: The user sees a goals offer along with static offers
        Given a user with the following criteria
            | criteria                            |
            | contract product section plan offer |
        When the user accesses contract product section
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | static offers      |
            | goals offer        |
            | main banner        |
            | main banner button |

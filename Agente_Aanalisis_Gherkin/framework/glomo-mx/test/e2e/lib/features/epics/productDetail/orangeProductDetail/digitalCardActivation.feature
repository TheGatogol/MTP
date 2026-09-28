@digitalCardActivation
Feature: Digital Card Activation

    @DCA001
    @MX
    @ios @android @web
    @backend(test)
    @vbank
    @smokeTest
    @backend-smoke
    @spherica
    @web-done
    Scenario Outline: Digital Card Activation - Switch On <cardType> card
        Given a user with the following criteria
            | criteria                |
            | digital card activation |
            | hiring digital          |
        And the user accesses to the "operative" "<cardType>" card product detail
        And the user access to "digital card generate"
        When the user generate digital card
        Then the user sees the following items in the screen
            | item                    |
            | Success modal           |
            | Date activation Success |
            | Icon success            |
            | Body text success       |
            | Data container success  |
            | Success modal           |

        Examples:
            | cardType |
            | credit   |
            | debit    |

    @DCA002
    @MX
    @ios @android @web
    @web-done
    @backend(test)
    @vbank
    @spherica
    Scenario Outline: Digital Card Activation Error - Switch On <cardType> card
        Given a user with the following criteria
            | criteria                         |
            | cards without digital card error |
        And the user accesses to the "operative" "<cardType>" card product detail
        And the user access to "digital card generate"
        And the user generate digital card
        When the user retries access "max" times
        Then the user sees the following items in the screen
            | item              |
            | Understood button |

        Examples:
            | cardType |
            | credit   |
            | debit    |

    @DCA003
    @MX
    @ios @android @web
    @web-done
    @backend(test)
    @vbank
    @spherica
    Scenario Outline: Digital Card Activation - Switch On <cardType> card - Not completely successfully
        Given a user with the following criteria
            | criteria                         |
            | cards without digital card error |
        And the user accesses to the "operative" "<cardType>" card product detail
        And the user access to "digital card generate"
        When the user generate digital card
        Then the user sees the following items in the screen
            | item              |
            | Understood button |

        Examples:
            | cardType |
            | credit   |
            | debit    |

    @DCA004
    @web @android @ios
    @web-done
    @vbank
    @MX
    @backend(test) @alternate-scenarios-smoke
    @backend-smoke
    @no-spherica
    Scenario: The user exits the terms and conditions screen
        Given a user with the following criteria
            | criteria                |
            | digital card activation |
            | exit hiring             |
        And the user accesses to the "operative" "debit" card product detail
        And the user access to "activate digital card"
        When the user exit digital card activation
        Then the user sees the following items in the screen
            | item                             |
            | header                           |
            | card image                       |
            | switch debit card                |
            | activate digital card debit card |
            | card block management            |

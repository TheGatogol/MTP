@homeCustomizedOffers
Feature: Home Customized Offers

    @HNBO003
    @ios @android @smokeTest
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario Outline: Validates redirection to the <type_loan> loan screen
        Given a user with the following criteria
            | criteria   |
            | futura nbo |
        And the user accesses to dashboard
        And the user accesses NBO section
        When the user accesses the offer "<type_loan>" detail from NBO
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | detail offer step  |
        Examples:
            | type_loan   |
            | card        |
            | personal    |
            | mortgage    |

    @HNBO004
    @ios @android
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validates functionality of the X close
        Given a user with the following criteria
            | criteria   |
            | futura user |
        And the user accesses to dashboard
        And the user accesses NBO section
        When the user closes NBO card
        Then the user sees the following items in the screen
            | item      |
            | icon nbo  |
            | title nbo |
            | text nbo  |

    @HNBO005
    @ios @android
    @MX
    @vbank
    @backend(test)
    @web @web-done
    @backend-smoke
    Scenario: Validate redirection to the Opportunities screen from the title view more
        Given a user with the following criteria
            | criteria    |
            | futura nbo  |
        And the user accesses to dashboard
        When the user accesses NBO section
        Then the user accesses contract product section from "nbo"

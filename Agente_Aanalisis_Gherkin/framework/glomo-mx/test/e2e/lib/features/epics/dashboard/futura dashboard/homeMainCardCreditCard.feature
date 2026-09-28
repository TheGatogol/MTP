@homeMainCardCreditCard
Feature: Home Main Card Credit Card

    @CCC001
    @smokeTest @vbank
    @ios @android
    @backend(test)
    @MX
    @web @web-done
    @backend-smoke
    Scenario: Validate button see all in last movements
        Given a user with the following criteria
            | criteria             |
            | futura user |
        When the user accesses all "credit card" movements from main card
        Then the user sees the following items in the screen
            | item               |
            | movement           |
            | movement date      |
            | movement amount    |
            | movement category  |

    @CCC002
    @vbank
    @ios @android
    @backend(test)
    @MX
    @web @web-done
    @backend-smoke
    Scenario: Validates the functionality of the view income and expenses button
        Given a user with the following criteria
            | criteria                 |
            | futura user |
        When the user accesses dashboard detail PFM "creditCard"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | income tab title    |
            | expenses tab title  |
            | movements tab title |

    @CCC003
    @vbank
    @ios @android
    @backend(test)
    @MX
    @web @web-done
    @backend-smoke
    Scenario Outline: The user sees the <status_card> credit card
        Given a user with the following criteria
            | criteria                 |
            | futura main card account |
        And the user accesses to dashboard
        When the user check the credit "<status_card>"
        Then the user sees the following items in the screen
            | item                 |
            | credit icon          |
            | credit progressbar   |
            | amounts of main products     |
            | button movements main card   |
            | button bills main card       |
        Examples:
            | status_card |
            | off         |
            | locked      |
            | overdue     |

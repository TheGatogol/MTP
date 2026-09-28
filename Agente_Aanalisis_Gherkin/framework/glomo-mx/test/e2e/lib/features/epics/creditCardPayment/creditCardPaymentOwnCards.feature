@creditCardPaymentOwnCards
Feature: Credit Card Payment - Own cards

    @OWC001
    @smokeTest
    @ios @android @web @web-done
    @backend(test) @MX @vbank
    @backend-smoke
    Scenario: From card - successful debt payment of a credit card
        Given a user with the following criteria
            | criteria                 |
            | credit card with mx debt |
            | accounts                 |
            | credit card              |
        And the user accesses to pay the "minimum amount" debt on one of his credit cards
        When the user selects "minimum amount" payment method and account with "MXN" currency
        And the user goes to the card payment receipt operation
        Then the user sees the following items in the screen
            | item                   | value   |
            | header                 |         |
            | operation status       |         |
            | operation date         |         |
            | amount title           |         |
            | total amount           |         |
            | type of payment        |         |
            | body section own cards |         |
            | share button           | enabled |
            | share button label     |         |
            | exit button label      |         |
            | exit button            | enabled |

    @OWC002
    @ios @android @web @web-done
    @backend(test) @MX @vbank
    @backend-smoke
    Scenario: From card - summary debt payment of a credit card
        Given a user with the following criteria
            | criteria                 |
            | credit card with mx debt |
            | accounts                 |
            | credit card              |
        And the user accesses to pay the "minimum amount" debt on one of his credit cards
        When the user selects "minimum amount" payment method and account with "MXN" currency
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | card to pay collapsed     |
            | type of payment collapsed |
            | account info collapsed    |
            | summary                   |

    @OWC003
    @ios @android @web @web-done
    @backend(artichoke) @MX @vbank
    Scenario: From card - error debt payment of a credit card
        Given a user with the following criteria
            | criteria                 |
            | credit card with mx debt |
            | error into payment debt  |
        And the user accesses to pay the "minimum amount" debt on one of his credit cards
        When the user selects "total debt" payment method and account with "MXN" currency
        And the user proceeds to make the payment
        Then the user sees an error modal with the following elements:
            | item     |
            | xl title |

@creditCardPaymentOwnAccount
Feature: Credit Card Payment Own Account

    @OWA001
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Access to Credit Card Payment Own Account
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
            | accounts                  |
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        When the user accesses the "pay card" screen
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | account information |
            | close button        |
            | pay card block      |

    @OWA002
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    Scenario: Happy Path - Total Debt
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
            | accounts                  |
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        When the user accesses the "pay card" screen
        And the user selects payment method "total debt"
        And the user continue with confirm modal
        Then the user sees the following items in the screen
            | item               | value   |
            | header             |         |
            | operation status   |         |
            | operation date     |         |
            | amount title       |         |
            | total amount       |         |
            | type of payment    |         |
            | share button       | enabled |
            | share button label |         |
            | exit button label  |         |
            | exit button        | enabled |

    @OWA003
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done @smokeTest
    @backend-smoke
    Scenario: Happy Path - Other Amount
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
            | accounts                  |
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        When the user accesses the "pay card" screen
        And the user selects card payment method "other import"
        And the user continue with confirm modal
        Then the user sees the following items in the screen
            | item               | value   |
            | header             |         |
            | operation status   |         |
            | operation date     |         |
            | amount title       |         |
            | total amount       |         |
            | type of payment    |         |
            | share button       | enabled |
            | share button label |         |
            | exit button        | enabled |

    @OWA004
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Account has not money enough for some of the payment options
        Given a user with the following criteria
            | criteria         |
            | account in pesos |
            | has little money |
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        When the user accesses the "pay card" screen
        Then the user sees the following items in the screen
            | item                         |
            | payment method disable       |
            | message insufficient balance |

    @OWA005
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Account insufficient balance
        Given a user with the following criteria
            | criteria              |
            | account in pesos      |
            | account without funds |
        And the user selects an account without funds
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        When the user accesses the "pay card" screen
        Then the user sees the following items in the screen
            | item                | value   |
            | header              |         |
            | close button        |         |
            | account information |         |

    @OWA006
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Change Credit Card
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
            | accounts                  |
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        When the user accesses the "pay card" screen
        And the user select a card
        And the user wants to change the selected card
        Then the user sees the following items in the screen
            | item                | value   |
            | header              |         |
            | close button        |         |
            | pay card block      |         |
            | account information |         |
            | payment methods     | disable |

    @OWA007
    @ios @android @web
    @MX @vbank @backend(test)
    @web-done
    @backend-smoke
    Scenario: Change the payment method
        Given a user with the following criteria
            | criteria                  |
            | account in pesos          |
            | account with credit cards |
            | accounts                  |
        And the user accesses to the first account product detail
        And the user accesses the pay card operative
        When the user accesses the "pay card" screen
        And the user selects card payment method "other import"
        And the user continue with the payment
        Then the user sees the following items in the screen
            | item                   | value   |
            | header                 |         |
            | close button           |         |
            | pay card block         |         |
            | account information    |         |
            | payment methods button | disable |

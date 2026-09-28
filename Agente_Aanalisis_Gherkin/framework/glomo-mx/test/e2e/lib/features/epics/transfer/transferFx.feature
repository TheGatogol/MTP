@transfers @transferFx
Feature: Transfer Fx

    @TFX001
    @MX @vbank
    @smokeTest @test
    @web-done @web
    Scenario: Transfer from an account to an own account with foreign currency
        Given a user with the following criteria
            | criteria         |
            | account in pesos |
            | foreign accounts |
        When the user accesses to transfer from dashboard and selects a origin "account"
        And the user starts a transfer to a personal "foreign" account
        And the user introduces amount with foreign exchange "20" "donativo"
        And the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                |
            | transfered amount   |
            | amount charged      |
            | amount paid         |
            | exchange rate       |
            | origin account      |
            | destination account |
            | concept             |
            | operation type      |
            | operation number    |

    @TFX002
    @MX @vbank
    @test
    @web-done @web
    Scenario: Refactor transfer - Transfer from the My Accounts screen to an own account with foreign currency
        Given a user with the following criteria
            | criteria         |
            | account in pesos |
            | foreign accounts |
        When the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user starts a transfer to a personal "foreign" account
        And the user changes the source currency type
        And the user introduces amount with foreign exchange "150" "donativo"
        And the user completes the transfer process with otp code
        Then the user sees the following items in the screen
            | item                |
            | transfered amount   |
            | amount charged      |
            | amount paid         |
            | exchange rate       |
            | origin account      |
            | destination account |
            | concept             |
            | operation type      |
            | operation number    |

    @TFX003
    @MX @vbank
    @test
    @web-done @web
    @alternate-scenarios-smoke
    Scenario: Refactor transfer - The user cancels the transfer flow
        Given a user with the following criteria
            | criteria         |
            | account in pesos |
            | foreign accounts |
        When the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user starts a transfer to a personal "foreign" account
        And the user cancels the transfer operation
        Then the user sees a modal with the following elements:
            | item          |
            | icon          |
            | description   |
            | accept button |
            | cancel button |

    @TFX004
    @MX @vbank
    @test
    @web-done @web
    @alternate-scenarios-smoke
    Scenario: Refactor transfer - The user changes the source account of the transfer
        Given a user with the following criteria
            | criteria         |
            | account in pesos |
            | foreign accounts |
        When the user accesses to transfer from dashboard and selects a origin "pesos account"
        And the user starts a transfer to a personal "foreign" account
        And the user changes the source account
        And the user starts a transfer to a personal "foreign" account
        And the user enters the amount to transfer for "130"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | header exit button      |
            | input concept           |
            | continue button enabled |

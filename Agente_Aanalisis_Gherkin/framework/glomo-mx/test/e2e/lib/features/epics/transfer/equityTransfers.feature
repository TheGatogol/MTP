@transfers @equityTransfer
Feature: Equity Transfer

    @EQT001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @smokeTest
    @web-done
    Scenario Outline:  Validate - Equity transfer from dashboard, from a equity contract to principal account
        Given a user with the following criteria
            | criteria           |
            | transfers equity   |
        And the user accesses to transfer from dashboard and selects a origin "contract"
        And the user starts a transfer to a personal "principal" account
        When the user enter amount "<amount>" and concept "<concept>"
        And the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operation data and hour |
            | origin account          |
            | destination account     |
            | concept own             |
            | operation type          |
            | operation number        |
            | users email             |
            | share button            |
            | exit button             |

        Examples:
            | amount | concept  |
            | 10     | renta    |

    @EQT002
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    Scenario Outline:  Validate - Equity transfer from dashboard, from a principal account to equity contract
        Given a user with the following criteria
            | criteria           |
            | transfers equity   |
        And the user accesses to transfer from dashboard and selects a origin "principal"
        And the user starts a transfer to a personal "contract" account
        When the user enter amount "<amount>" and concept "<concept>"
        And the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | operation data and hour |
            | origin account          |
            | destination account     |
            | concept own             |
            | operation type          |
            | operation number        |
            | users email             |
            | share button            |
            | exit button             |

        Examples:
            | amount | concept  |
            | 10     | renta    |

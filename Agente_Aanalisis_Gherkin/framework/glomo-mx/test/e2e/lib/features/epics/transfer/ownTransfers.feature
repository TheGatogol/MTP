@transfers @ownTransfer
Feature: Own Transfer

    @OWNT001
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline:  Validate - Transfer to an own debit account <description>
        Given a user with the following criteria
            | criteria              |
            | own account transfer  |
        And the user accesses to transfer from dashboard and selects a origin "account own"
        And the user starts a transfer to a personal "debit own" account
        When the user enter amount "<amount>" and concept "<concept>"
        And the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    | value       |
            | header                  |             |
            | operation data and hour |             |
            | transfered amount       |             |
            | tax amount              |             |
            | origin account          |             |
            | destination account     |             |
            | concept own             |             |
            | operation type          |             |
            | operation number        |             |
            | users email             |             |
            | share button            |             |
            | exit button             |             |
            | offer card              | not visible |

        Examples:
            | description     | amount | concept  |
            | with concept    | 10     | donativo |

    @OWNT002
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario Outline: Validate - Transfer from dashboard to an own account <description>-<destinatary>
        Given a user with the following criteria
            | criteria              |
            | own account transfer  |
        And the user accesses to transfer from dashboard and selects a origin "<description>"
        And the user starts a transfer to a personal "<destinatary>" account
        When the user enter amount "<amount>" and concept "<concept>"
        And the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |

        Examples:
            | description    | destinatary | amount | concept  |
            | digital        | saving      |   1    | donativo |
            | debit own      | saving      |   5    | servicio |

    @OWNT003
    @vbank
    @MX @android @ios
    @web
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: Validate - Transfer from product detail from a credit card to an own debit account with concept
        Given a user with the following criteria
            | criteria              |
            | own account transfer  |
        And the user accesses to transfer from dashboard and selects a origin "account own"
        And the user starts a transfer to a personal "credit" account
        When the user enter amount "10" and concept "donativo"
        And the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |

    @OWNT004
    @vbank
    @MX @android @ios
    @web @vbank-modified
    @backend-smoke
    @backend(test)
    @alternate-scenarios-smoke
    @web-done @smokeTest
    Scenario: Continue and exit the process from dashboard
        Given a user with the following criteria
            | criteria              |
            | own account transfer  |
        And the user accesses to transfer from dashboard and selects a origin "more link"
        When the user closes the Transfer screen
        Then the user sees a modal with the following elements:
            | item          |
            | accept button |
            | cancel button |

    @OWNT005
    @vbank
    @MX @android @ios
    @web @vbank-modified
    @backend-smoke
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    Scenario: Dashboard link change source account
        Given a user with the following criteria
            | criteria              |
            | own account transfer  |
        And the user accesses to transfer from dashboard and selects a origin "account"
        And the user tap the change link in the origin section
        And the user starts a transfer to a personal "saving" account
        When the user enters the amount "20" and the concept "donation" to complete the transfer
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |

    @OWNT006
    @vbank
    @MX @android @ios
    @web @vbank-modified
    @backend-smoke
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    Scenario Outline:  Transfer from dashboard <description>-<destinatary>
        Given a user with the following criteria
            | criteria              |
            | own account transfer  |
        And the user accesses to transfer from dashboard and selects a origin "<description>"
        And the user starts a transfer to a personal "<destinatary>" account
        And the user enter amount "<amount>" and concept "<concept>"
        When the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |

        Examples:
            | description | destinatary | amount | concept  |
            | check       | credit      |   20   | donativo |
            | credit      | check       |   20   | donativo |
            | credit      | saving      |   20   | donativo |
            | digital     | check       |   20   | donativo |
            | digital     | credit      |   20   | donativo |

    @OWNT007
    @vbank
    @MX @android @ios
    @web @vbank-modified
    @backend(test)
    @backend-smoke
    @alternate-scenarios-smoke
    @web-done
    Scenario Outline: Transfer from account detail <description>-<destinatary>
        Given a user with the following criteria
            | criteria              |
            | own account transfer  |
        And the user accesses to transfer from account detail and selects a origin "<description>"
        And the user starts a transfer to a personal "<destinatary>" account
        And the user enter amount "<amount>" and concept "<concept>"
        When the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |

        Examples:
            | description | destinatary | amount | concept  |
            | saving      | credit      |   20   | donativo |
            | check       | credit      |   20   | donativo |
            | digital     | saving      |   20   | donativo |
            | digital     | check       |   20   | donativo |

    @OWNT008
    @vbank
    @MX @android @ios
    @web @vbank-modified
    @backend(test)
    @backend-smoke
    @alternate-scenarios-smoke
    @web-done
    Scenario: Validation of amounts
        Given a user with the following criteria
            | criteria              |
            | own account transfer  |
        And the user accesses to transfer from dashboard and selects a origin "digital"
        And the user starts a transfer to a personal "credit" account
        And the user enter amount "1000.00"
        When the user changes amount "1243.12"
        Then the user sees the following items in the screen
            | item                   |
            | amount title           |
            | amount deposited       |
            | delete option          |
            | tag in your account    |
            | continue button amount |

    @OWNT009
    @vbank
    @MX @android @ios
    @web @vbank-modified
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    Scenario Outline: Transfer from dashboard whit account express <description>-<destinatary>
        Given a user with the following criteria
            | criteria      |
            | own express   |
        And the user accesses to transfer from dashboard and selects a origin "<description>"
        And the user starts a transfer to a personal "<destinatary>" account
        And the user enter amount "<amount>" and concept "<concept>"
        When the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |

        Examples:
            | description | destinatary   | amount | concept  |
            | checks      | express       |   20   | donativo |
            | express     | checks        |   20   | donativo |
            | express     | savings       |   20   | donativo |
            | express     | other express |   20   | donativo |

    @OWNT010
    @vbank
    @MX @android @ios
    @web @vbank-modified
    @backend(test)
    @alternate-scenarios-smoke
    @web-done
    Scenario Outline: Transfer from account detail whit account express <description>-<destinatary>
        Given a user with the following criteria
            | criteria      |
            | own express   |
        And the user accesses to transfer from account detail and selects a origin "<description>"
        And the user starts a transfer to a personal "<destinatary>" account
        And the user enter amount "<amount>" and concept "<concept>"
        When the user completes the transfer process
        Then the user sees the following items in the screen
            | item                    |
            | operation data and hour |
            | transfered amount       |
            | origin account          |
            | destination account     |
            | concept                 |
            | operation type          |
            | operation number        |

        Examples:
            | description | destinatary   | amount | concept  |
            | checks      | express       |   20   | donativo |
            | express     | checks        |   20   | donativo |
            | express     | other express |   20   | donativo |

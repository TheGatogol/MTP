@instantCash
Feature: Instant Cash

    @IC002
    @MX
    @vbank @backend(test) @web
    @web-done
    @backend-smoke
    Scenario: Navigating to product selection step
        Given a user with the following criteria
            | criteria  |
            | accounts  |
            | efi offer |
        And the user navigates to instant cash screen
        When the user navigates to "product selection" step of instant cash
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | label accounts   |
            | information text |
            | single product   |

    @IC003
    @MX
    @vbank @backend(test) @web
    @web-done
    @backend-smoke
    Scenario: Navigating to terms and conditions step
        Given a user with the following criteria
            | criteria  |
            | accounts  |
            | efi offer |
        And the user navigates to instant cash screen
        And the user navigates to "product selection" step of instant cash
        When the user navigates to "terms and conditions" step of instant cash
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | terms checkbox            |
            | terms and conditions text |
            | continue button           |

    @IC004
    @MX
    @vbank @backend(test) @web
    @web-done
    @backend-smoke
    Scenario: Navigating to summary preview
        Given a user with the following criteria
            | criteria  |
            | accounts  |
            | efi offer |
        And the user navigates to instant cash screen
        And the user navigates to "product selection" step of instant cash
        And the user navigates to "terms and conditions" step of instant cash
        When the user navigates to "summary preview" step of instant cash
        Then the user sees the following items in the screen
            | item                       |
            | header                     |
            | withdrawal account         |
            | offer collapsed            |
            | product selector collapsed |
            | contract button            |

    @IC005
    @MX
    @vbank @backend(test) @web
    @web-done
    Scenario: Navigation trough hiring process until receipt
        Given a user with the following criteria
            | criteria  |
            | accounts  |
            | efi offer |
        And the user navigates to instant cash screen
        And the user navigates to "complete preview" step of instant cash
        When the user navigates to the successful screen of instant cash hiring
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | deposit amount     |
            | cat percentage     |
            | anual interest     |
            | comission          |
            | payment lapse      |
            | transaction number |
            | share button       |

    @IC006
    @MX
    @vbank @backend(test) @web
    @web-done
    @backend-smoke
    Scenario: Offer page simulation with invalid inputs
        Given a user with the following criteria
            | criteria    |
            | efi offer   |
            | credit card |
        And the user navigates to instant cash screen
        When the user modifies instant cash offer amount with "0"
        Then the user sees the following items in the screen
            | item                     |
            | header                   |
            | invalid amount status    |
            | invalid amount message   |
            | disabled continue button |

    @IC007
    @MX @smokeTest
    @vbank @backend(test)
    @web
    @web-done
    Scenario: Hiring instant cash offer with minimum possible values
        Given a user with the following criteria
            | criteria       |
            | efi offer      |
            | credit card    |
        And the user navigates to instant cash screen
        And the user modifies instant cash offer amount with "100"
        And the user navigates to "complete preview" step of instant cash
        When the user navigates to the successful screen of instant cash hiring
        Then the user sees the following items in the screen
            | item               | value   |
            | header             |         |
            | deposit amount     | $100.00 |
            | cat percentage     |         |
            | anual interest     |         |
            | comission          |         |
            | payment lapse      |         |
            | transaction number |         |
            | share button       |         |

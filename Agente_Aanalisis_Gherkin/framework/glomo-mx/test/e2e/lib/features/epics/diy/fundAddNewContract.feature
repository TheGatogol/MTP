@fundAddNewContract
Feature: Fund Add New Contract

    @FANC002
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user accepts the new fund offer
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        When the user goes to the "account" step
        Then the user sees the following items in the screen
            | element     |
            | title       |
            | description |
            | account     |

    @FANC003
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    Scenario: The user selects the account to link the contract
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        When the user goes to the "fund list" step
        Then the user sees the following items in the screen
            | element     |
            | title       |
            | description |
            | fund list   |

    @FANC004
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-245990
    Scenario: The user selects the first investment fund
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        When the user goes to the "amount" step
        Then the user sees the following items in the screen
            | element             |
            | title               |
            | description         |
            | subscription amount |

    @FANC005
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-245990
    Scenario: The user enters the amount to invest and continues
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        When the user goes to the "terms and conditions" step
        Then the user sees the following items in the screen
            | element       |
            | title         |
            | description   |
            | contract icon |
            | contract link |
            | check list    |

    @FANC006
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @backend-smoke
    @manual @JIRA.GLOMOMX-245990
    Scenario: The user reviews the summary of the investment
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        And the user accesses to the Funds add new contract screen
        When the user goes to the "summary" step
        Then the user sees the following items in the screen
            | element             |
            | title               |
            | contribution amount |

    @FANC007
    @MX
    @web
    @vbank
    @backend(test)
    @web-done
    @smokeTest
    @manual @JIRA.GLOMOMX-245990
    Scenario: The user successfully add a new fund contract
        Given a user with the following criteria
            | criteria         |
            | investment funds |
            | multiple funds   |
        When the user successfully add a new fund contract
        Then the user sees the following items in the screen
            | element                        |
            | receipt title                  |
            | status of the operation        |
            | date and hour of the operation |
            | exit button                    |
            | subscripted amount             |
            | disclaimer info                |
            | destination email              |

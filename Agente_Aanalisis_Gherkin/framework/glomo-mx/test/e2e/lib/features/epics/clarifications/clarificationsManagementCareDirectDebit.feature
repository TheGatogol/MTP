@ClarificationsCareManagement
Feature: Clarifications Management - On Direct Debit Movements

    @DEB001
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @smokeTest
    @timemachine
    Scenario: Get clarifications by unauthorized refund success
        Given a user with the following criteria
            | criteria                        |
            | has direct debit movement alt   |
        And the user starts the application at date:
            | hour  | 12                      |
        And the user accesses to account and selects a movement from "transaction" displacement
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "request refund" attention type
        When the user authorizes and confirms block of "direct debit" "refund"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | close button                    |
            | payment success                 |
            | clarification payment date      |
            | movement                        |
            | clarification payment reason    |
            | direct debit block text         |
            | info experience                 |
            | shared button                   |
            | exit button                     |
            | go to movements button          |

    @DEB002
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Get clarifications by unauthorized clarification success
        Given a user with the following criteria
            | criteria                        |
            | has direct debit movement alt   |
        And the user starts the application at date:
            | hour  | 12                      |
        And the user accesses to account and selects a movement from "transaction" displacement
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "direct debit" "clarification"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | close button                    |
            | clarification success text      |
            | clarification date              |
            | clarification amount            |
            | folio                           |
            | folio tooltip                   |
            | direct debit block text         |
            | info experience                 |
            | go to clarification button      |
            | exit button                     |

    @DEB003
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Get clarifications by unauthorized only clarification success
        Given a user with the following criteria
            | criteria                            |
            | has direct debit movement alt       |
        And the user starts the application at date:
            | hour  | 12                      |
        And the user accesses to account and selects a movement from "transaction" displacement
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "default clarification for direct debit" attention type
        When the user authorizes and confirms block of "direct debit" "clarification"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | close button                    |
            | clarification success text      |
            | clarification date              |
            | clarification amount            |
            | folio                           |
            | folio tooltip                   |
            | direct debit block text         |
            | info experience                 |
            | go to clarification button      |
            | exit button                     |

    @DEB004
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Get clarifications commerce problems modal
        Given a user with the following criteria
            | criteria                        |
            | has direct debit movement alt   |
        And the user starts the application at date:
            | hour  | 12                      |
        And the user accesses to account and selects a movement from "transaction" displacement
        When the user selects "commerce problem" option of clarifications payment
        Then the user sees a modal with the following elements:
            | item                            |
            | header                          |
            | close button                    |
            | hero image                      |
            | modal message                   |
            | call line button                |
            | go movement button              |

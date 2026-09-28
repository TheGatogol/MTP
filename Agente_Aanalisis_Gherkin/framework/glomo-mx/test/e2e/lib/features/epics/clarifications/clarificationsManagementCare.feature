@ClarificationsCareManagement
Feature: ClarificationsCareManagement

    @CCM001
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @smokeTest
    Scenario: Clarifications Success
        Given a user with the following criteria
            | criteria                  |
            | clarifications management |
            | clarification register    |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user confirms payment clarifications
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | clarification success icon                 |
            | clarification date                         |
            | clarification amount                       |
            | provisional payment                        |
            | provisional payment tooltip                |
            | folio                                      |
            | folio tooltip                              |
            | name card                                  |
            | number card                                |
            | movement                                   |
            | clarification reason                       |
            | bank                                       |
            | info box                                   |
            | resolution date                            |
            | shared button                              |
            | bank                                       |
            | go to clarification button                 |
            | exit button                                |

    @CCM002
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Payment Success
        Given a user with the following criteria
            | criteria                  |
            | clarifications management |
            | clarification register    |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "request refund" attention type
        When the user confirms payment refund
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | payment success                 |
            | clarification payment date      |
            | clarification payment amount    |
            | name card                       |
            | number card                     |
            | movement                        |
            | clarification payment reason    |
            | payment deadline                |
            | bank                            |
            | info box                        |
            | shared button                   |
            | exit button                     |

    @CCM003
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Step 1
        Given a user with the following criteria
            | criteria                  |
            | clarifications management |
            | clarification register    |
        When the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        Then the user sees the following items in the screen
            | item                              |
            | header                            |
            | movement                          |
            | claim amount                      |
            | claim date                        |
            | title step                        |
            | step description reporting reason |
            | unauthorized payment option       |
            | stolen card option                |
            | lost card option                  |
            | commerce problem option           |
            | info box geolocation              |
            | continue button                   |

    @CCM004
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Step 2
        Given a user with the following criteria
            | criteria                  |
            | clarifications management |
            | clarification register    |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        When the user selects "unauthorized payment" option of clarifications payment
        Then the user sees the following items in the screen
            | item                                  |
            | header                                |
            | step title                            |
            | step description attention type       |
            | clarification payment attention type  |
            | start clarifications attention type   |
            | continue button                       |

    @CCM005
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Summary info
        Given a user with the following criteria
            | criteria                  |
            | clarifications management |
            | clarification register    |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "unauthorized payment" option of clarifications payment
        When the user selects "request refund" attention type
        Then the user sees the following items in the screen
            | item              |
            | amount            |
            | summary title     |
            | continue button   |

    @CCM006
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Summary Clarifications Info
        Given a user with the following criteria
            | criteria                  |
            | clarifications management |
            | clarification register    |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "unauthorized payment" option of clarifications payment
        When the user selects "init clarification" attention type
        Then the user sees the following items in the screen
            | item                              |
            | amount                            |
            | summary title                     |
            | provisional payment tooltip info  |
            | continue button                   |

@ClarificationsCareManagement
Feature: Clarifications Management - On Settled Movements

    @CTLS001
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done @smokeTest
    Scenario: Clarifications Stolen Approved Card Refund Success
        Given a user with the following criteria
            | criteria                        |
            | has card blocking movement      |
        And the user accesses to "UNAM BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "request refund" attention type
        When the user authorizes and confirms block of "card" "refund"
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
            | shared button                   |
            | exit button                     |

    @CTLS002
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Approved Payment and Card Refund Success
        Given a user with the following criteria
            | criteria                                                |
            | has card and payment blocking movement for loss flow    |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "block payment card" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "request refund" attention type
        When the user authorizes and confirms block of "card and payment" "refund"
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
            | shared button                   |
            | exit button                     |

    @CTLS003
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Approved Card Clarification Success
        Given a user with the following criteria
            | criteria                     |
            | has card blocking movement   |
        And the user accesses to "UNAM BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | clarification success icon      |
            | clarification date              |
            | clarification amount            |
            | provisional payment             |
            | provisional payment tooltip     |
            | folio                           |
            | folio tooltip                   |
            | name card                       |
            | number card                     |
            | movement                        |
            | clarification reason            |
            | bank                            |
            | resolution date                 |
            | shared button                   |
            | bank                            |
            | go to clarification button      |
            | exit button                     |

    @CTLS004
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Approved Card Clarification Success Ticket
        Given a user with the following criteria
            | criteria                     |
            | has card blocking movement   |
        And the user accesses to "UNAM BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | clarification success icon      |
            | clarification date              |
            | clarification amount            |
            | provisional payment             |
            | provisional payment tooltip     |
            | folio                           |
            | folio tooltip                   |
            | name card                       |
            | number card                     |
            | movement                        |
            | clarification reason            |
            | bank                            |
            | resolution date                 |
            | shared button                   |
            | bank                            |
            | go to clarification button      |
            | exit button                     |

    @CTLS005
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Approved Payment and Card Clarification Success
        Given a user with the following criteria
            | criteria                                                |
            | has card and payment blocking movement for loss flow    |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "block payment card" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | clarification success icon  |
            | clarification date          |
            | clarification amount        |
            | provisional payment         |
            | folio                       |
            | folio tooltip               |
            | name card                   |
            | number card                 |
            | movement                    |
            | clarification reason        |
            | bank                        |
            | resolution date             |
            | shared button               |
            | bank                        |
            | go to clarification button  |
            | exit button                 |

    @CTLS006
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Approved Payment and Card Provisional Clarification Success
        Given a user with the following criteria
            | criteria                                                |
            | has card and payment blocking movement for stolen flow  |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "block payment card" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | provisional payment          |
            | provisional payment tooltip  |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS007
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Only Clarification Card Clarification Success
        Given a user with the following criteria
            | criteria                                    |
            | has only clarification as result movement   |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | clarification success icon  |
            | clarification date          |
            | clarification amount        |
            | provisional payment         |
            | provisional payment tooltip |
            | folio                       |
            | folio tooltip               |
            | name card                   |
            | number card                 |
            | movement                    |
            | clarification reason        |
            | bank                        |
            | resolution date             |
            | shared button               |
            | bank                        |
            | go to clarification button  |
            | exit button                 |

    @CTLS008
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Only Clarification Payment and Card Clarification Success
        Given a user with the following criteria
            | criteria                                    |
            | has only clarification as result movement   |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS009
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Only Clarification Payment and Card Provisional Clarification Success
        Given a user with the following criteria
            | criteria                                  |
            | has only clarification as result movement |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS010
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Against Chip and Nip Card Success
        Given a user with the following criteria
            | criteria                                  |
            | has only clarification as result movement |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS011
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarificartions Stolen Against Safe Commerce Card Success
        Given a user with the following criteria
            | criteria                                  |
            | has only clarification as result movement |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "card stolen" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS012
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Against 48 hours Card Success
        Given a user with the following criteria
            | criteria                        |
            | has against chip nip movement   |
        And the user accesses to "PLATINUM BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card stolen" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | provisional payment          |
            | folio                        |
            | name card                    |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | info box                     |
            | shared button                |
            | bank                         |
            | go to clarification button   |

    @CTLS013
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Stolen Against 48 hours Payment and Card Success
        Given a user with the following criteria
            | criteria                                  |
            | has only clarification as result movement |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "card stolen" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | clarification success icon    |
            | clarification date            |
            | clarification amount          |
            | provisional payment           |
            | name card                     |
            | movement                      |
            | clarification reason          |
            | bank                          |
            | resolution date               |
            | shared button                 |
            | bank                          |
            | go to clarification button    |

    @CTLS014
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Approved Card Refund Success
        Given a user with the following criteria
            | criteria                                           |
            | has card blocking movement for loss second flow    |
        And the user accesses to "UNAM BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card lost" option of clarifications payment
        And the user selects "request refund" attention type
        When the user authorizes and confirms block of "card" "refund"
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
            | shared button                   |
            | exit button                     |

    @CTLS015
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Approved Payment and Card Refund Success
        Given a user with the following criteria
            | criteria                                                |
            | has card and payment blocking movement for loss flow    |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "block payment card" movement
        And the user selects "card lost" option of clarifications payment
        And the user selects "request refund" attention type
        When the user authorizes and confirms block of "card and payment" "refund"
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
            | shared button                   |
            | exit button                     |

    @CTLS016
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Approved Card Clarification Success
        Given a user with the following criteria
            | criteria                                   |
            | has card blocking movement for loss flow   |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card lost" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | provisional payment          |
            | provisional payment tooltip  |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS017
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Approved Payment and Card Clarification Success Provisional
        Given a user with the following criteria
            | criteria                                                |
            | has card and payment blocking movement for stolen flow  |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "block payment card" movement
        And the user selects "card lost" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | provisional payment          |
            | provisional payment tooltip  |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS018
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Only Clarification Card Clarification Success
        Given a user with the following criteria
            | criteria                      |
            | has card blocking movement    |
        And the user accesses to "UNAM BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card lost" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS019
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Only Clarification Card Clarification Success Provisional
        Given a user with the following criteria
            | criteria                       |
            | has card blocking movement     |
        And the user accesses to "UNAM BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card lost" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | provisional payment          |
            | provisional payment tooltip  |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS020
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Only Clarification Payment and Card Clarification Success
        Given a user with the following criteria
            | criteria                                  |
            | has only clarification as result movement |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "card lost" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS021
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Only Clarification Payment and Card Provisional Clarification Success
        Given a user with the following criteria
            | criteria                                  |
            | has only clarification as result movement |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "card lost" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS022
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Against Chip and Nip Card Success
        Given a user with the following criteria
            | criteria                         |
            | has against chip nip movement    |
        And the user accesses to "PLATINUM BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card lost" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | clarification success icon    |
            | clarification date            |
            | clarification amount          |
            | provisional payment           |
            | folio                         |
            | name card                     |
            | movement                      |
            | clarification reason          |
            | bank                          |
            | info box                      |
            | shared button                 |
            | bank                          |
            | go to clarification button    |

    @CTLS023
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Against Safe Commerce Payment and Card Success
        Given a user with the following criteria
            | criteria                                  |
            | has only clarification as result movement |
        And the user accesses to "IPN BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "card lost" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | folio                        |
            | name card                    |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | shared button                |
            | bank                         |
            | go to clarification button   |

    @CTLS024
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Only Clarification Card Clarification Success 2
        Given a user with the following criteria
            | criteria                       |
            | has card blocking movement     |
        And the user accesses to "UNAM BBVA" "TARJETA DE CREDITO" card and selects "block card" movement
        And the user selects "card lost" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | clarification success icon   |
            | clarification date           |
            | clarification amount         |
            | provisional payment          |
            | provisional payment tooltip  |
            | folio                        |
            | folio tooltip                |
            | name card                    |
            | number card                  |
            | movement                     |
            | clarification reason         |
            | bank                         |
            | resolution date              |
            | shared button                |
            | bank                         |
            | go to clarification button   |
            | exit button                  |

    @CTLS025
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Against 48 hours Card Success
        Given a user with the following criteria
            | criteria                            |
            | has against safe trade movement     |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "block payment card" movement
        And the user selects "card lost" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | clarification success icon    |
            | clarification date            |
            | clarification amount          |
            | provisional payment           |
            | folio                         |
            | name card                     |
            | movement                      |
            | clarification reason          |
            | bank                          |
            | shared button                 |
            | bank                          |
            | go to clarification button    |

    @CTLS026
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarifications Lost Against 48 hours Payment and Card Success
        Given a user with the following criteria
            | criteria                                  |
            | has only clarification as result movement |
        And the user accesses to "AZUL BBVA" "TARJETA DE CREDITO" card and selects "request payment" movement
        And the user selects "card lost" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | clarification success icon    |
            | clarification date            |
            | clarification amount          |
            | provisional payment           |
            | name card                     |
            | movement                      |
            | clarification reason          |
            | bank                          |
            | resolution date               |
            | shared button                 |
            | bank                          |
            | go to clarification button    |

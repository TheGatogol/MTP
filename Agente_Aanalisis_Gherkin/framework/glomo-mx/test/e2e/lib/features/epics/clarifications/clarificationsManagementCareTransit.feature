@ClarificationsCareManagement
Feature: Clarifications Management - On Transit Movements

    @NACT001
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Refund Success unrecognized charge without blocks
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "DATO DE PRUEBA COM38.2.1" from all transit movements
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
            | shared button                   |
            | exit button                     |

    @NACT002
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Unauthorized Approved Payment Refund Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "CREA BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com39.1 -pendin" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "request refund" attention type
        When the user authorizes and confirms block of "payment" "refund"
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

    @NACT003
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Unauthorized Approved Card Refund Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "Dato de prueba com16.3.0 v3" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
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

    @NACT004
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Unauthorized Approved Payment and Card Refund Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "CREA BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com227.1-pendin" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
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

    @NACT005
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Refound Success unrecognized charge with digital card block
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "SOVRAN SELF STORAGE V3" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
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

    @NACT006
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Unauthorized Approved Payment and Digital Card Refund Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "CREA BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com227.1-pendin" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
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

    @NACT007
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Unauthorized Approved None Block Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "D prueba com16.3.0 - pendin" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user confirms payment clarifications
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

    @NACT008
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Unauthorized Approved Payment Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "CREA BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com39.1-copy" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "payment" "clarification"
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

    @NACT009
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Unauthorized Approved Card Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "Dato de prueba com16.3.0 v3" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
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

    @NACT010
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Unauthorized Approved  Payment and Card Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "CREA BBVA" "TARJETA DE CREDITO" card and selects "Clon e2e - rye - 10.4" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
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

    @NACT011
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarification Success unrecognized charge with digital card block
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "SOVRAN SELF STORAGE V2" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
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

    @NACT012
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Unauthorized Approved  Payment and Digital Card Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "CREA BBVA" "TARJETA DE CREDITO" card and selects "Clon e2e - rye - 10.3" from all transit movements
        And the user selects "unauthorized payment" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
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

    @NACT013
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Refound Success stolen card with card block
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "DATO DE PRUEBA COM211.2" from all transit movements
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

    @NACT014
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Stolen Approved Payment and Card Refund Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato prueb com31.1  -pendin" from all transit movements
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

    @NACT015
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Clarification Success stolen card with card block
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "Sovran self storage v4" from all transit movements
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

    @NACT016
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Stolen Approved Payment and Card Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "Dato de prueba com16.3.0 v3" from all transit movements
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

    @NACT017
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Stolen Only Clarification Card Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com32.1 -pendin" from all transit movements
        And the user selects "card stolen" option of clarifications payment
        And the user selects "default clarification" attention type
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

    @NACT018
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Stolen Approved Payment and Card Provisional Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com31.1 -pendin" from all transit movements
        And the user selects "card stolen" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
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

    @NACT019
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Stolen Against Cip and Nip Card Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com33.2 -pendin" from all transit movements
        And the user selects "card stolen" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | clarification success icon      |
            | clarification date              |
            | clarification amount            |
            | provisional payment             |
            | folio                           |
            | name card                       |
            | movement                        |
            | clarification reason            |
            | bank                            |
            | shared button                   |
            | bank                            |
            | go to clarification button      |

    @NACT020
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Stolen Against Safe Digital commerce Card Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com16.2- pendin" from all transit movements
        And the user selects "card stolen" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | clarification success icon      |
            | clarification date              |
            | clarification amount            |
            | provisional payment             |
            | folio                           |
            | movement                        |
            | clarification reason            |
            | bank                            |
            | shared button                   |
            | bank                            |
            | go to clarification button      |

    @NACT021
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Against Online 48hrs stolen card with card block
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "DATO DE PRUEBA COM38.2.1" from all transit movements
        When the user selects "card stolen" option of clarifications payment
        And the user accepts the modal
        And the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | clarification success icon                 |
            | clarification date                         |
            | clarification amount                       |
            | provisional payment                        |
            | folio                                      |
            | name card                                  |
            | movement                                   |
            | clarification reason                       |
            | bank                                       |
            | info box                                   |
            | shared button                              |
            | bank                                       |
            | go to clarification button                 |

    @NACT022
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    @smokeTest
    Scenario: Stolen Against 48hrs Payment and Card Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "Dato de prueba com31.3 v3" from all transit movements
        And the user selects "card stolen" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | clarification success icon                 |
            | clarification date                         |
            | clarification amount                       |
            | provisional payment                        |
            | folio                                      |
            | name card                                  |
            | movement                                   |
            | clarification reason                       |
            | bank                                       |
            | clarification info box payment             |
            | shared button                              |
            | bank                                       |
            | go to clarification button                 |

    @NACT023
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Approved Card Refund Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "TRANSIT E2E - 3" from all transit movements
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

    @NACT024
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Approved Payment and Card Refund Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com31.3 -pendin" from all transit movements
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

    @NACT025
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Approved Card Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "TRANSITO TEST E2E COM16.3.0" from all transit movements
        And the user selects "card lost" option of clarifications payment
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

    @NACT026
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Approved Card Provisional Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "TRANSIT E2E - 2" from all transit movements
        And the user selects "card lost" option of clarifications payment
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

    @NACT027
    @MX
    @web @ios @android
    @vbank @backend(test)
    @tmpExclude @JIRA.GLOMOMX-252143
    @smokeTest
    Scenario: Lost Approved Payment and Card Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato pruebacom31.3.1-pendin" from all transit movements
        And the user selects "card lost" option of clarifications payment
        When the user selects "init clarification" attention type
        And the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | clarification success icon                 |
            | clarification date                         |
            | clarification amount                       |
            | provisional payment                        |
            | folio                                      |
            | name card                                  |
            | movement                                   |
            | clarification reason                       |
            | bank                                       |
            | clarification info box payment             |
            | shared button                              |
            | bank                                       |
            | go to clarification button                 |

    @NACT028
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Approved Payment and Card Provisional Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com31.3-clon1" from all transit movements
        And the user selects "card lost" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | clarification success icon                 |
            | clarification date                         |
            | clarification amount                       |
            | provisional payment                        |
            | folio                                      |
            | name card                                  |
            | movement                                   |
            | clarification reason                       |
            | bank                                       |
            | clarification info box payment             |
            | shared button                              |
            | bank                                       |
            | go to clarification button                 |

    @NACT029
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Only Clarification Card Clarification Success
        Given a user with the following criteria
            | criteria                                  |
            | only clarification blocking card movement |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "Dato de prueba recurrencia" from all transit movements
        And the user selects "card lost" option of clarifications payment
        And the user selects "default clarification" attention type
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | clarification success icon                 |
            | clarification date                         |
            | clarification amount                       |
            | provisional payment                        |
            | folio                                      |
            | name card                                  |
            | movement                                   |
            | clarification reason                       |
            | bank                                       |
            | shared button                              |
            | bank                                       |
            | go to clarification button                 |

    @NACT030
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Only Clarification Payment and Card Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Clon transit e2e - 1.1" from all transit movements
        And the user selects "card lost" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
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

    @NACT031
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Only Clarification Payment and Card Provisional Clarification Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Clon transit e2e - 1.2" from all transit movements
        And the user selects "card lost" option of clarifications payment
        And the user selects "init clarification" attention type
        When the user authorizes and confirms block of "card and payment" "clarification"
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

    @NACT032
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Against Safe Digital commerce Card Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com33.2 -pendin" from all transit movements
        And the user selects "card lost" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | clarification success icon      |
            | clarification date              |
            | clarification amount            |
            | provisional payment             |
            | folio                           |
            | name card                       |
            | movement                        |
            | clarification reason            |
            | bank                            |
            | shared button                   |
            | bank                            |
            | go to clarification button      |

    @NACT033
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Against Chip and Nip Card Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato prueba com33.2 -pendin" from all transit movements
        And the user selects "card lost" option of clarifications payment
        And the user accepts the modal
        When the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | clarification success icon      |
            | clarification date              |
            | clarification amount            |
            | provisional payment             |
            | folio                           |
            | name card                       |
            | movement                        |
            | clarification reason            |
            | bank                            |
            | shared button                   |
            | bank                            |
            | go to clarification button      |

    @NACT034
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Against Online 48hrs lost card with card block
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "DATO DE PRUEBA COM38.2.1" from all transit movements
        When the user selects "card lost" option of clarifications payment
        And the user accepts the modal
        And the user authorizes and confirms block of "card" "clarification"
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | clarification success icon                 |
            | clarification date                         |
            | clarification amount                       |
            | provisional payment                        |
            | folio                                      |
            | name card                                  |
            | movement                                   |
            | clarification reason                       |
            | bank                                       |
            | info box                                   |
            | shared button                              |
            | bank                                       |
            | go to clarification button                 |

    @NACT035
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Against Safe Digital commerce Payment and Card Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "VIVE BBVA" "TARJETA DE CREDITO" card and selects "Dato de prueba com31.3 v4" from all transit movements
        When the user selects "card lost" option of clarifications payment
        And the user accepts the modal
        And the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | clarification success icon                 |
            | clarification date                         |
            | clarification amount                       |
            | provisional payment                        |
            | folio                                      |
            | name card                                  |
            | movement                                   |
            | clarification reason                       |
            | bank                                       |
            | clarification info box payment             |
            | shared button                              |
            | bank                                       |
            | go to clarification button                 |

    @NACT036
    @MX
    @web @ios @android
    @vbank @backend(test)
    @web-done
    Scenario: Lost Against 48hrs Payment and Card Success
        Given a user with the following criteria
            | criteria                        |
            | has only clarifications transit |
        And the user accesses to "ORO BBVA" "TARJETA DE CREDITO" card and selects "Dato de prueba com31.3 v4" from all transit movements
        When the user selects "card lost" option of clarifications payment
        And the user accepts the modal
        And the user authorizes and confirms block of "card and payment" "clarification"
        Then the user sees the following items in the screen
            | item                                       |
            | header                                     |
            | clarification success icon                 |
            | clarification date                         |
            | clarification amount                       |
            | provisional payment                        |
            | folio                                      |
            | name card                                  |
            | movement                                   |
            | clarification reason                       |
            | bank                                       |
            | clarification info box payment             |
            | shared button                              |
            | bank                                       |
            | go to clarification button                 |

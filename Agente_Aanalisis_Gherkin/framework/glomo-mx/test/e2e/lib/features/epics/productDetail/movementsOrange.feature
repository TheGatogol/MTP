@movementsOrange
Feature: Movements Orange

    @MV001
    @ios @android @web
    @MX @vbank @backend(test) @web-done
    @smokeTest
    Scenario: Access to movements - Credit
        Given a user with the following criteria
            | criteria                   |
            | tdc and tdd with movements |
        And the user accesses to the "mvf" "credit" card product detail
        And the user accesses to all movements
        When the user selects a "settled" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                              |
            | header amount value               |
            | header date movement              |
            | operation type title              |
            | operation type value              |
            | credit card transaction title     |
            | credit card transaction value     |
            | amount title                      |
            | amount value                      |
            | date operation title              |
            | date operation value              |
            | associated card title             |
            | associated card value             |

    @MV002
    @ios @android @web
    @MX @vbank @backend(test) @web-done
    @smokeTest
    Scenario: Access to movements - Debit
        Given a user with the following criteria
            | criteria                   |
            | tdc and tdd with movements |
        And the user accesses to the "mvf" "debit" card product detail
        When the user accesses the details of a movement from "transaction"
        Then the user sees the following items in the screen
            | item                          |
            | transaction import            |
            | operation date                |
            | movement type title           |
            | movement type value           |
            | movement description title    |
            | movement description value    |
            | movement amount title         |
            | movement amount value         |
            | movement date title           |
            | movement date value           |
            | movement effective date title |
            | movement effective date value |
            | associated account            |

    @MV003
    @ios @android @web
    @MX @vbank @backend(test) @web-done
    @smokeTest
    Scenario: Access for orange product detail - Credit
        Given a user with the following criteria
            | criteria                   |
            | tdc and tdd with movements |
        And the user accesses to the "less than 5 movements" "credit" card product detail
        When the user selects a "settled" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                              |
            | header amount value               |
            | header date movement              |
            | operation type title              |
            | operation type value              |
            | credit card transaction title     |
            | credit card transaction value     |
            | amount title                      |
            | amount value                      |
            | date operation title              |
            | date operation value              |
            | associated card title             |
            | associated card value             |

    @MV004
    @ios @android @web
    @MX @vbank @backend(test) @web-done
    @smokeTest
    Scenario: Access for orange product detail - Debit
        Given a user with the following criteria
            | criteria                   |
            | tdc and tdd with movements |
        And the user accesses to the "only 4 movements" "debit" card product detail
        When the user selects a "settled" movement in "debit" transaction
        Then the user sees the following items in the screen
            | item                          |
            | transaction import            |
            | operation date                |
            | movement type title           |
            | movement type value           |
            | movement description title    |
            | movement description value    |
            | movement amount title         |
            | movement amount value         |
            | movement date title           |
            | movement date value           |
            | movement effective date title |
            | movement effective date value |

    @MV005
    @ios @android @web
    @MX @vbank @backend(test) @web-done
    @smokeTest
    Scenario Outline: User without movements - <cardType>
        Given a user with the following criteria
            | criteria                      |
            | tdc and tdd without movements |
        When the user accesses to the "not movements" "<cardType>" card product detail
        Then the user sees the following items in the screen
            | item          | value      |
            | not movements | <cardType> |

        Examples:
            | cardType |
            | credit   |
            | debit    |

    @MV006
    @ios @android @web
    @MX @vbank @backend(test) @web-done
    Scenario Outline: Help modal message <cardType>
        Given a user with the following criteria
            | criteria                   |
            | tdc and tdd with movements |
        And the user accesses to the "mvf" "<cardType>" card product detail
        And the user accesses to all "<cardType>" movements
        When the user opens "<cardType>" help modal message
        Then the user sees the following items in the screen
            | item          | value      |
            | help message  | <cardType> |

        Examples:
            | cardType |
            | credit   |
            | debit    |

    @MV007
    @MX
    @web @ios @android
    @web-done @vbank
    Scenario Outline: Access to <cardType> card with less than 5 movements
        Given a user with the following criteria
            | criteria     |
            | transactions |
        When the user accesses to the "less than 5 movements" "<cardType>" card product detail
        Then the user does not see the following items in the screen
            | item                 |
            | all movements button |

        @backend(artichoke)
        Examples:
            | cardType |
            | credit   |
            | debit    |

    @MV008
    @MX
    @web @ios @android
    @manual @JIRA.GLOMOGL-26754
    @pendingReview
    @vbank
    Scenario Outline: Service access error - <cardType> card movements
        Given a user with the following criteria
            | criteria     |
            | transactions |
        When the user accesses to the "transaction error" "<cardType>" card product detail
        Then the user sees the following items in the screen
            | item                |
            | error message modal |

        @backend(artichoke)
        Examples:
            | cardType |
            | credit   |
            | debit    |

    @MV009
    @MX
    @web @ios @android
    @vbank
    @web-done
    Scenario Outline: Access to "<cardType>" card with in transit movements
        Given a user with the following criteria
            | criteria     |
            | transactions |
        And the user accesses to the "<cardStatus>" "<cardType>" card product detail
        And the user selects a "pending" movement in "<cardType>" transaction
        When the user opens pending movement info modal
        Then the user sees the following items in the screen
            | item             |
            | In transit modal |
        @backend(artichoke)
        Examples:
            | cardType | cardStatus                       |
            | debit    | operative with pending movements |
            | credit   | in transit                       |

    @MV0010
    @web @ios @android
    @web-done @vbank
    @MX
    @backend(test)
    Scenario: Access to movements to categories
        Given a user with the following criteria
            | criteria                |
            | titular card detail tdc |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects the categories
        Then the user sees the following items in the screen
            | item                             |
            | card image                       |
            | activate digital card debit card |
            | current movements categories     |
            | previous movements categories    |
            | last movements categories        |

    @MV0011
    @web @ios @android
    @web-done @vbank
    @MX
    @backend(test)
    Scenario: Access to movements to date
        Given a user with the following criteria
            | criteria                  |
            | titular card detail tdc   |
        When the user accesses to the "operative" "credit" card product detail
        Then the user sees the following items in the screen
            | item                             |
            | card image                       |
            | activate digital card debit card |
            | last movements                   |

    @MV0012
    @web @ios @android
    @web-done @vbank
    @MX
    @backend(test)
    Scenario: Access to movements to date additional card
        Given a user with the following criteria
            | criteria                              |
            | additional card detail tdc additional |
        When the user accesses to additional card detail from additional card off
        Then the user sees the following items in the screen
            | item             |
            | card image       |
            | digital purchase |
            | last movements   |

    @MV0013
    @web @ios @android
    @web-done @vbank
    @MX
    @backend(test)
    Scenario: Access to movements to categories additional card
        Given a user with the following criteria
            | criteria                              |
            | additional card detail tdc additional |
        And the user accesses to additional card detail from additional
        When the user selects the categories additional
        Then the user sees the following items in the screen
            | item                          |
            | card image                    |
            | digital purchase              |
            | current movements categories  |
            | previous movements categories |
            | last movements categories     |

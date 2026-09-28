@movementsEnrichmentList
Feature: Movements Enrichment List

    @MEL002
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Show help
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to all movements
        When the user opens "credit" help modal message
        Then the user sees the following items in the screen
            | item                       |
            | movement help modal        |
            | movement help header       |
            | movement help button close |

    @MEL003
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done @smokeTest
    Scenario: Validate when the credit card has no transactions
        Given a user with the following criteria
            | criteria                                  |
            | credit card without enrichments movements |
        When the user accesses to the "operative" "credit" card product detail
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | empty movements card    |
            | empty movements image   |
            | empty movements image   |
            | label without movements |

    @MEL004
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Payment transaction with points
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to all movements
        When the user selects a "i want label" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item                 |
            | header               |
            | link pay with points |
            | operation type title |

    @MEL005
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: Validate movement details <movement>
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "<movement type>" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | concept main panel |
            | date main panel    |
            | amount main panel  |

        Examples:
            | movement                                  | movement type             |
            | defear installment payment with promotion | uncategorized transaction |
            | purchase applied promotion                | purchase transaction      |
            | purchase interest-free installments       | purchase transaction      |

    @MEL006
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Error when not all movements can be seen
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        When the user accesses to the "operative" "credit" card product detail
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | error message modal |

    @MEL007
    @MX
    @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: Validate movement detail <purchase>
        Given a user with the following criteria
            | criteria                               |
            | credit card with enrichments movements |
        And the user accesses to the "operative" "credit" card product detail
        When the user selects a "<purchase type>" movement in "credit" transaction
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | concept main panel |
            | date main panel    |
            | amount main panel  |

        Examples:
            | purchase | purchase type     |
            | physical | physical purchase |
            | digital  | digital purchase  |

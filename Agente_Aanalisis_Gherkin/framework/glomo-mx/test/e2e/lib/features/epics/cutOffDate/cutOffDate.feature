@cutOffDate
Feature: Cut Off Date

    @COD001
    @ios @android @web @web-done
    @MX @vbank @backend(test)
    @smokeTest
    Scenario: Validate cut off date happy path
        Given a user with the following criteria
            | criteria            |
            | cut off date        |
            | change cut off date |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to cut off date operative
        When the user "changes" card cut off date operation
        Then the user sees the following items in the screen
            | item                               |
            | header success                     |
            | panel success                      |
            | email notification message success |

    @COD002
    @ios @android @web @web-done
    @MX @vbank @backend(test)
    @backend-smoke
    Scenario: Validate the modal for the change payment date options
        Given a user with the following criteria
            | criteria            |
            | cut off date        |
            | change cut off date |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to cut off date operative
        When the user "selects" a new date
        Then the user sees the following items in the screen
            | item                 |
            | header cut off date  |
            | header close button  |
            | current payment date |
            | date options         |
            | confirm button       |

    @COD003
    @ios @android @web @web-done
    @MX @vbank @backend(test)
    Scenario: Validate when the user has more than 7 dates available
        Given a user with the following criteria
            | criteria            |
            | cut off date        |
            | change cut off date |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to cut off date operative
        And the user "deploys" a new date
        When the user "signs" card cut off date operation
        Then the user sees the following items in the screen
            | item                               |
            | header success                     |
            | panel success                      |
            | email notification message success |

    @COD004
    @ios @android @web @web-done
    @MX @vbank @backend(test)
    @backend-smoke
    Scenario Outline: Validate <action> with a client <case>
        Given a user with the following criteria
            | criteria      |
            | cut off date  |
            | without email |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to cut off date operative
        When the user "<action>" in the "<modal_type>" modal
        Then the user accesses the "orange card detail" screen
        Examples:
            | action  | modal_type                 | case                                                    |
            | accepts | previous minimum payment   | has not made the minimum payment for the previous cycle |
            | closes  | previous minimum payment   | has not made the minimum payment for the previous cycle |
            | accepts | previous hours             | accesses 48 hours before the cut-off date               |
            | closes  | previous hours             | accesses 48 hours before the cut-off date               |
            | accepts | months prior               | accesses 6 months prior to the last edition             |
            | closes  | months prior               | accesses 6 months prior to the last edition             |
            | accepts | pending request            | has a pending request                                   |
            | closes  | pending request            | has a pending request                                   |
            | accepts | late payments              | has late payments                                       |
            | closes  | late payments              | has late payments                                       |
            | accepts | access restricted          | has restricted access to the functionality              |
            | closes  | access restricted          | has restricted access to the functionality              |
            | exits   | internal access restricted | has an internal restriction from the bank               |
            | closes  | internal access restricted | has an internal restriction from the bank               |

    @COD005
    @ios @android @web @web-done
    @MX @vbank @backend(test)
    @backend-smoke
    Scenario Outline: Validate when the user selects <action> with a selected date
        Given a user with the following criteria
            | criteria      |
            | cut off date  |
            | without email |
        And the user accesses to the "operative" "credit" card product detail
        And the user accesses to cut off date operative
        And the user "selects" a new date
        When the user "<action>" the cut off date operative
        Then the user sees the following items in the screen
            | item              |
            | <validation_item> |
        Examples:
            | action  | validation_item     |
            | accepts | header              |
            | exits   | header cut off date |
            | closes  | header cut off date |

    @COD006
    @ios @android @web @web-done
    @MX @vbank @backend(test)
    @backend-smoke
    Scenario Outline: Validate change payment date when the customer has <situation>
        Given a user with the following criteria
            | criteria     |
            | cut off date |
            | <criteria>   |
        When the user accesses to the "<card_status>" "credit" card product detail
        Then the user sees the following items in the screen
            | item                       | value   |
            | header                     |         |
            | pan number                 |         |
            | operatives toolbar buttons | <value> |
        Examples:
            | criteria                    | situation                                                                         | value   | card_status |
            | additional card             | an additional tdc                                                                 | visible | operative   |
            | without replacement request | a tdc blocked due to theft without a replacement request                          | hidden  | blocked     |
            | digital active              | a tdc blocked due to theft with replacement requested and an active digital tdc   | hidden  | blocked     |
            | digital inactive            | a tdc blocked due to theft with replacement requested and an inactive digital tdc | hidden  | blocked     |
            | credit card off             | a digital and physical tdc turned off                                             | visible | operative   |
            | digital credit card off     | a digital tdc turned off and a physical one turned on                             | visible | operative   |
            | digital credit card on      | a digital tdc turned on and a physical one turned off                             | visible | operative   |

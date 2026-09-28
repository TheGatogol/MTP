@fundListProductDetail @productDetail
Feature: Product Detail - Funds List

    @FLP001
    @MX
    @web @vbank
    @backend(test)
    @web-done @backend-smoke
    @smokeTest
    Scenario Outline: View the list of your funds <case>
        Given a user with the following criteria
            | criteria                    |
            | invest product detail funds |
        When the user accesses to fund product detail
        Then the user sees the following items in the screen
            | item                 |
            | <secondary_item>     |
            | <funds_result_item>  |

        Examples:
            | case            | secondary_item     | funds_result_item |
            | with_funds      | funds help tooltip | fund list         |
            | without_funds   | fund contract      | no funds message  |

    @FLP002
    @MX
    @web @vbank
    @backend(test)
    @web-done @backend-smoke
    Scenario: About funds help modal
        Given a user with the following criteria
            | criteria                    |
            | invest product detail funds |
        When the user accesses to fund product detail
        And the user wants to know about funds
        Then the user sees the following items in the screen
            | item                |
            | terms modal header  |
            | terms modal close   |
            | terms modal title   |
            | terms modal bullets |

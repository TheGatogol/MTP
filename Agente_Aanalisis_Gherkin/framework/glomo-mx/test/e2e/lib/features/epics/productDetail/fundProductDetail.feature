@fundProductDetail @productDetail
Feature: Product Detail - funds

    @FPD001
    @MX
    @web @vbank
    @backend(test)
    @web-done @backend-smoke
    @smokeTest
    Scenario: The user accesses to the fund contract detail
        Given a user with the following criteria
            | criteria                    |
            | invest product detail funds |
        When the user accesses to fund contract detail
        Then the user sees the following items in the screen
            | item               |
            | product name       |
            | contract number    |
            | investment account |

    @FPD002
    @MX
    @web @vbank
    @backend(test)
    @web-done @backend-smoke
    Scenario Outline: Copy fund detail information <case>
        Given a user with the following criteria
            | criteria                    |
            | invest product detail funds |
        When the user accesses to fund contract detail
        And the user copies its fund "<field_to_copy>"
        Then the user sees the following items in the screen
            | item                                  |
            | copy <field_to_copy> success toast    |

        Examples:
            | case                     | field_to_copy      |
            | copy_contract_number     | contract number    |
            | copy_investment_account  | investment account |

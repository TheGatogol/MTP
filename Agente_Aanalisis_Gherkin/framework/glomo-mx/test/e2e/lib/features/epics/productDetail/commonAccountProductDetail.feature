@commonAccountProductDetail
Feature: Common Account Product Detail

    @CAPD001
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario Outline: Access to the new detail product of the common account - User with "<account>"
        Given a user with the following criteria
            | criteria       |
            | common account |
            | <account>      |
            | account        |
        When the user accesses to the operative account product detail
        Then the user sees the following items in the screen
            | item                   | value   |
            | header                 |         |
            | account                |         |
            | amount                 |         |
            | view account data link |         |
            | carrousel              | <state> |
            | pockets card           |         |
            | operations module      |         |
            | last movements         |         |

        Examples:
            | account           | state       |
            | one account       | not visible |
            | multiple accounts |             |
    @CAPD002
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @smokeTest
    @backend-smoke
    Scenario: Access to the account data
        Given a user with the following criteria
            | criteria           |
            | common account     |
            | one account        |
            | account debit card |
        And the user accesses to the operative account product detail
        When the user accesses to view account data
        Then the user sees the following items in the screen
            | item               |
            | header detail      |
            | share icon         |
            | general title      |
            | product label      |
            | product name       |
            | account label      |
            | account content    |
            | account copy icon  |
            | clabe label        |
            | clabe content      |
            | clabe copy icon    |
            | swift label        |
            | swift content      |
            | swift copy icon    |
            | phone label        |
            | phone content      |
            | phone copy icon    |
            | participants title |
            | titular label      |
            | titular content    |
            | payment title      |
            | debit card label   |
            | debit card content |
            | debit copy icon    |

    @CAPD003
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @smokeTest
    @backend-smoke
    Scenario: Access to the new detail product of the common account - User with more than one account
        Given a user with the following criteria
            | criteria                         |
            | common account                   |
            | multiple accounts product detail |
            | all movements                    |
        And the user accesses to the operative account product detail
        When the user selects an account in the carrousel
        Then the user sees the following items in the screen
            | item              |
            | header            |
            | account info card |
            | carrousel         |
            | pockets card      |
            | operations module |
            | last movements    |

    @CAPD004
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario: Access to show more - Account has checks
        Given a user with the following criteria
            | criteria                         |
            | multiple accounts product detail |
            | all movements                    |
        And the user accesses to the operative account product detail
        When the user accesses to the view more operatives
        Then the user sees the following items in the screen
            | item                    |
            | transfer                |
            | refills and packages    |
            | statements              |
            | change payroll          |
            | codi                    |
            | international transfers |
            | edit alias              |

    @CAPD005
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario Outline: Access to show more - The user has an "<credit_card>"
        Given a user with the following criteria
            | criteria       |
            | common account |
            | <credit_card>  |
            | account        |
        And the user accesses to the a checking account product detail with "<account_type>"
        When the user accesses to the view more operatives
        Then the user sees the following items in the screen
            | item                    | value   |
            | credit card payment     | <state> |
            | transfer                |         |
            | refills and packages    |         |
            | statements              |         |
            | change payroll          |         |
            | international transfers |         |
            | codi                    |         |
            | edit alias              |         |

        Examples:
            | credit_card                  | account_type    | state       |
            | account without credit cards | no credit cards | not visible |
            | account with credit cards    | credit cards    |             |

    @CAPD006
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: The service fails to get the account information
        Given a user with the following criteria
            | criteria                         |
            | common account                   |
            | multiple accounts product detail |
        And the user accesses to the operative account product detail
        When the user retries to "account information" access "2" more times
        Then the user sees the following items in the screen
            | item                    |
            | account info error card |
            | account retry button    |
            | carrousel               |
            | pockets card            |
            | operations module       |

    @CAPD007
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: The service fails to get pockets information
        Given a user with the following criteria
            | criteria             |
            | account with pockets |
        And the user accesses to the operative account product detail
        When the user retries to "pockets" access "3" more times
        Then the user sees the following items in the screen
            | item                | value       |
            | header              |             |
            | account info card   |             |
            | pocket retry button | not visible |
            | operations module   |             |

    @CAPD008
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario Outline: Account with "<movements>"
        Given a user with the following criteria
            | criteria                         |
            | common account                   |
            | multiple accounts product detail |
            | all movements                    |
        When the user accesses to the a checking account product detail with "<movements>"
        Then the user sees the following items in the screen
            | item                     |
            | account info card        |
            | pockets card             |
            | operations module        |
            | see all movements button |

        Examples:
            | movements             |
            | more than 5 movements |

    @CAPD009
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario: See all movements
        Given a user with the following criteria
            | criteria                         |
            | common account                   |
            | multiple accounts product detail |
            | all movements                    |
        And the user accesses to the a checking account product detail with "more than 5 movements"
        When the user accesses to all his account movements
        Then the user sees the following items in the screen
            | item                            |
            | header all movements            |
            | info message all movements      |
            | transactions list all movements |

    @CAPD010
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @backend-smoke
    Scenario Outline: Visualize a movement from "<access>"
        Given a user with the following criteria
            | criteria                         |
            | common account                   |
            | multiple accounts product detail |
            | all movements                    |
        And the user accesses to the a checking account product detail with "<movements>"
        When the user accesses the details of a movement from "<access>"
        Then the user sees the following items in the screen
            | item                    |
            | header                  |
            | transaction description |
            | transaction import      |
            | operation date          |
            | transaction info        |

        Examples:
            | movements             | access         |
            | more than 5 movements | transaction    |
            | more than 5 movements | detail product |

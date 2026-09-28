@chatBotBalances
Feature: ChatBot - Balances

    @BFS002
    @MX
    @test @vbank
    @web-done @smokeTest
    @web @android @ios
    Scenario: The user consults his balance to Blue
        Given a user with the following criteria
            | criteria                       |
            | one account                    |
            | user with physical credit card |
            | user with positive amounts     |
        And the user access blue "with terms accepted"
        And the user write "¿Cuál es mi saldo?" in input text
        When the user views the balance of their products
        Then the user sees the following items in the screen
            | item                 |
            | expandables balances |

    @BFS003
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Validate the plus icon of the <product>
        Given a user with the following criteria
            | criteria                       |
            | one account                    |
            | user with physical credit card |
            | user with negative amounts     |
        And the user access blue "with terms accepted"
        And the user write "¿Cuál es mi saldo?" in input text
        When the user views the balance of "<product>"
        Then the user sees the following items in the screen
            | item                                      | value          |
            | expandable balance title                  | <product type> |
            | expandable total balance                  | <product type> |
            | expandable title icon                     | <product type> |
            | expandable product alias                  | <product type> |
            | expandable product balance                | <product type> |
            | expandable product last digits            | <product type> |
            | expandable product span available balance | <product type> |

        Examples:
            | product     | product type |
            | Accounts    | account      |
            | Credit Card | card         |

    @BFS004
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Validate the minus icon of the <product>
        Given a user with the following criteria
            | criteria                       |
            | one account                    |
            | user with physical credit card |
        And the user access blue "with terms accepted"
        And the user write "¿Cuál es mi saldo?" in input text
        When the user hides the balance of his "<product>"
        Then the user sees the following items in the screen
            | item                     | value          |
            | expandable balance title | <product type> |
            | expandable total balance | <product type> |
            | expandable title icon    | <product type> |

        Examples:
            | product     | product type |
            | Accounts    | account      |
            | Credit Card | card         |

    @BFS005
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Validate the status <status> of the <product>
        Given a user with the following criteria
            | criteria                          |
            | user with pending update account  |
            | user with restricted account      |
            | blocked account                   |
            | user with pending activation card |
            | user with overdue card            |
            | credit card blocked               |
        And the user access blue "with terms accepted"
        And the user write "¿Cuál es mi saldo?" in input text
        When the user views the balance of "<product>"
        Then the user sees the following items in the screen
            | item                                      | value          | status   | text        | icon        |
            | expandable balance title                  | <product type> |          |             |             |
            | expandable total balance                  | <product type> |          |             |             |
            | expandable title icon                     | <product type> |          |             |             |
            | expandable product alias                  | <product type> |          |             |             |
            | expandable product balance                | <product type> |          |             |             |
            | expandable product last digits            | <product type> |          |             |             |
            | expandable product span available balance | <product type> |          |             |             |
            | expandable product status                 | <product type> | <status> |             |             |
            | link                                      | <product type> | <status> | <link text> | <link icon> |

        Examples:
            | product     | status             | product type | link text       | link icon |
            | Accounts    | Pending update     | account      |                 |           |
            | Accounts    | Restricted         | account      |                 |           |
            | Accounts    | Blocked            | account      | Buscar sucursal | map       |
            | Credit Card | Pending activation | card         |                 |           |
            | Credit Card | Overdue            | card         |                 |           |
            | Credit Card | Blocked            | card         |                 |           |

    @BFS006
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Validate with two accounts: Active and Pending activation
        Given a user with the following criteria
            | criteria                         |
            | user with account in dollars     |
            | user with pending update account |
        And the user access blue "with terms accepted"
        And the user write "¿Cuál es mi saldo?" in input text
        When the user views the balance of "Accounts"
        Then the user sees the following items in the screen
            | item                                      | value   |
            | expandable balance title                  | account |
            | expandable total balance                  | account |
            | expandable title icon                     | account |
            | expandable product alias                  | account |
            | expandable product balance                | account |
            | expandable product last digits            | account |
            | expandable product span available balance | account |

    @BFS007
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Validate with three or more accounts Active, Pending activation and Blocked
        Given a user with the following criteria
            | criteria                         |
            | user with account in dollars     |
            | user with pending update account |
            | blocked account                  |
        And the user access blue "with terms accepted"
        And the user write "¿Cuál es mi saldo?" in input text
        When the user views the balance of "Accounts"
        Then the user sees the following items in the screen
            | item                                      | value   |
            | expandable balance title                  | account |
            | expandable total balance                  | account |
            | expandable title icon                     | account |
            | expandable product alias                  | account |
            | expandable product balance                | account |
            | expandable product last digits            | account |
            | expandable product span available balance | account |

    @BFS008
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Validate the status <status> of the credit cards
        Given a user with the following criteria
            | criteria                          |
            | user with pending activation card |
            | status off                        |
            | credit card blocked               |
        And the user access blue "with terms accepted"
        And the user write "¿Cuál es mi saldo?" in input text
        When the user views the balance of "Credit Card"
        Then the user sees the following items in the screen
            | item                                      | value | status   |
            | expandable balance title                  | card  |          |
            | expandable total balance                  | card  |          |
            | expandable title icon                     | card  |          |
            | expandable product alias                  | card  |          |
            | expandable product balance                | card  |          |
            | expandable product last digits            | card  |          |
            | expandable product span available balance | card  |          |
            | expandable product status                 | card  | <status> |

        Examples:
            | status             |
            | Pending activation |
            | Off                |

    @BFS009
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Validate the button <value> of Accounts and Credit Cards
        Given a user with the following criteria
            | criteria                |
            | user with some products |
        And the user access blue "with terms accepted"
        And the user write "¿Cuál es mi saldo?" in input text
        When the user adjusts the "<value>" option for his products
        Then the user sees the following items in the screen
            | item                 |
            | expandables balances |

        Examples:
            | value |
            | more  |
            | minus |

@ChatBotMovements
Feature: ChatBot - Movements

    @MOV001
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    @smokeTest
    Scenario Outline: Consult an <product> with a movement
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos" for chooses an "desambiguation <product>" from the answer
        When the user selects a "<product> with movements" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

        Examples:
            | product |
            | account |
            | card    |

    @MOV002
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Consult a <product> that has up to 5 movements
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos" for chooses an "desambiguation <product>" from the answer
        When the user selects a "<product> with five movements" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

        Examples:
            | product |
            | account |
            | card    |

    @MOV003
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Consult a <product> that has more than 5 movements
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos" for chooses an "desambiguation <product>" from the answer
        When the user selects a "<product> with movements" from among their products
        Then the user sees the following items in the screen
            | item                      | value  |
            | header                    |        |
            | movement concept          |        |
            | movement amount           |        |
            | movement status           |        |
            | chat form                 | enable |
            | suggestion button default |        |

        Examples:
            | product |
            | account |
            | card    |

    @MOV004
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Consult a <product> without movements
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos" for chooses an "desambiguation <product>" from the answer
        When the user selects a "<product> without movements" from among their products
        Then the user sees the following items in the screen
            | item             | value       |
            | header           |             |
            | movement concept | not visible |
            | movement amount  | not visible |
            | movement status  | not visible |
            | chat form        | enable      |

        Examples:
            | product |
            | account |
            | card    |

    @MOV005
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Movements outside of 90 days of a <product>
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos de julio" for chooses an "desambiguation <product>" from the answer
        When the user selects a "<product> with old movements" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

        Examples:
            | product |
            | account |
            | card    |

    @MOV006
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Movement in Cash Income Account
        Given a user with the following criteria
            | criteria                       |
            | user with movements            |
            | user with movement cash income |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos de retiro de efectivo de la fecha 17 de febrero de 2025" for chooses an "desambiguation account" from the answer
        When the user selects a "account cash income" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @MOV007
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: SPEI transfer movement in Account
        Given a user with the following criteria
            | criteria                |
            | user with movements     |
            | user with movement spei |
        And the user access blue "with terms accepted"
        When the user write "Quiero mis movimientos SPEI, de la fecha 20 de febrero de mi cuenta terminación 4132" in input text
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @MOV008
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Return movement in Account
        Given a user with the following criteria
            | criteria                     |
            | user with movements          |
            | account with refund movement |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos de devoluciones de la fecha 20 de febrero" for chooses an "desambiguation account" from the answer
        When the user selects a "account with return movement" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @MOV009
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Purchase movement in a TDC (physical / digital)
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos de compras, de la fecha 5 de enero 2025" for chooses an "desambiguation card" from the answer
        When the user selects a "card with purchases" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @MOV010
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Purchase movements in transit
        Given a user with the following criteria
            | criteria                              |
            | user with movements                   |
            | user with movements status in transit |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos en tránsito, de la fecha 21 de febrero de 2025" for chooses an "desambiguation card" from the answer
        When the user selects a "card with purchase in transit" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @MOV011
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Consult an account with payment or withdrawal movements at ATM
        Given a user with the following criteria
            | criteria                          |
            | user with movements               |
            | account with movements withdrawal |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos de compras" for chooses an "desambiguation account" from the answer
        When the user selects a "account with cardless withdrawal" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @MOV012
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Filter of movements from last month
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos del mes pasado" for chooses an "desambiguation account" from the answer
        When the user selects a "account with old movements" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @MOV013
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Filter movements of account by amount
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mis movimientos menores a 600 pesos" for chooses an "desambiguation account" from the answer
        When the user selects a "account with movements" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @MOV014
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Filter movements of account by exact amount
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero los movimientos de 500 pesos" for chooses an "desambiguation movements" from the answer
        When the user selects a "account with movements" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @MOV015
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Filter movements of account by range of date
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero los movimientos del 1 al 27 de febrero de 2025" for chooses an "desambiguation account" from the answer
        When the user selects a "account with movements" from among their products
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

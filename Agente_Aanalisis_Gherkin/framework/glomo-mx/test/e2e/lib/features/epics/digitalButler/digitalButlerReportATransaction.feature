@chatBotReportTransaction
Feature: ChatBot - Report Transaction

    @RMB001
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Consulting transactions that can be reported from <product> card
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        When the user requests "Quiero reportar un movimiento" for chooses an "desambiguation card" from the answer
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | close header button |
            | info header button  |
            | chat bot message    |

        Examples:
            | product |
            | debit   |
            | credit  |

    @RMB002
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    @smokeTest
    Scenario: Validate reporting a movement from blue
        Given a user with the following criteria
            | criteria            |
            | user with purchases |
        And the user access blue "with terms accepted"
        When the user requests "Quiero reportar un movimiento" for chooses an "desambiguation movements" from the answer
        Then the user sees the following items in the screen
            | item             |
            | movement concept |

    @RMB003
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Consulting transactions when there are more than 5 transactions
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user requests "Quiero reportar un movimiento" for chooses an "desambiguation movements" from the answer
        And the user selects a "credit card with movements" from among their products
        When the user selects the "default" suggestion
        Then the user sees the following items in the screen
            | item             |
            | header           |
            | movement concept |
            | movement amount  |
            | movement status  |

    @RMB004
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Validate when the user does not have transactions from credit card
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        And the user write "Quiero reportar un movimiento" in input text
        And the user write "Quiero ver mis últimos movimientos" in input text
        When the user write "0535" in input text
        Then the user sees the following items in the screen
            | item             | value  |
            | header           |        |
            | movement concept |        |
            | movement amount  |        |
            | movement status  |        |
            | chat form        | enable |

    @RMB005
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Validate when searching for a transaction that does not exist in credit card
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        When the user requests "Quiero reportar el movimiento de UBER del 12 de septiembre" for chooses an "desambiguation movements" from the answer
        Then the user sees the following items in the screen
            | item             |
            | chat bot message |
            | chips            |

    @RMB006
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Consult a transaction more than 90 day old
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        When the user write "Quiero reportar el movimiento de UBER del 12 de septiembre" in input text
        Then the user sees the following items in the screen
            | item             |
            | chat bot message |

    @RMB007
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Validate response when requesting clarification from blue
        Given a user with the following criteria
            | criteria            |
            | user with movements |
        And the user access blue "with terms accepted"
        When the user write "Me gustaría dar seguimiento a una aclaración" in input text
        Then the user sees the following items in the screen
            | item             |
            | chat bot message |

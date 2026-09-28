@redirectLinksBlueToGlomo
Feature: Redirect Links Blue to Glomo

    @BDB001
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    @smokeTest
    Scenario Outline: Consulting statement of <product>
        Given a user with the following criteria
            | criteria            |
            | user with statement |
        And the user access blue "with terms accepted"
        And the user requests "Quiero mi estado de cuenta" for chooses an "desambiguation statement" from the answer
        And the user requests "<messageText>" for chooses an "desambiguation <desambiguation>" from the answer
        And the user selects a "<product> statement" from among their products
        When the user selects "<product> statement" link
        Then the user sees the following items in the screen
            | item                                |
            | header                              |
            | <product validation>                |
            | last statement enquiry              |
            | last statement enquiry radio button |
            | continue button                     |

        Examples:
            | product     | product validation | messageText        | desambiguation |
            | account     | account            | cuentas            | accounts       |
            | credit card | card               | tarjeta de credito | cards          |

    @BDB002
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Turn off physical credit card
        Given a user with the following criteria
            | criteria                       |
            | user with physical credit card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero apagar mi tarjeta de credito física" for chooses an "desambiguation card" from the answer
        And the user selects a "credit card" from among their products
        When the user selects "card detail" link
        Then the user sees the following items in the screen
            | item               | value   |
            | header             |         |
            | switch off         | visible |
            | card alias         | enable  |
            | card image         |         |
            | operatives toolbar |         |

    @BDB003
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Turn off physical debit card
        Given a user with the following criteria
            | criteria                      |
            | user with physical debit card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero apagar mi tarjeta de debito física" for chooses an "desambiguation card" from the answer
        And the user selects a "credit card" from among their products
        When the user selects "card detail" link
        Then the user sees the following items in the screen
            | item               | value   |
            | header             |         |
            | switch off         | visible |
            | card alias         | enable  |
            | card image         |         |
            | operatives toolbar |         |

    @BDB004
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Manage turn off physical credit card
        Given a user with the following criteria
            | criteria                       |
            | user with physical credit card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero apagar mi tarjeta de credito física terminación 2708" for chooses an "desambiguation card" from the answer
        When the user selects "card detail" link
        Then the user sees the following items in the screen
            | item                       | value   |
            | header                     |         |
            | switch on                  | visible |
            | card alias                 | enable  |
            | card image                 |         |
            | operatives toolbar card on |         |

    @BDB005
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Turn on physical credit card
        Given a user with the following criteria
            | criteria                       |
            | user with physical credit card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero encender mi tarjeta de credito física" for chooses an "desambiguation card" from the answer
        And the user selects a "turn off credit card" from among their products
        When the user selects "card detail" link
        Then the user sees the following items in the screen
            | item                       | value   |
            | header                     |         |
            | switch on                  | visible |
            | card alias                 | enable  |
            | card image                 |         |
            | card image                 |         |
            | operatives toolbar card on |         |

    @BDB006
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Turn on physical debit card
        Given a user with the following criteria
            | criteria                      |
            | user with physical debit card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero encender mi tarjeta de debito física" for chooses an "desambiguation card" from the answer
        And the user selects a "turn off debit card" from among their products
        When the user selects "card detail" link
        Then the user sees the following items in the screen
            | item               | value   |
            | header             |         |
            | switch on          | visible |
            | card alias         | enable  |
            | card image         |         |
            | operatives toolbar |         |

    @BDB007
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Manage turn on physical credit card
        Given a user with the following criteria
            | criteria                       |
            | user with physical credit card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero encender mi tarjeta de credito física" for chooses an "desambiguation card" from the answer
        And the user selects a "credit card" from among their products
        When the user selects "card detail" link
        Then the user sees the following items in the screen
            | item               | value   |
            | header             |         |
            | switch off         | visible |
            | card alias         | enable  |
            | card image         |         |
            | operatives toolbar |         |

    @BDB008
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Permanently block <product> card
        Given a user with the following criteria
            | criteria                          |
            | user with physical <product> card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero bloquear permanentemente mi tarjeta de <message>" for chooses an "desambiguation card" from the answer
        And the user selects a "blocked <product> card" from among their products
        When the user selects "block and replacement" link
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | block and replacement title    |
            | block and replacement subtitle |
            | block and replacement image    |
            | blocking reason title          |

        Examples:
            | product | message |
            | credit  | credito |
            | debit   | debito  |

    @BDB009
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Turn on card blocked by the bank
        Given a user with the following criteria
            | criteria            |
            | credit card blocked |
        And the user access blue "with terms accepted"
        And the user write "Quiero encender mi tarjeta de credito terminación 9455" in input text
        When the user selects "call advisor" link
        Then the user sees the following items in the screen
            | item      | text                | icon      | value  |
            | header    |                     |           |        |
            | link      | Llamar a linea BBVA | telephone |        |
            | chat form |                     |           | enable |

    @BDB010
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Trying turn on card blocked by user
        Given a user with the following criteria
            | criteria            |
            | credit card blocked |
        And the user access blue "with terms accepted"
        When the user write "Quiero encender mi tarjeta de credito terminación 9455" in input text
        Then the user sees the following items in the screen
            | item                    | value                                   |
            | header                  |                                         |
            | chat bot custom message | está actualmente bloqueada y no apagada |
            | chat form               | enable                                  |

    @BDB011
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: The user activates his <product> card
        Given a user with the following criteria
            | criteria                          |
            | user with physical <product> card |
            | user with pending activation card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero activar mi tarjeta de <message>" for chooses an "desambiguation card" from the answer
        And the user selects a "inactive <product> card" from among their products
        When the user selects "card detail activation" link
        Then the user sees the following items in the screen
            | item            | value  |
            | header          |        |
            | card alias      | enable |
            | inactive status |        |

        Examples:
            | product | message |
            | credit  | credito |
            | debit   | debito  |

    @BDB012
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: consult view nip QR debit card
        Given a user with the following criteria
            | criteria                      |
            | user with physical debit card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero consultar mi NIP de mi tarjeta de debito" for chooses an "desambiguation card" from the answer
        And the user selects a "debit card" from among their products
        When the user selects "view nip QR" link
        Then the user sees the following items in the screen
            | item        |
            | header      |
            | icon card   |
            | scan button |

    @BDB013
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Consult view nip cvv credit card
        Given a user with the following criteria
            | criteria                       |
            | user with physical credit card |
        And the user access blue "with terms accepted"
        And the user requests "Quiero consultar mi NIP de mi tarjeta de credito" for chooses an "desambiguation cards" from the answer
        And the user selects a "credit card" from among their products
        When the user selects "view nip CVV" link
        Then the user sees the following items in the screen
            | item            |
            | header text     |
            | box message     |
            | label input cvv |

    @BDB014
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Make a transfer with <products>
        Given a user with the following criteria
            | criteria                       |
            | user with physical credit card |
            | user with physical debit card  |
        And the user access blue "with terms accepted"
        And the user write "Quiero hacer una transferencia" in input text
        When the user selects "transfer" link
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | header exit button |
            | <item1>            |
            | <item2>            |

        Examples:
            | products      | item1              | item2                          |
            | many accounts | accounts and cards | view more accounts             |
            | one account   | single product     | single product continue button |

    @BDB015
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Make a cardless withdrawal with <products>
        Given a user with the following criteria
            | criteria                       |
            | user with physical credit card |
            | user with physical debit card  |
        And the user access blue "with terms accepted"
        And the user write "Quiero hacer un retiro sin tarjeta" in input text
        And the user selects "cardless withdrawal" link
        When the user close modal
        Then the user sees the following items in the screen
            | item    |
            | header  |
            | <item1> |
            | <item2> |

        Examples:
            | products      | item1          | item2              |
            | many accounts | account origin | view more accounts |
            | one account   | single product | withdrawal import  |

    @BDB016
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario Outline: Send money to an account through the <type> page
        Given a user with the following criteria
            | criteria    |
            | one account |
        And the user access blue "with terms accepted"
        And the user write "<message>" in input text for send money by "<send money type>"
        When the user selects "<send money type>" link
        Then the user sees the following items in the screen
            | item               |
            | header             |
            | origin header      |
            | accounts and cards |

        Examples:
            | type                          | message                                | send money type |
            | DIMO                          | Quiero enviar dinero por DIMO          | DIMO            |
            | priority by DIMO              | Quiero enviar dinero por DIMO          | DIMO            |
            | normal transfer               | Quiero enviar dinero por transferencia | transfer        |
            | DIMO with desambiguation Blue | Quiero enviar dinero                   | DIMO            |

    @BDB017
    @MX
    @test @vbank
    @web-done
    @web @android @ios
    Scenario: Make Call advisor
        Given a user with the following criteria
            | criteria    |
            | one account |
        And the user access blue "with terms accepted"
        And the user write "Quiero llamar a un asesor" in input text
        When the user write "Quiero llamar a un asesor" in input text
        Then the user sees the following items in the screen
            | item         | text                | icon      |
            | header       |                     |           |
            | user message |                     |           |
            | link         | Llamar a línea BBVA | telephone |

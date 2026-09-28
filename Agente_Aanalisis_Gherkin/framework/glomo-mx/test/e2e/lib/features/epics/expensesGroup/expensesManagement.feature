@expensesGroup @expensesManagement
Feature: Expenses Management

    @EXM001
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done @smokeTest
    Scenario:  Associate an expense with success
        Given a user with the following criteria
            | criteria                  |
            | expenses group validation |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje T"
        And the user associates an expense
        Then the user sees the following items in the screen
            | item                               |
            | receipt associate expense          |
            | section expense information        |
            | section expense configuration      |
            | exit button associate              |

    @EXM002
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: The customer <case>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "<option>"
        And the user selects a card to "<value>"
        Then the user sees the following items in the screen
            | item                     |
            | section product          |
            | button edit product      |
            | number step              |
            | last movements           |
            | show all movements       |
        Examples:
            | user                      | case                                                  | value        | option  |
            | associate expenses group  | view all cards                                        | show all     | Grupo D |
            | expenses group validation | only has two cards the view all link is not displayed | not show all | Viaje D |
            | expenses only one card    | view one card                                         | continue     | Grupo 1 |

    @EXM003
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: The customer <case>
        Given a user with the following criteria
            | criteria |
            | <user>   |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "<option>"
        And the user selects an account to "<value>"
        Then the user sees the following items in the screen
            | item                     |
            | section product          |
            | button edit product      |
            | number step              |
            | text select an expense   |
        Examples:
            | user                      | case                                                     | value        | option       |
            | debt expenses group       | view all accounts                                        | show all     | Viaje Italia |
            | associate expenses group  | only has two accounts the view all link is not displayed | not show all | Grupo D      |

    @EXM004
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Account without movement
        Given a user with the following criteria
            | criteria       |
            | expenses cards |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje C"
        And the account has no movements
        Then the user sees the following items in the screen
            | item                     |
            | section product          |
            | button edit product      |
            | number step              |
            | without movements        |
            | text without movements   |

    @EXM005
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Account without movement from the "See more" button
        Given a user with the following criteria
            | criteria       |
            | expenses cards |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje C"
        And the user selects link to show all movements
        Then the user sees the following items in the screen
            | item                     |
            | header last movements    |
            | last movements in modal  |
            | close last movements     |

    @EXM006
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Modifying expense information
        Given a user with the following criteria
            | criteria                  |
            | expenses group validation |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje T"
        And the user modifies the concept from associate expenses
        Then the user sees the following items in the screen
            | item                            |
            | section information             |
            | button edit information         |
            | section configuration           |
            | edit payer                      |
            | division expense                |
            | button continue to associate    |

    @EXM007
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Expense settings unchanged
        Given a user with the following criteria
            | criteria                  |
            | expenses group validation |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje T"
        And the user spends settings do not change
        Then the user sees the following items in the screen
            | item                        |
            | editpayers text list payers |
            | visible checkbox            |
            | total division expense      |
            | button save division        |

    @EXM008
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Custom expense settings
        Given a user with the following criteria
            | criteria                  |
            | expenses group validation |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje T"
        And the user makes custom expense settings
        Then the user sees the following items in the screen
            | item                            |
            | section configuration           |
            | text configuration step         |
            | edit payer                      |
            | division expense                |
            | button continue to associate    |

    @EXM009
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Division of expenses equally without changes
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje B"
        And the user divides the expenses equally without changes
        Then the user sees the following items in the screen
            | item                            |
            | text division expense           |
            | division expense checkbox       |
            | input amount expense division   |
            | button close expense division   |
            | total expense division          |
            | button division save            |

    @EXM010
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Splitting expenses by changing an amount for a user
        Given a user with the following criteria
            | criteria                  |
            | expenses group validation |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje T"
        And the user divides the expense by modifying an amount to a user
        Then the user sees the following items in the screen
            | item                            |
            | section configuration           |
            | text configuration step         |
            | edit payer                      |
            | division expense                |
            | division expense personalized   |
            | button continue to associate    |

    @EXM011
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Custom expense division
        Given a user with the following criteria
            | criteria                  |
            | associate expenses group  |
            | accounts                  |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "mark as paid only one"
        And the user splits custom expenses
        Then the user sees the following items in the screen
            | item                            |
            | text division expense           |
            | button restore parts            |
            | division expense checkbox       |
            | input amount expense division   |
            | button close expense division   |
            | button division save            |

    @EXM012
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Editing Expense Information
        Given a user with the following criteria
            | criteria                  |
            | associate expenses group  |
            | accounts                  |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "mark as paid only one"
        And the user edits Expense Information
        Then the user sees the following items in the screen
            | item                              |
            | section product                   |
            | button edit product               |
            | section movements                 |
            | button edit movements             |
            | section information               |
            | button edit information           |
            | section configuration             |
            | button edit configuration         |
            | button associate                  |

    @EXM013
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Editing custom expense information
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje B"
        And the user changes the expense information when the expense is customized
        Then the user sees the following items in the screen
            | item                          | value    |
            | editpayers text list payers   |          |
            | visible checkbox unchecked    | disabled |
            | total division expense        |          |
            | button save division          |          |

    @EXM014
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done @smokeTest
    Scenario: Associate a cash expense
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "Viaje B"
        And the user adds the cash expense
        Then the user sees the following items in the screen
            | item                               | value       |
            | header                             |             |
            | expenses associate payment         |             |
            | expenses add cash expense          |             |
            | expenses delete expense or payment |             |
            | spending movement                  | Nuevo Gasto |

    @EXM015
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Set up paid by spending
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "Viaje B"
        And the user edit the paid by
        Then the user sees the following items in the screen
            | item                               |
            | editpayers heading                 |
            | editpayers close                   |
            | editpayers text list payers        |
            | editpayers edit expense            |

    @EXM016
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: The user <case>
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "<option>"
        And the user edits the expense information "<value>"
        Then the user sees the following items in the screen
            | item                                 |
            | header                               |
            | information expense amount           |
            | information expense concept          |
            | information expense continue button  |
            | information expense date             |
        Examples:
            | case                        | option                | value                 |
            | changes expense information | Viaje B               |                       |
            | configures expense splits   | mark as paid only one | from expense settings |

    @EXM017
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: Payment details with <case>
        Given a user with the following criteria
            | criteria                |
            | with expense management |
            | accounts                |
        When the user accesses the expenses group "list"
        And the user enters the "mark as paid only one" group
        And the user access the details of the "<expense>" expense "<option>"
        Then the user sees the following items in the screen
            | item                           | value   |
            | header                         |         |
            | edit expense detail expense    |         |
            | delete expense detail expense  |         |
            | button return detail expense   |         |
            | button see more detail expense | <value> |
        Examples:
            | case                                     | expense                                | value    | option                 |
            | less than 5 payments                     | Menos 5 movimientos                    | disabled |                        |
            | more than 5 payments                     | Mas 5 movimientos                      | enabled  | and show more expenses |
            | custom payments                          | Gasto personalizado usuario            | enabled  |                        |
            | equal shares without participating       | Partes iguales sin participar          | enabled  |                        |
            | custom distribution                      | Gasto personalizado repartido          | disabled |                        |
            | two participant                          | 2 participantes                        | disabled |                        |
            | multiple participants                    | Multiples                              | enabled  | and show more expenses |
            | three participants personalized          | 3 iguales sin participar personalizado | disabled |                        |
            | three participants without participating | 3 iguales participantes                | disabled |                        |

    @EXM018
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: Detail of an expense when <case>
        Given a user with the following criteria
            | criteria                |
            | with expense management |
            | accounts                |
        When the user accesses the expenses group "list"
        And the user enters the "<group>" group
        And the user access the details of the "<expense>" expense ""
        Then the user sees the following items in the screen
            | item                                            |
            | header                                          |
            | message participant has come out detail expense |
            | message notification detail expense             |
            | button return detail expense                    |
        Examples:
            | case                                                                   | group     | expense              |
            | the participant leaves the group                                       | Viaje C   | MARIA JESUS me pagó  |
            | the paying participant is not in the group                             | Viaje C   | Boletos              |
            | two paid participants left the group                                   | GRUPO ABB | Vela                 |
            | two participants have left the group                                   | GRUPO ABB | LUIS ENRIQUE me pagó |
            | more than two participants have left the group                         | GRUPO ABB | MARIA JESUS me pagó  |
            | two participants have left the group and the user does not participate | GRUPO ABB | Pastel               |

    @EXM019
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: Edit an <case> field of expense information
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "mark as paid only one"
        And the user modifies the "<case>" from expense detail
        Then the user sees the following items in the screen
            | item                           |
            | header                         |
            | edit expense detail expense    |
            | delete expense detail expense  |
            | button return detail expense   |
            | button see more detail expense |
        Examples:
            | case    |
            | amount  |
            | concept |

    @EXM020
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: The customer <case> or debit payment from the detail
        Given a user with the following criteria
            | criteria                |
            | with expense groups     |
            | accounts                |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "mark as paid only one"
        And the user "<option>" delete the expense
        Then the user sees the following items in the screen
            | item                               |
            | header                             |
            | expenses associate payment         |
            | expenses add cash expense          |
            | expenses delete expense or payment |
            | expenses more operatives button    |
        Examples:
            | case               | option   |
            | cancels an expense | confirms |
            | deletes an expense | cancels  |

    @EXM021
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario Outline: The customer <case>
        Given a user with the following criteria
            | criteria |
            | <user>   |
            | accounts |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "<option>"
        And the user enters the "delete expense or payment" action from "expenses" section
        And the user confirms delete a movement from the group detail
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | expenses associate payment      |
            | expenses add cash expense       |
            | <item1>                         |
            | expenses more operatives button |
        Examples:
            | case                                                                     | user                    | option                | item1                              |
            | deletes an expense from the expense group detail                         | with expense groups     | mark as paid only one | expenses delete expense or payment |
            | exit sthe delete expenses or payments screen without having any movement | with expense management | Grupo sin gastos      | message without movements          |

    @EXM022
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Cancel deleting an expense from the expense group detail
        Given a user with the following criteria
            | criteria                |
            | with expense groups     |
            | accounts                |
        When the user accesses the expenses group "list"
        And the user enters the "add cash spend" action from "expenses" section of group "mark as paid only one"
        And the user enters the "delete expense or payment" action from "expenses" section
        And the user cancels delete a movement from the group detail
        Then the user sees the following items in the screen
            | item                               | value                  |
            | header                             |                        |
            | button close delete expense modal  |                        |
            | spending movement delete           | Nuevo Gasto a Cancelar |

    @EXM023
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Change expense information modal
        Given a user with the following criteria
            | criteria                 |
            | associate expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Prueba"
        And the user changes expense information
        Then the user sees the following items in the screen
            | item                              |
            | section product                   |
            | button edit product               |
            | section movements                 |
            | button edit movements             |
            | section information               |
            | button edit information           |
            | section configuration             |
            | button edit configuration         |
            | button continue to associate      |

    @EXM024
    @MX @vbank
    @backend(test)
    @web @android @ios
    @web-done
    Scenario: Change expense configuration
        Given a user with the following criteria
            | criteria                  |
            | expenses group validation |
        When the user accesses the expenses group "list"
        And the user enters the "associate payment" action from "expenses" section of group "Viaje T"
        And the user changes expense information and multistep
        Then the user sees the following items in the screen
            | item                              |
            | section configuration             |
            | text configuration step           |
            | edit payer                        |
            | division expense                  |
            | button continue to associate      |

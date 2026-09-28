@expensesGroup
Feature: Expenses Group

    @EGR001
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: User <case>
        Given a user with the following criteria
            | criteria |
            | <user>   |
            | accounts |
        When the user accesses the expenses group "list"
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | back                |
            | items group         |
            | button create group |
        Examples:
            | case                      | user                |
            | with more than one group  | with expense groups |
            | with one group            | with expense group  |
            | accept term and condition | with expense groups |

    @EGR002
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Exit the help screen
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "page"
        And the user exits the groups help screen
        Then the user sees the following items in the screen
            | item                               |
            | header                             |
            | link help                          |
            | link terms and conditions          |
            | check terms and conditions         |
            | button accept terms and conditions |

    @EGR003
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    @smokeTest
    Scenario: Exit the groups screen
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user accesses to dashboard
        Then the user sees the following items in the screen
            | item                  |
            | Banner Image futura   |
            | Banner Text futura    |
            | Banner Link futura    |

    @EGR004
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Create group and add new participant
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user creates group and add new participant
        Then the user sees the following items in the screen
            | item                      |
            | header                    |
            | button edit participant   |
            | button delete participant |
            | element participant       |
            | button continue           |

    @EGR005
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Change the name of the group <case> for <acceses>
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "change name more button" action from "<acceses>" section of group "<group>"
        And the user changes the group name to "<group>"
        Then the user sees the following items in the screen
            | item    |
            | header  |
            | <item1> |
            | <item2> |
            | <item3> |
            | <item4> |
        Examples:
            | case                      | acceses      | group        | item1                               | item2                                | item3                                 | item4                               |
            | no added expenses         | expenses     | Cumpleaños A | expenses associate payment          | expenses add cash expense            | expenses delete expense or payment    | expenses more operatives button     |
            | debt-free participants    | participants | payments     | button participants                 | participants add participant button  | participants share debt status button | participants more operatives button |
            | participants owe the user | participants | Me deben     | button participants                 | participants add participant button  | participants share debt status button | participants more operatives button |

    @EGR006
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: The user <case> the name change screen.
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "change name more button" action from "<access>" section of group "Me deben"
        And the user "<case>" the change name screen
        Then the user sees the following items in the screen
            | item    |
            | header  |
            | <item1> |
            | <item2> |
            | <item3> |
            | <item4> |
        Examples:
            | access       | case     | item1                               | item2                                 | item3                               | item4                           |
            | participants | exits    | participants add participant button | participants share debt status button | participants add participant button | participants section            |
            | participants | no exits | change name group title             | change name group input name          | change name group save button       | change name group close link    |

    @EGR007
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: User <case> group from <acceses>
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "delete group more button" action from "<acceses>" section of group "<group>"
        And the user <case> group
        Then the user sees the following items in the screen
            | item    |
            | header  |
            | <item1> |
            | <item2> |
            | <item3> |
        Examples:
            | acceses      | group    | case       | item1                               | item2                                 | item3                               |
            | expenses     | Grupo A  | deletes    | back                                | items group                           | button create group                 |
            | participants | Grupo AA | deletes    | back                                | items group                           | button create group                 |
            | participants | Viaje T  | no deletes | participants add participant button | participants share debt status button | participants add participant button |

    @EGR008
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Adds participant
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add participants" action from "expenses" section of group "payments"
        And the user adds participant
        Then the user sees the following items in the screen
            | item                               |
            | header                             |
            | expenses associate payment         |
            | expenses add cash expense          |
            | expenses delete expense or payment |
            | expenses more operatives button    |

    @EGR009
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: User <case> screen the adds participant
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "add participants" action from "expenses" section of group "payments"
        And the user "<case>" the adds participant screen
        Then the user sees the following items in the screen
            | item    |
            | header  |
            | <item1> |
            | <item2> |
            | <item3> |
            | <item4> |
        Examples:
            | case     | item1                       | item2                       | item3                              | item4                           |
            | exits    | expenses associate payment  | expenses add cash expense   | expenses delete expense or payment | expenses more operatives button |
            | no exits | edit information close link | edit information input name | edit information input number      | edit information save button    |

    @EGR010
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Delete <case> participants from <access> <expenses>
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "<button>" action from "<access>" section of group "<group>"
        And the user deletes "<case>" participants
        Then the user sees the following items in the screen
            | item    |
            | header  |
            | <item1> |
            | <item2> |
            | <item3> |
            | <item4> |
        Examples:
            | access       | case | item1                               | item2                                 | item3                               | item4                           | group   | expenses         | button                                          |
            | expenses     | 1    | expenses associate payment          | expenses add cash expense             | expenses delete expense or payment  | expenses more operatives button | Grupo A | with expenses    | delete participant more button                  |
            | expenses     | 2    | expenses associate payment          | expenses add cash expense             | expenses delete expense or payment  | expenses more operatives button | Grupo A | with expenses    | delete participant more button                  |
            | expenses     | all  | expenses associate payment          | expenses add cash expense             | expenses delete expense or payment  | expenses more operatives button | Grupo A | with expenses    | delete participant more button                  |
            | expenses     | all  | expenses associate payment          | expenses add cash expense             | expenses delete expense or payment  | expenses more operatives button | Grupo E | without expenses | delete participant button direct                |
            | participants | 1    | participants add participant button | participants share debt status button | participants add participant button | participants section            | Grupo O | with expenses    | delete participant more button                  |
            | participants | 2    | participants add participant button | participants share debt status button | participants add participant button | participants section            | Grupo O | with expenses    | delete participant more button                  |
            | participants | all  | participants add participant button | participants share debt status button | participants add participant button | participants section            | Grupo H | with expenses    | delete participant more button                  |
            | participants | all  | back                                | items group                           | button create group                 | title                           | Grupo M | without expenses | delete participant more button without expenses |

    @EGR011
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Do not remove participants
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "delete participant more button" action from "participants" section of group "payments"
        And the user "no delete" "1" participants
        Then the user sees the following items in the screen
            | item                             |
            | header                           |
            | delete participant title         |
            | delete participant close button  |
            | delete participant delete button |
            | delete participant close link    |

    @EGR012
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: User <case> screen remove participant
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "delete participant more button" action from "expenses" section of group "payments"
        And the user "<case>" "1" the delete participants screen
        Then the user sees the following items in the screen
            | item    |
            | header  |
            | <item1> |
            | <item2> |
            | <item3> |
            | <item4> |
        Examples:
            | case     | item1                       | item2                           | item3                              | item4                           |
            | exits    | expenses associate payment  | expenses add cash expense       | expenses delete expense or payment | expenses more operatives button |
            | no exits | delete participant title    | delete participant close button | delete participant delete button   | delete participant close link   |

    @EGR013
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: Change participant name <case>
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "<group>"
        And the user enters the "<button>" action from participants detail
        And the user changes name participant
        Then the user sees the following items in the screen
            | item                                   |
            | header                                 |
            | member detail title                    |
            | member detail back button              |
            | member detail card container           |
            | member detail pending payments section |
        Examples:
            | case                      | group        | button                                 |
            | with several participants | Grupo U      | edit information modal no more actions |
            | no debt                   | Cumpleaños A | edit information modal no debt         |
            | owe money                 | payments     | edit information modal owe money       |

    @EGR014
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: User no edit the information the participant <case>
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "<debtor>" action from "participants" section of group "<group>"
        And the user enters the "<button>" action from participants detail
        And the user "does not edit" the information
        Then the user sees the following items in the screen
            | item                          |
            | header                        |
            | edit information input name   |
            | edit information input number |
            | edit information save button  |
            | edit information close link   |
        Examples:
            | case                    | debtor        | group                 | button                         |
            | with pending invitation | first debtor  | Tacos                 | edit information modal         |
            | with debts              | second debtor | Grupo B               | edit information modal         |
            | with debts to several   | third debtor  | Grupo B               | edit information modal         |
            | debt free               | fourth debtor | mark as paid only one | edit information modal no debt |

    @EGR015
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: User <option> the group <case>
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "<group>"
        And the user enters the "<button>" action from participants detail
        And the user "<option>" the group
        Then the user sees the following items in the screen
            | item                                   |
            | header                                 |
            | member detail title                    |
            | member detail back button              |
            | member detail card container           |
            | member detail pending payments section |
        Examples:
            | case                      | group   | button                   | option         |
            | with several participants | Grupo U | delete participant modal | leaves         |
            | no debt                   | Grupo G | delete participant       | leaves         |
            | owe money                 | Grupo X | delete participant       | leaves         |
            | with several participants | Grupo U | delete participant modal | does not leave |
            | no debt                   | Grupo G | delete participant       | does not leave |
            | owe money                 | Grupo X | delete participant       | does not leave |

    @EGR016
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: User <option> the participant <case>
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "<debtor>" action from "participants" section of group "<group>"
        And the user enters the "delete participant" action from participants detail
        And the user "<option>" the group
        Then the user sees the following items in the screen
            | item    |
            | header  |
            | <item1> |
            | <item2> |
            | <item3> |
            | <item4> |
        Examples:
            | option         | case                               | debtor        | group                 | item1                               | item2                                 | item3                               | item4                                  |
            | leaves         | with debits only with the user     | first debtor  | mark as paid only one | member detail title                 | member detail back button             | member detail card container        | member detail pending payments section |
            | leaves         | with debts                         | second debtor | mark as paid only one | participants add participant button | participants share debt status button | participants add participant button | participants section                   |
            | leaves         | with debts to several participants | third debtor  | mark as paid only one | member detail title                 | member detail back button             | member detail card container        | member detail pending payments section |
            | leaves         | the user owes                      | fourth debtor | Grupo D               | member detail title                 | member detail back button             | member detail card container        | member detail pending payments section |
            | does not leave | with debts                         | second debtor | mark as paid only one | member detail title                 | member detail back button             | member detail card container        | member detail pending payments section |
            | does not leave | the user owes                      | fourth debtor | debt expenses         | member detail title                 | member detail back button             | member detail card container        | member detail pending payments section |

    @EGR017
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario Outline: User edit the information the participant <case>
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "<debtor>" action from "participants" section of group "mark as paid only one"
        And the user enters the "edit information modal" action from participants detail
        And the user edits name and number information
        Then the user sees the following items in the screen
            | item                                   |
            | header                                 |
            | member detail title                    |
            | member detail back button              |
            | member detail card container           |
            | member detail pending payments section |
        Examples:
            | case                    | debtor        |
            | with pending invitation | second debtor |
            | debt free               | third debtor  |

    @EGR018
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Exit pending payments screen
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "mark as paid only one"
        And the user exits pending payments screen
        Then the user sees the following items in the screen
            | item                                   |
            | header                                 |
            | member detail title                    |
            | member detail back button              |
            | member detail card container           |
            | member detail pending payments section |

    @EGR019
    @MX @vbank @web-done @backend(test)
    @web @android @ios
    Scenario: Deletes the group name
        Given a user with the following criteria
            | criteria            |
            | with expense groups |
            | accounts            |
        When the user accesses the expenses group "list"
        And the user deletes the group name
        Then the user sees the following items in the screen
            | item                         |
            | header                       |
            | create group title           |
            | input group name             |
            | input clear                  |
            | button continue create group |

@expensesGroup @debtsSettlement
Feature: Debts Settlement

    @DSE001
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @smokeTest @backend-smoke
    Scenario: Screen validation - Group details screen
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "request payment" action from "participants" section of group "debt expenses"
        Then the user sees the following items in the screen
            | item                          | value    |
            | request payment title         |          |
            | request payment description   |          |
            | request payment close button  |          |
            | request payment panel members |          |
            | request payment panel button  | disabled |

    @DSE002
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Exit the screen - Request payment screen
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "request payment" action from "participants" section of group "debt expenses"
        And the user selects a person with debt and exits the process
        Then the user sees the following items in the screen
            | item                                  |
            | expenses section                      |
            | participants section                  |
            | participants request payment button   |
            | participants add participant button   |
            | participants share debt status button |
            | participants more operatives button   |
            | participants debtors panel            |

    @DSE003
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Operational menu - Participants tab
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "more" action from "participants" section of group "debt expenses"
        Then the user sees the following items in the screen
            | item                            |
            | modal button request payment    |
            | modal button add participant    |
            | modal button share debt status  |
            | modal button change name        |
            | modal button delete participant |
            | modal button invite to group    |
            | modal button delete group       |

    @DSE004
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Request payment from the more operative
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "more" action from "participants" section of group "debt expenses"
        And the user enters the "request payment" action from participants modal
        Then the user sees the following items in the screen
            | item                          | value    |
            | request payment title         |          |
            | request payment description   |          |
            | request payment close button  |          |
            | request payment panel members |          |
            | request payment panel button  | disabled |

    @DSE005
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Operational menu (Me) - Participant with outstanding payments
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "debt expenses"
        And the main creditor request a participant with pending payments
        Then the user sees the following items in the screen
            | item                                        | value    |
            | member detail request payment title         |          |
            | member detail request payment description   |          |
            | member detail request payment close button  |          |
            | member detail request payment panel members |          |
            | member detail request payment panel button  | disabled |

    @DSE006
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: Operational menu (Me) - Mark "<participant>" <case> as paid
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "mark as paid"
        And the user marks "<participant>" participants as paid
        Then the user sees the following items in the screen
            | item                                   |
            | mark as paid receipt title             |
            | mark as paid receipt close button      |
            | mark as paid receipt panel information |
            | mark as paid receipt members details   |
            | mark as paid receipt exit button       |

        Examples:
            | participant | case         |
            | all         | participants |
            | one         | participant  |
            | only one    | participant  |

    @DSE007
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Operational menu - Send reminder
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "debt expenses"
        And the main creditor selects a participant to send a payment reminder
        Then the user sees the following items in the screen
            | item                                | value    |
            | send payment reminder title         |          |
            | send payment reminder description   |          |
            | send payment reminder close button  |          |
            | send payment reminder panel members |          |
            | send payment reminder button        | enabled  |

    @DSE008
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: The user enters the expense group
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "debt expenses" group
        And the user is in the "participants" section
        Then the user sees the following items in the screen
            | item                                  |
            | expenses section                      |
            | participants section                  |
            | participants request payment button   |
            | participants add participant button   |
            | participants share debt status button |
            | participants more operatives button   |
            | participants debtors panel            |

    @DSE009
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Indebted to me - Mark as paid
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "indebted to me"
        And the user marks "one" participants as paid
        Then the user sees the following items in the screen
            | item                                   |
            | mark as paid receipt title             |
            | mark as paid receipt close button      |
            | mark as paid receipt panel information |
            | mark as paid receipt members details   |
            | mark as paid receipt exit button       |

    @DSE010
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Indebted to me - Delete a participant
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "third debtor" action from "participants" section of group "indebted to me"
        And the main creditor deletes a participant selected
        Then the user sees the following items in the screen
            | item                        |
            | confirm modal warning icon  |
            | confirm modal description   |
            | confirm modal accept button |
            | confirm modal cancel link   |

    @DSE011
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: In debt with other participants - Screen validation
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "indebted to others"
        Then the user sees the following items in the screen
            | item                                  |
            | expenses section                      |
            | participants section                  |
            | participants request payment button   |
            | participants add participant button   |
            | participants share debt status button |
            | participants more operatives button   |
            | participants debtors panel            |

    @DSE012
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: In debt with other participants - Mark as paid
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "indebted to others"
        And the user marks the debt of "another" participants as paid
        Then the user sees the following items in the screen
            | item                                   |
            | mark as paid receipt title             |
            | mark as paid receipt close button      |
            | mark as paid receipt panel information |
            | mark as paid receipt members details   |
            | mark as paid receipt exit button       |

    @DSE013
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: In debt with other participants - Delete participant
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "indebted to others"
        And the user enters the "delete participant" action from participants detail
        Then the user sees the following items in the screen
            | item                        |
            | confirm modal warning icon  |
            | confirm modal description   |
            | confirm modal accept button |
            | confirm modal cancel link   |

    @DSE014
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: More than one participant owes to each other - Mark "<participant>" <case> as paid
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "third debtor" action from "participants" section of group "owes to each other"
        And the user marks the debt of "<participant>" participants as paid
        Then the user sees the following items in the screen
            | item                                   |
            | mark as paid receipt title             |
            | mark as paid receipt close button      |
            | mark as paid receipt panel information |
            | mark as paid receipt members details   |
            | mark as paid receipt exit button       |

        Examples:
            | participant | case         |
            | all         | participants |
            | another     | participant  |

    @DSE015
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: I owe some participants - Mark "<participant>" as paid
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "owe others"
        And the user marks as paid "<participant>" who owes them
        Then the user sees the following items in the screen
            | item                                   |
            | mark as paid receipt title             |
            | mark as paid receipt close button      |
            | mark as paid receipt panel information |
            | mark as paid receipt members details   |
            | mark as paid receipt exit button       |

        Examples:
            | participant      |
            | a participant    |
            | all participants |

    @DSE016
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Validates the payment made modal
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "owe others"
        And the user marks as paid a participant who owes them and validates the payment
        Then the user sees the following items in the screen
            | item                     |
            | expenses section         |
            | participants section     |
            | expenses detail amount   |
            | expenses operatives row  |
            | expenses history panel   |

    @DSE017
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Operational menu validation
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "more" action from "participants" section of group "owe others"
        Then the user sees the following items in the screen
            | item                            |
            | modal button request payment    |
            | modal button add participant    |
            | modal button share debt status  |
            | modal button change name        |
            | modal button delete participant |
            | modal button invite to group    |
            | modal button delete group       |

    @DSE018
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Operational menu change name
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "more" action from "participants" section of group "owe others"
        And the user enters the "change name" action from participants modal
        Then the user sees the following items in the screen
            | item                            | value    |
            | change name group title         |          |
            | change name group close button  |          |
            | change name group input name    |          |
            | change name group save button   | disabled |
            | change name group close link    |          |

    @DSE019
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Operational menu add participant
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "more" action from "participants" section of group "owe others"
        And the user enters the "add participant" action from participants modal
        Then the user sees the following items in the screen
            | item                             |
            | add participant title            |
            | add participant close button     |
            | add participant description      |
            | add participant add new button   |
            | add participant from my contacts |

    @DSE020
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Operational menu delete participant
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "more" action from "participants" section of group "owe others"
        And the user enters the "delete participant" action from participants modal
        Then the user sees the following items in the screen
            | item                             |
            | delete participant title         |
            | delete participant close button  |
            | delete participant panel content |
            | delete participant delete button |
            | delete participant close link    |

    @DSE021
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Operational menu delete group
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "more" action from "participants" section of group "owe others"
        And the user enters the "delete group" action from participants modal
        Then the user sees the following items in the screen
            | item                       |
            | delete group warning icon  |
            | delete group description   |
            | delete group accept button |
            | delete group cancel link   |

    @DSE022
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: Indebted with more than one participant - Mark "<participant>" <case>
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "<member_detail>" action from "participants" section of group "owe others"
        And the user marks "<participant>" participants as paid
        Then the user sees the following items in the screen
            | item                                   |
            | mark as paid receipt title             |
            | mark as paid receipt close button      |
            | mark as paid receipt panel information |
            | mark as paid receipt members details   |
            | mark as paid receipt exit button       |

        Examples:
            | participant | member_detail  | case                                  |
            | one         | main creditor  | participant as paid                   |
            | all         | first debtor   | participants as paid from detail view |

    @DSE023
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Indebted with more than one participant - Group detail edit information
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "owe others"
        And the main creditor edits his personal information
        Then the user sees the following items in the screen
            | item                          | value    |
            | edit information title        |          |
            | edit information close button |          |
            | edit information input name   |          |
            | edit information save button  | disabled |
            | edit information close link   |          |

    @DSE024
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: Indebted with more than one participant - Screen validation of "<case>"
        Given a user with the following criteria
            | criteria            |
            | associate expenses  |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "<member_detail>" action from "participants" section of group "owe others"
        And the user "<case>" and show the confirmation modal
        Then the user sees the following items in the screen
            | item                        |
            | confirm modal warning icon  |
            | confirm modal description   |
            | confirm modal accept button |
            | confirm modal cancel link   |

        Examples:
            | member_detail | case             |
            | third debtor  | deletes a member |
            | main creditor | exits the group  |

    @DSE025
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Indebted with more than one participant - Operational menu other
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "main debtor" action from "participants" section of group "owe others"
        Then the user sees the following items in the screen
            | item                                   |
            | member detail title                    |
            | member detail back button              |
            | member detail card container           |
            | member detail menu operatives row      |
            | member detail pending payments section |
            | member detail pending payments panel   |

    @DSE026
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: Payment detail - <payment_detail> <case>
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "third-party" group
        And the user is in the "expenses" section
        And the user accesses the payment status "<payment_detail>"
        Then the user sees the following items in the screen
            | item                              | value   |
            | expenses detail title             | visible |
            | expenses detail back button       | visible |
            | expenses detail concept panel     | visible |
            | expenses detail panel information | visible |
            | expenses detail footer operatives | <item1> |
            | expenses detail left notification | <item2> |

        Examples:
            | payment_detail                   | item1       | item2       | case              |
            | i paid a third party             | visible     | not visible |                   |
            | a third party paid me            | visible     | not visible |                   |
            | a third party paid a third party | visible     | not visible |                   |
            | marked as paid                   | not visible | visible     | left notification |

    @DSE027
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Edit expenses from expenses detail
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "debt expenses" group
        And the user is in the "expenses" section
        And the user "edits" the "expense" from group detail
        Then the user sees the following items in the screen
            | item                               |
            | success screen title               |
            | success screen close button        |
            | success screen associate expense   |
            | success screen expense information |
            | success screen exit button         |

    @DSE028
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: Delete expenses from <section> group detail
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "<group>" group
        And the user is in the "expenses" section
        And the user "<action>" the "<section>" from group detail
        Then the user sees the following items in the screen
            | item                     |
            | expenses section         |
            | participants section     |
            | expenses detail amount   |
            | expenses operatives row  |
            | expenses history panel   |
            | expenses success message |

        Examples:
            | action  | section | group         |
            | deletes | payment | payments      |
            | deletes | expense | debt expenses |

    @DSE029
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario Outline: Cancel delete <section> from expenses detail
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "<group>" group
        And the user is in the "expenses" section
        And the user "<action>" the "<section>" from group detail
        Then the user sees the following items in the screen
            | item                                       |
            | expenses detail title                      |
            | expenses detail back button                |
            | expenses detail concept panel              |
            | debt expenses detail panel information     |
            | expenses detail footer operatives          |

        Examples:
            | action  | section | group         |
            | cancels | payment | payments      |
            | cancels | expense | debt expenses |

    @DSE030
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: There are no transactions on the expenses screen
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "debt-free" group
        And the user is in the "expenses" section
        Then the user sees the following items in the screen
            | item                          |
            | expenses section              |
            | participants section          |
            | expenses back button          |
            | expenses detail amount        |
            | expenses detail no movements  |

    @DSE031
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Non-customers - Operational menu
        Given a user with the following criteria
            | criteria            |
            | debt expenses       |
            | non customers       |
        When the user accesses the expenses group "list"
        And the user enters the "more" action from "participants" section of group "non customers"
        Then the user sees the following items in the screen
            | item                            |
            | modal button request payment    |
            | modal button add participant    |
            | modal button share debt status  |
            | modal button change name        |
            | modal button delete participant |
            | modal button invite to group    |
            | modal button delete group       |

    @DSE032
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Non-customers - Operational menu (Me) - Mark as paid
        Given a user with the following criteria
            | criteria            |
            | debt expenses       |
            | non customers       |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "non customers"
        And the user enters the "mark as paid modal" action from participants detail
        Then the user sees the following items in the screen
            | item                        | value    |
            | mark as paid title          |          |
            | mark as paid close button   |          |
            | mark as paid selected all   |          |
            | mark as paid selected one   |          |
            | mark as paid confirm button | disabled |

    @DSE033
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Complete a request payment
        Given a user with the following criteria
            | criteria            |
            | dimo payments       |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "indebted to others"
        And the user completes the payment of his debt
        Then the user sees the following items in the screen
            | item                              |
            | mark as paid modal confirm icon   |
            | mark as paid modal confirm title  |
            | mark as paid modal confirm info   |
            | mark as paid modal confirm button |
            | mark as paid modal confirm link   |

    @DSE034
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Request a payment at another time
        Given a user with the following criteria
            | criteria            |
            | dimo payments       |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "indebted to others"
        And the user completes the payment of his debt
        And the user selects the payment option "at another time"
        Then the user sees the following items in the screen
            | item                                   |
            | member detail title                    |
            | member detail back button              |
            | member detail card container           |
            | member detail menu operatives row      |
            | member detail pending payments section |
            | member detail pending payments panel   |

    @DSE035
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Close the screen mark as paid
        Given a user with the following criteria
            | criteria            |
            | dimo payments       |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "request payment" action from "participants" section of group "indebted to others"
        And the user closes the screen mark as paid
        Then the user sees the following items in the screen
            | item                                  |
            | expenses section                      |
            | participants section                  |
            | participants request payment button   |
            | participants add participant button   |
            | participants share debt status button |
            | participants more operatives button   |
            | participants debtors panel            |

    @DSE036
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: I owe some participants - Pay one participant
        Given a user with the following criteria
            | criteria            |
            | dimo payments       |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "request payment" action from "participants" section of group "indebted to others"
        And the user selects one participant and completes the payment of his debt
        Then the user sees the following items in the screen
            | item                                     |
            | detail mark as paid modal confirm icon   |
            | detail mark as paid modal confirm title  |
            | detail mark as paid modal confirm info   |
            | detail mark as paid modal confirm button |
            | detail mark as paid modal confirm link   |

    @DSE037
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Indebted with more than one participant (ME) - Complete a request payment
        Given a user with the following criteria
            | criteria            |
            | dimo payments       |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "main creditor" action from "participants" section of group "owe others"
        And the main creditor pays a participant they have a debt with
        Then the user sees the following items in the screen
            | item                              |
            | mark as paid modal confirm icon   |
            | mark as paid modal confirm title  |
            | mark as paid modal confirm info   |
            | mark as paid modal confirm button |
            | mark as paid modal confirm link   |

    @DSE038
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Indebted with more than one participant (OTHER) - Complete a request payment
        Given a user with the following criteria
            | criteria            |
            | dimo payments       |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "owe others"
        And the user pays a participant they have a debt with
        Then the user sees the following items in the screen
            | item                              |
            | mark as paid modal confirm icon   |
            | mark as paid modal confirm title  |
            | mark as paid modal confirm info   |
            | mark as paid modal confirm button |
            | mark as paid modal confirm link   |

    @DSE039
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Complete a request payment of non customer
        Given a user with the following criteria
            | criteria            |
            | dimo payments       |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "request payment" action from "participants" section of group "non customers"
        And the user completes the payment of his debt to a non client
        Then the user sees the following items in the screen
            | item                                     |
            | detail mark as paid modal confirm icon   |
            | detail mark as paid modal confirm title  |
            | detail mark as paid modal confirm info   |
            | detail mark as paid modal confirm button |
            | detail mark as paid modal confirm link   |

    @DSE040
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Complete a request payment of one non customer
        Given a user with the following criteria
            | criteria            |
            | dimo payments       |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "first debtor" action from "participants" section of group "non customers"
        And the user completes the payment of his debt
        Then the user sees the following items in the screen
            | item                                   |
            | member detail title                    |
            | member detail back button              |
            | member detail card container           |
            | member detail menu operatives row      |
            | member detail pending payments section |
            | member detail pending payments panel   |

    @DSE041
    @MX @vbank
    @backend(test)
    @web @android @ios
    @tmpExclude @JIRA.GLOMOMX-254311 @backend-smoke
    @alternate-scenarios-smoke
    Scenario: Indebted to more than one participant - Operational menu - Mark as paid
        Given a user with the following criteria
            | criteria            |
            | debt expenses group |
        When the user accesses the expenses group "list"
        And the user enters the "fourth debtor" action from "participants" section of group "Prueba Mike"
        And the user enters the "mark as paid modal" action from participants detail
        Then the user sees the following items in the screen
            | item                        | value    |
            | mark as paid title          |          |
            | mark as paid close button   |          |
            | mark as paid selected all   |          |
            | mark as paid selected one   |          |
            | mark as paid confirm button | disabled |

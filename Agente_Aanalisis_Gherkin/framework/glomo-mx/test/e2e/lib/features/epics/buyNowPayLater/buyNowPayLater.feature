@buyNowPayLaterAftersales
Feature: Buy Now Pay Later - Aftersales

    @BNPL001
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: Validate return to card detail when pressing back
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "manage financing lines"
        And the user goes back to previous page
        When the user accesses the "orange card detail" screen
        Then the user sees the following items in the screen
            | item                |
            | header              |
            | image debit card    |
            | financing line text |
            | financing line card |

    @BNPL002
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @smokeTest
    Scenario Outline: Check availability if <option>
        Given a user with the following criteria
            | criteria       |
            | aftersales     |
            | financing line |
            | <client>       |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "<step>"
        When the user access to the disposition detail and payment history
        Then the user sees the following items in the screen
            | item                      |
            | view more button          |
            | disposition section       |
            | disposition process panel |
            | payment history section   |
            | share disposition button  |
        Examples:
            | client             | option             | step            |
            | choose your term   | you are a customer | various product |
            | canceled provision | canceled provision | single product  |

    @BNPL003
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: Return to the dashboard when they are a non-customer
        Given a user with the following criteria
            | criteria       |
            | non customers  |
            | single product |
        And the user accesses the manage financing lines when non-customer
        When the user goes back to previous page
        Then the user sees the "dashboard" screen

    @BNPL004
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: The user views the disposition detail when non-customer
        Given a user with the following criteria
            | criteria             |
            | no account statement |
            | single product       |
            | late payment         |
        When the user accesses to dashboard
        Then the user sees the following items in the screen
            | item              |
            | buy now pay later |

    @BNPL005
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: Client with 2 lines - BBVA Choose Your Term - Pay and Plan
        Given a user with the following criteria
            | criteria            |
            | choose your term    |
            | pay and plan term   |
            | two financing lines |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to the provision page "manage financing lines"
        Then the user sees the following items in the screen
            | item                            |
            | header                          |
            | financing line detail           |
            | full deferred purchase card     |
            | bbva choose your term line card |

    @BNPL006
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario Outline: Cut-off date information - exit with "<option>" button
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "BBVA Choose Your Term"
        When the user accesses to "cut off date" information and exit with "<option>" option
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | financing actions           |
            | financing line detail       |
            | financing movements panel   |
            | financing movements by date |

        Examples:
            | option |
            | cross  |
            | accept |

    @BNPL007
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario Outline: Next payment date information - exit with "<option>" button
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "BBVA Choose Your Term"
        When the user accesses to "next payment date" information and exit with "<option>" option
        Then the user sees the following items in the screen
            | item                        |
            | header                      |
            | financing actions           |
            | financing line detail       |
            | financing movements panel   |
            | financing movements by date |

        Examples:
            | option |
            | cross  |
            | accept |

    @BNPL008
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: User consults account status
        Given a user with the following criteria
            | criteria             |
            | no account statement |
            | single product       |
            | late payment         |
        And the user accesses the manage financing lines when non-customer
        And the user accesses to the provision page "acount statement"
        When the user "last status" their available account statement
        Then the user sees the following items in the screen
            | item                                  |
            | cut-off date                          |
            | download account status report button |

    @BNPL009
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: Only one statement available
        Given a user with the following criteria
            | criteria           |
            | one financing line |
            | only one statement |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "acount statement"
        When the user "accesses" their available account statement
        Then the user sees the following items in the screen
            | item                                  |
            | cut-off date                          |
            | download account status report button |

    @BNPL010
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: The user does not have any account statements available
        Given a user with the following criteria
            | criteria              |
            | no account statement  |
            | non customers         |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to the provision page "acount statement"
        Then the user sees the following items in the screen
            | item                 |
            | status account title |

    @BNPL011
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: The user views the details of the disposition line
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to the provision page "line detail"
        Then the user sees the following items in the screen
            | item               |
            | line detail        |
            | product type       |
            | credit line number |
            | associated email   |
            | holder name        |
            | associated account |

    @BNPL012
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario Outline: Filter dispositions by "<status>" status on the movements screen
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "BBVA Choose Your Term"
        When the user filters dispositions by status "<status>"
        Then the user sees the following items in the screen
            | item                          |
            | edit filter                   |
            | dispositions detail           |
            | <dispositions>                |
            | dispositions movements filter |

        Examples:
            | status      | dispositions             |
            | completed   | completed dispositions   |
            | in progress | in progress dispositions |

    @BNPL013
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: Clear one filter from "filter results" screen
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "BBVA Choose Your Term"
        When the user filters the results by status "Completed"
        Then the user sees the following items in the screen
            | item                          |
            | edit filter                   |
            | dispositions detail           |
            | completed dispositions        |
            | dispositions movements filter |

    @BNPL014
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: Clear all status filter from "filter results" screen
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "BBVA Choose Your Term"
        And the user filters dispositions by status "Completed"
        When the user modifies the filters from the movements to show screen
        Then the user sees the following items in the screen
            | item                          |
            | edit filter                   |
            | dispositions detail           |
            | completed dispositions        |
            | in progress dispositions      |
            | dispositions movements filter |

    @BNPL015
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: Clear all filters from "movements to show" screen
        Given a user with the following criteria
            | criteria         |
            | aftersales       |
            | financing line   |
            | choose your term |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "BBVA Choose Your Term"
        When the user clears the filters on the movements screen
        Then the user sees the following items in the screen
            | item                     | value    |
            | header movements         |          |
            | movements cross button   |          |
            | completed filter check   |          |
            | in progress filter check |          |
            | movements filter button  | disabled |

    @BNPL016
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: Late payment no account statement
        Given a user with the following criteria
            | criteria             |
            | no account statement |
            | single product       |
            | late payment         |
        When the user accesses the manage financing lines when non-customer
        Then the user sees the following items in the screen
            | item         |
            | late payment |

    @BNPL017
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: Late payment
        Given a user with the following criteria
            | criteria       |
            | aftersales     |
            | single product |
            | late payment   |
        And the user accesses to the "operative" "debit" card product detail
        When the user accesses to the provision page "bbva choose your term single product"
        Then the user sees the following items in the screen
            | item         |
            | late payment |

    @BNPL018
    @backend(test)
    @android @web @ios
    @MX @vbank @tmpExclude @JIRA.GLOMOMX-254311
    @alternate-scenarios-smoke
    Scenario: User filtered without movements
        Given a user with the following criteria
            | criteria             |
            | no account statement |
            | non customers        |
        And the user accesses to the "operative" "debit" card product detail
        And the user accesses to the provision page "bbva choose your term single product"
        When the user filters dispositions by status "Completed"
        Then the user sees the following items in the screen
            | item               |
            | no movements image |
            | no movements text  |

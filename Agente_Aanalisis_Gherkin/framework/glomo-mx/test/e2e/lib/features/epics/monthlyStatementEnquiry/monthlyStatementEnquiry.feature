@monthlyStatementEnquiry
Feature: Monthly Statement Enquiry

    @MSE001
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @alternate-scenarios-smoke
    Scenario:  Screen validation - the user sees the statement enquiry card button
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        When the user accesses to more operatives of the card "4772102170339834"
        Then the user sees the following items in the screen
            | item                   |
            | statement enquiry card |

    @MSE002
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario:  Screen validation - the user accesses monthly statement card and selects other periods
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        And the user accesses to the monthly statement enquiry card screen
        When the user selects other periods
        Then the user sees the following items in the screen
            | item                                 | value         |
            | statement enquiry options            | 06 enero 2023 |
            | other statement enquiry              |               |
            | header                               |               |
            | card                                 |               |
            | card image                           |               |
            | card number                          |               |
            | balance                              |               |
            | period                               |               |
            | last statement enquiry               |               |
            | last statement enquiry radio button  |               |
            | last statement enquiry icon          |               |
            | last statement enquiry date          |               |
            | other statement enquiry radio button |               |
            | other statement enquiry label        |               |
            | other statement enquiry icon         |               |
            | other statement enquiry date         |               |

    @MSE003
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @alternate-scenarios-smoke
    Scenario:  Screen validation - the user sees the list of other periods
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        And the user accesses to the monthly statement enquiry card screen
        When the user selects other periods
        And the user displays the list
        Then the user sees the following items in the screen
            | item                           |
            | statement enquiry options list |

    @MSE004
    @backend(test)
    @MX
    @manual @JIRA.GLOMOMX-254407
    @web @vbank
    @web-done
    @alternate-scenarios-smoke
    Scenario Outline:  Screen validation - the user accesses monthly statement card when <statement>
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        When the user accesses to the monthly statement enquiry card screen
        Then the user sees the following items in the screen
            | item   | value   |
            | <item> | <value> |
        Examples:
            | value    | statement                 | item                    |
            | disabled | only have a one statement | other statement enquiry |
            |          | dont have a statement     | image without statement |

    @MSE005
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    @alternate-scenarios-smoke
    Scenario:  Screen validation - the user accesses monthly statement account and selects other periods
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        And the user accesses to the monthly statement enquiry account screen
        When the user selects other periods
        Then the user sees the following items in the screen
            | item                                 | value             |
            | statement enquiry options            | 22 diciembre 2022 |
            | other statement enquiry              |                   |
            | header                               |                   |
            | account                              |                   |
            | number                               |                   |
            | balance                              |                   |
            | period                               |                   |
            | last statement enquiry               |                   |
            | last statement enquiry radio button  |                   |
            | last statement enquiry icon          |                   |
            | last statement enquiry date          |                   |
            | other statement enquiry radio button |                   |
            | other statement enquiry label        |                   |
            | other statement enquiry icon         |                   |
            | other statement enquiry date         |                   |

    @MSE006
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @manual @JIRA.GLOMOMX-254407
    @alternate-scenarios-smoke
    Scenario Outline:  Screen validation - the user accesses monthly statement account when <statement>
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        When the user accesses to the monthly statement enquiry account screen
        Then the user sees the following items in the screen
            | item   | value   |
            | <item> | <value> |
        Examples:
            | value    | statement                 | item                    |
            | disabled | only have a one statement | other statement enquiry |
            |          | dont have a statement     | image without statement |

    @MSE007
    @backend(test)
    @MX
    @web @vbank @web-done
    @alternate-scenarios-smoke
    Scenario:  Screen validation - the user tries accesses monthly statement account
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        When the user accesses to the monthly statement enquiry account screen
        Then the user sees the following items in the screen
            | item                |
            | error icon          |
            | error description   |
            | error accept button |

    @MSE008
    @backend(test)
    @MX
    @smokeTest
    @web @vbank
    @web-done
    @tmpExclude @JIRA.GLOMOMX-192448
    @alternate-scenarios-smoke
    Scenario:  Screen validation - the user consults the monthly statement account of a previous period
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        And the user accesses to the monthly statement enquiry account screen
        When the user chooses "21 diciembre 2021" for the account statement period
        Then the user sees the following items in the screen
            | item                                 | value             |
            | statement enquiry options            | 21 diciembre 2021 |
            | other statement enquiry              |                   |
            | header                               |                   |
            | account                              |                   |
            | number                               |                   |
            | balance                              |                   |
            | period                               |                   |
            | last statement enquiry               |                   |
            | last statement enquiry radio button  |                   |
            | last statement enquiry icon          |                   |
            | last statement enquiry date          |                   |
            | other statement enquiry radio button |                   |
            | other statement enquiry label        |                   |
            | other statement enquiry icon         |                   |
            | other statement enquiry date         |                   |

    @MSE009
    @backend(test)
    @MX
    @web @vbank
    @web-done
    @alternate-scenarios-smoke
    @tmpExclude @JIRA.GLOMOMX-192448
    Scenario:  Screen validation - the user consults the monthly account statement of his card in a previous period
        Given a user with the following criteria
            | criteria          |
            | monthly statement |
        And the user accesses to the monthly statement enquiry card screen
        When the user chooses "06 diciembre 2022" for the account statement period
        Then the user sees the following items in the screen
            | item                                 | value             |
            | statement enquiry options            | 06 diciembre 2022 |
            | other statement enquiry              |                   |
            | header                               |                   |
            | card                                 |                   |
            | card image                           |                   |
            | card number                          |                   |
            | balance                              |                   |
            | period                               |                   |
            | last statement enquiry               |                   |
            | last statement enquiry radio button  |                   |
            | last statement enquiry icon          |                   |
            | last statement enquiry date          |                   |
            | other statement enquiry radio button |                   |
            | other statement enquiry label        |                   |
            | other statement enquiry icon         |                   |
            | other statement enquiry date         |                   |

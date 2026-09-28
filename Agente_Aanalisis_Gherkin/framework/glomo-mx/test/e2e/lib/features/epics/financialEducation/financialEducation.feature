@tipsFinance
Feature: Tips Finance

    @YGT001
    @ios @android @web @tmpExclude @JIRA.GLOMOMX-260224
    @MX @backend(test) @vbank
    @smokeTest
    Scenario Outline: View information on <slider> posts in the financialEducation feature
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses to dashboard
        And the user accesses the financial education operation
        When the user selects "<slider>" from the recent posts section
        Then the user sees the following items in the screen
                | item              |
                | header title      |
                | back button       |
                | menu button       |
                | banner image      |
                | main description  |

        Examples:
            | slider            |
            | sections          |
            | request my money  |

    @YGT002
    @ios @android @web @web-done
    @MX @backend(test) @vbank @smokeTest
    @manual @JIRA.GLOMOMX-260224
    Scenario: View information about the account category in the financial education feature
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses to dashboard
        And the user accesses the financial education operation
        And the user accesses the account category
        When the user selects "account" tip in tabs
        Then the user sees the following items in the screen
                | item              |
                | header title      |
                | back button       |
                | menu button       |
                | banner image      |
                | main description  |
                | bullets           |

    @YGT003
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    @manual @JIRA.GLOMOMX-260224
    Scenario: View information about the goals category in the financial education feature
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses to dashboard
        And the user accesses the financial education operation
        And the user accesses the goals category
        When the user selects "goals" tip in tabs
        Then the user sees the following items in the screen
                | item              |
                | header title      |
                | back button       |
                | menu button       |
                | banner image      |
                | main description  |
                | bullets           |

    @YGT004
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    @manual @JIRA.GLOMOMX-260224
    Scenario: View information about the saving category in the financial education feature
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses to dashboard
        And the user accesses the financial education operation
        And the user accesses the saving category
        When the user selects "saving" tip in tabs
        Then the user sees the following items in the screen
                | item              |
                | header title      |
                | back button       |
                | menu button       |
                | banner image      |
                | main description  |
                | bullets           |

    @YGT005
    @ios @android @web @web-done
    @MX @backend(test) @vbank
    @manual @JIRA.GLOMOMX-260224
    Scenario: View information about the security category in the financial education feature
        Given a user with the following criteria
                | criteria      |
                | minor account |
        And the user accesses to dashboard
        And the user accesses the financial education operation
        And the user accesses the security category
        When the user selects "security" tip in tabs
        Then the user sees the following items in the screen
                | item              |
                | header title      |
                | back button       |
                | menu button       |
                | banner image      |
                | main description  |
                | bullets           |
